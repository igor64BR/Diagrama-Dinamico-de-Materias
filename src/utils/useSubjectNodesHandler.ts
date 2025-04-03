import { Node } from "@xyflow/react";
import { createNode } from "@/_infra/entities/flowEntitiesHandlers/nodeHandler";
import SubjectBox from "@/pages/components/SubjectBox";
import Subject from "@/_infra/entities/Subject";
import SubjectRepository from "@/_infra/repositories/subjectRepository";

export interface ISubjectNodesHandler {
  getAll: () => Node<Subject>[];
  updateSubjectState: (subject: Subject) => Promise<void>;
}

export default function useSubjectNodesHandler(subjects: Subject[]) : ISubjectNodesHandler {
  const repository = new SubjectRepository();

  let nodes: Node<Subject>[] = [];

  const initialize = () => {
    void initNodes();
  }

  const initNodes = () => {
    const grouped = subjects
      .reduce((acc, x) => {
          if (!acc[x.period ?? -1]) {
            acc[x.period ?? -1] = [];
          }

          acc[x.period ?? -1].push(x);

          return acc;
        },
        {} as { [key: number]: Subject[] }
      );

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
    updateSubjectState: async function (subject: Subject) {
      const updatedSubject = await repository.update(subject.toSupaSubject());

      const index = nodes.findIndex(x => x.data.id === subject.id);

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