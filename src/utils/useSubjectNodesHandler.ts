import staticSubjects from "@/_data/subjects";
import Subject from "@/_infra/entities/Subject";
import { Node } from "@xyflow/react";
import { createNode } from "@/_infra/entities/flowEntitiesHandlers/nodeHandler";
import SubjectBox from "@/pages/components/SubjectBox";

export default function useSubjectNodesHandler() {
  const subjects = [...staticSubjects];

  const getSubjectNodes = (
    grouped: { [key: number]: Subject[]; }
  ) => {
    const nodes: Node<Subject>[] = [];

    const xInit = 0;
    const yInit = 0;

    const xStep = 200;
    const yStep = 180;

    const yLimit = 800;

    let x = xInit;
    let y = yInit;

    for (const period of Object.keys(grouped)) {
      for (const subject of grouped[Number(period)]) {
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

        nodes.push(node);

        y += yStep;
      }

      y = yInit;
      x += xStep * 1.5;
    }

    return nodes;
  }

  return {
    getAll: function () {
      const grouped = subjects
        .reduce((acc, x) => {
          if (!acc[x.period ?? -1]) {
            acc[x.period ?? -1] = [];
          }

          acc[x.period ?? -1].push(x);

          return acc;
        }, {} as { [key: number]: Subject[] });

      return getSubjectNodes(grouped);
    },
    updateSubjectState: function (subject: Subject) {
      const index = subjects.findIndex(x => x.code === subject.code);

      subjects[index] = {
        ...subjects[index],
        state: subject.state
      }
    },
    getRequirements: function (subject: Subject) {
      return this.getAll().filter(x => subject.requirements.includes(x.data.code));
    },
  }
}