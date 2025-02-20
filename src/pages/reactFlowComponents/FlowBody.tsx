import {
  addEdge,
  Connection,
  Controls,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState
} from "@xyflow/react";
import React, { useCallback } from "react";
import FlowBg from "@/pages/reactFlowComponents/FlowBg";
import FlowMinimap from "@/pages/reactFlowComponents/FlowMinimap";
import { createNode } from "@/_infra/entities/flowEntitiesHandlers/nodeHandler";
import { createEdge } from "@/_infra/entities/flowEntitiesHandlers/edgeHandler";

export default function FlowBody() {
  const [nodes, setNodes, onNodesChange] = useNodesState([
    createNode({ label: 'Node 1' }, { x: 100, y: 100 }),
    createNode({ label: 'Node 2' }, { x: 200, y: 200 }),
  ]);

  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback((connection: Connection) => {
    const src = nodes.find(n => n.id === connection.source);
    const tgt = nodes.find(n => n.id === connection.target);

    if (!src || !tgt) throw new Error('Node not found');

    const edge = createEdge(src, tgt);

    setEdges(prevState => addEdge(edge, prevState) as any);
  }, [])

  return (
    <ReactFlowProvider>
      <ReactFlow
        style={{color: 'black'}}
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <FlowBg/>
        <FlowMinimap/>
        <Controls/>
      </ReactFlow>
    </ReactFlowProvider>
  )
}