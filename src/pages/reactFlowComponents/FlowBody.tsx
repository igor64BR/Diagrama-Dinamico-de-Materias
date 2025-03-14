import { Controls, Node, ReactFlow, ReactFlowProvider, useNodesState, } from "@xyflow/react";
import React, { useEffect } from "react";
import FlowBg from "@/pages/reactFlowComponents/FlowBg";
import FlowMinimap from "@/pages/reactFlowComponents/FlowMinimap";
import SubjectBox from "../components/SubjectBox";
import useSubjectNodesHandler from "@/utils/useSubjectNodesHandler";
import Subject from "@/_infra/entities/Subject";

export default function FlowBody() {
  // Data
  const subjectNodesHandler = useSubjectNodesHandler();

  // React
  const [nodes, setNodes] = useNodesState<Node<Subject>>([]);

  useEffect(() => {
    loadNodes();
  }, []);

  // Methods
  const loadNodes = () => {
    setNodes(subjectNodesHandler.getAll());
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
              onStateChange={() => loadNodes()}
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