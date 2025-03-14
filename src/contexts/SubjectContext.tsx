import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Subject from "@/_infra/entities/Subject";
import { Edge, Node, OnEdgesChange, OnNodesChange, useEdgesState, useNodesState } from "@xyflow/react";
import { SubjectState } from "@/_infra/enums/SubjectState";
import subjects from "@/_data/subjects";
import { createNode } from "@/_infra/entities/flowEntitiesHandlers/nodeHandler";
import SubjectBox from "@/pages/components/SubjectBox";

interface SubjectContextType {
  onSubjectStateChange: (subject: Subject) => void;

  nodesHandlers: {
    nodes: Node<Subject>[];
    setNodes: React.Dispatch<React.SetStateAction<Node<Subject>[]>>;
    onNodesChange: OnNodesChange<Node<Subject>>;
  };

  edgesHandlers: {
    edges: Edge<any>[];
    setEdges: React.Dispatch<React.SetStateAction<Edge<any>[]>>;
    onEdgesChange: OnEdgesChange;
  };
}

const SubjectContext = createContext<SubjectContextType | undefined>(undefined);

export const SubjectProvider = ({children,}: { children: ReactNode }) => {
  const [loadedSubjects, setLoadedSubjects] = useState<Subject[]>(subjects);

  const [nodes, setNodes, onNodesChange] = useNodesState<Node<Subject>>([]);

  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge<any>>([]);

  // React
  useEffect(() => {
    loadSubjectsGroupedByPeriod();
  }, [loadedSubjects]);

  // Methods
  const loadSubjectsGroupedByPeriod = () => {
    const grouped = loadedSubjects
      .reduce((acc, x) => {
        if (!acc[x.period ?? -1]) {
          acc[x.period ?? -1] = [];
        }

        acc[x.period ?? -1].push(x);

        return acc;
      }, {} as { [key: number]: Subject[] });

    loadSubjectNodes(grouped);
  };

  const loadSubjectNodes = (grouped: { [key: number]: Subject[]; }) => {
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

        const node = createNode(subject, {x, y, componentName: SubjectBox.name});
        nodes.push(node);

        y += yStep;
      }

      y = yInit;
      x += xStep * 1.5;
    }

    setNodes(nodes);
  }

  const onSubjectStateChange = (subject: Subject) => {
    const updatedNodes = [];
    const nextNodes = nodes.filter(x => x.data.requirements.includes(subject.code));

    for (const node of nextNodes) {
      const data = {...node.data};
      const requirements = nodes.filter(x => data.requirements.includes(x.data.code));

      if (requirements.every(x => x.data.state === SubjectState.DONE)) {
        data.state = SubjectState.AVAILABLE;
        updatedNodes.push({...node, data});
      }
      else if (requirements.some(x => x.data.state !== SubjectState.DONE)) {
        data.state = SubjectState.UNAVAILABLE;
        updatedNodes.push({...node, data});
      }
    }

    console.log(nextNodes.map(x => x.data), subject);
    setNodes([...nodes]);
  }

  return <SubjectContext.Provider value={{
    onSubjectStateChange,
    nodesHandlers: {
      nodes,
      setNodes,
      onNodesChange,
    },
    edgesHandlers: {
      edges,
      setEdges,
      onEdgesChange
    }
  }}>{children}</SubjectContext.Provider>
}

export const useSubjectContext = () => {
  const context = useContext(SubjectContext);

  if (context === undefined) {
    throw new Error("useSubjectContext must be used within a SubjectProvider");
  }

  return context;
}