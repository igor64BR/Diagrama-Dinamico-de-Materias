import staticSubjects from "@/_data/subjects";
import Subject from "@/_infra/entities/Subject";
import { Node } from "@xyflow/react";
import { createNode } from "@/_infra/entities/flowEntitiesHandlers/nodeHandler";
import SubjectBox from "@/pages/components/SubjectBox";
import { SubjectState } from "@/_infra/enums/SubjectState";

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
    onSubjectStateChange: function (subject: Subject) {
      const index = subjects.findIndex(x => x.code === subject.code);
      subjects[index] = subject;

      const bockedSubjects = subjects
        .filter(x => x.requirements.includes(subject.code) &&
          [SubjectState.UNAVAILABLE, SubjectState.AVAILABLE].includes(x.state)
        );

      for (const blockedSubject of bockedSubjects) {
        const requirements = subjects.filter(x => blockedSubject.requirements.includes(x.code));

        if (requirements.every(x => x.state === SubjectState.DONE)) {
          blockedSubject.state = SubjectState.AVAILABLE
        } else {
          blockedSubject.state = SubjectState.UNAVAILABLE
        }

        this.onSubjectStateChange(blockedSubject);
      }
    }
  }
}