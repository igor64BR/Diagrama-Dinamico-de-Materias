import { Controls, Edge, Node, ReactFlow, ReactFlowProvider, useEdgesState, useNodesState, } from "@xyflow/react";
import React, { useEffect } from "react";
import FlowBg from "@/pages/reactFlowComponents/FlowBg";
import FlowMinimap from "@/pages/reactFlowComponents/FlowMinimap";
import SubjectBox from "../components/SubjectBox";
import useSubjectNodesHandler from "@/utils/useSubjectNodesHandler";
import Subject from "@/_infra/entities/Subject";
import { createEdge } from "@/_infra/entities/flowEntitiesHandlers/edgeHandler";

export default function FlowBody() {
  const subjectNodesHandler = useSubjectNodesHandler();

  // Data
  const [nodes, setNodes] = useNodesState<Node<Subject>>([]);
  const [edges, setEdges] = useEdgesState<Edge>([]);

  // React
  useEffect(() => {
    loadNodes();
  }, []);

  // Methods
  const loadNodes = () => {
    const nodes = subjectNodesHandler.getAll()
    setNodes(nodes);

    const edges = nodes
      .filter(x => x.data.requirements.length > 0)
      .map(x => x.data.requirements.map(y => createEdge(
        nodes.find(x => x.data.code === y)!,
        x,
        {type: 'straight', style: {stroke: '#0000'}},
      ))).flat();

    setEdges(edges);
  }

  const showEdgeTree = (nodeId: string, show: boolean) => {
    // requirements side

    // dependents side
  }

  return (
    <ReactFlowProvider>
      <ReactFlow
        style={{color: 'black'}}
        nodes={nodes}
        edges={edges}
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
              onMouseOver={(id) => showEdgeTree(id, true)}
              onMouseOut={(id) => showEdgeTree(id, false)}
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