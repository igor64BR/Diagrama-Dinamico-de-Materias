import { Controls, Node, ReactFlow, ReactFlowProvider, useNodesState, } from "@xyflow/react";
import React, { useEffect, useRef } from "react";
import FlowBg from "@/pages/reactFlowComponents/FlowBg";
import FlowMinimap from "@/pages/reactFlowComponents/FlowMinimap";
import SubjectBox from "../components/SubjectBox";
import Subject from "@/_infra/entities/Subject";
import SubjectRepository from "@/_infra/repositories/subjectRepository";
import useSubjectNodesHandler, { ISubjectNodesHandler } from "@/utils/useSubjectNodesHandler";

const subjectRepository = new SubjectRepository();

export default function FlowBody() {
  // Data
  const [nodes, setNodes] = useNodesState<Node<Subject>>([]);
  const nodesHandler = useRef<ISubjectNodesHandler>({} as any);

  // React
  useEffect(() => {
    void initialize();
  }, []);

  const initialize = async () => {
    const subjects = await subjectRepository.getAll();

    nodesHandler.current = useSubjectNodesHandler(subjects.map(x => new Subject(x)));

    loadNodes();
  }

  // Methods
  const loadNodes = () => {
    const nodes = nodesHandler.current.getAll();

    setNodes(nodes);
  }

  return (
    <ReactFlowProvider>
      <ReactFlow
        style={{color: 'black'}}
        nodes={nodes}
        nodeTypes={{
          [SubjectBox.name]: (props) => (
            <SubjectBox
              id={props.id}
              isConnectable={false}
              positionAbsoluteX={props.data.x}
              positionAbsoluteY={props.data.y}
              zIndex={props.data.zIndex}
              data={props.data}
              type={props.type}
              draggable={false}
              dragging={false}
              selectable={false}
              deletable={false}
              selected={false}
              repository={subjectRepository}
              onStateChange={() => loadNodes()}
              onMouseOver={(id) => {}}
              onMouseOut={(id) => {}}
            />
          )
        }}
        fitView
      >
        <FlowBg/>
        <FlowMinimap/>
        <Controls/>
      </ReactFlow>
    </ReactFlowProvider>
  )
}