import React, { createContext, ReactNode, useContext, useState } from "react";
import Subject from "@/_infra/entities/Subject";
import { Edge, Node, OnEdgesChange, OnNodesChange, useEdgesState, useNodesState } from "@xyflow/react";
import { SubjectState } from "@/_infra/enums/SubjectState";

interface SubjectContextType {
  subjectsHandlers: {
    subjects: Subject[];
    setSubjects: React.Dispatch<React.SetStateAction<Subject[]>>;
    onSubjectStateChange: (subject: Subject) => void;
  };

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
  const [subjects, setSubjects] = useState<Subject[]>([]);

  const [nodes, setNodes, onNodesChange] = useNodesState<Node<Subject>>([]);

  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge<any>>([]);

  const onSubjectStateChange = (subject: Subject) => {
    const nextSubjects = subjects.filter(x => x.requirements.includes(subject.code));

    for (const nextSubject of nextSubjects.filter(x => x.state === SubjectState.UNAVAILABLE)) {
      const requirements = subjects.filter(x => nextSubject.requirements.includes(x.code));

      if (requirements.every(x => x.state === SubjectState.DONE))
        nextSubject.state = SubjectState.AVAILABLE;
    }

    setSubjects([...subjects]);
  }

  return <SubjectContext.Provider value={{
    subjectsHandlers: {
      subjects,
      setSubjects,
      onSubjectStateChange,
    },
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