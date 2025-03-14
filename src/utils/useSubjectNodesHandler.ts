import subjects1 from "@/_data/subjects";
import Subject from "@/_infra/entities/Subject";
import { Node } from "@xyflow/react";
import { createNode } from "@/_infra/entities/flowEntitiesHandlers/nodeHandler";
import SubjectBox from "@/pages/components/SubjectBox";

export default function useSubjectNodesHandler() {
  let nodes: Node<Subject>[] = [];

  const initialize = () => {
    initNodes();
  }

  const initNodes = () => {
    const grouped = subjects1
      .reduce((acc, x) => {
        if (!acc[x.period ?? -1]) {
          acc[x.period ?? -1] = [];
        }

        acc[x.period ?? -1].push(x);

        return acc;
      }, {} as { [key: number]: Subject[] });

    return createNodes(grouped);
  }

  const createNodes = (
    nodesGroupedByPeriod: { [key: number]: Subject[]; }
  ) => {
    const createdNodes: Node<Subject>[] = [];

    const xInit = 0;
    const yInit = 0;

    const xStep = 200;
    const yStep = 180;

    const yLimit = 800;

    let x = xInit;
    let y = yInit;

    for (const period of Object.keys(nodesGroupedByPeriod)) {
      for (const subject of nodesGroupedByPeriod[Number(period)]) {
        if (y > yLimit) {
          y = yInit;
          x += xStep;
        }

        const node = createNode(
          subject,
          {
            x,
            y,
            componentName: SubjectBox.name
          }
        );

        createdNodes.push(node);

        y += yStep;
      }

      y = yInit;
      x += xStep * 1.5;
    }

    nodes = createdNodes;
  }

  initialize();

  return {
    getAll: function () {
      return nodes;
    },
    getByCode: function(code: string) {
      const node = nodes.find(x => x.data.code === code);

      if (!node) throw new Error(`Node with code ${code} not found`);

      return node;
    },
    getRequirements: function (subject: Subject) {
      return this.getAll()
        .filter(x => subject.requirements.includes(x.data.code));
    },
    getRequirementsTree: function (subject: Subject) {
      const currentRequirements = this.getRequirements(subject);

      const requirements: Node<Subject>[] = [...currentRequirements];

      for (const requirement of currentRequirements) {
        requirements.push(...this.getRequirementsTree(requirement.data));
      }

      return requirements;
    },
    getDependentsTree: function (subject: Subject) {
      const dependents = this.getAll()
        .filter(x => x.data.requirements.includes(subject.code));

      const dependentsTree: Node<Subject>[] = [...dependents];

      for (const dependent of dependents) {
        dependentsTree.push(...this.getDependentsTree(dependent.data));
      }

      return dependentsTree;
    },
    updateSubjectState: function (subject: Subject) {
      const index = nodes.findIndex(x => x.data.code === subject.code);

      nodes[index] = {
        ...nodes[index],
        data: {
          ...nodes[index].data,
          state: subject.state
        }
      }
    },
  }
}