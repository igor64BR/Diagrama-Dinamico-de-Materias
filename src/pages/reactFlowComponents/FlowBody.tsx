import {
  addEdge,
  Connection,
  Controls,
  Node,
  ReactFlow,
  ReactFlowProvider,
} from "@xyflow/react";
import React, { useCallback, useEffect } from "react";
import FlowBg from "@/pages/reactFlowComponents/FlowBg";
import FlowMinimap from "@/pages/reactFlowComponents/FlowMinimap";
import { createNode } from "@/_infra/entities/flowEntitiesHandlers/nodeHandler";
import { createEdge } from "@/_infra/entities/flowEntitiesHandlers/edgeHandler";
import subjects from "@/_data/subjects";
import Subject from "@/_infra/entities/Subject";
import SubjectBox from "../components/SubjectBox";
import { useSubjectContext } from "@/contexts/SubjectContext";

export default function FlowBody() {
  // Data
  const {
    nodesHandlers: {
      nodes,
      setNodes,
      onNodesChange
    },
    edgesHandlers: {
      edges,
      setEdges,
      onEdgesChange
    }
  } = useSubjectContext();

  // React
  useEffect(() => {
    loadSubjectsGroupedByPeriod();
  }, []);

  useEffect(() => {
    loadSubjectEdges();
  }, [nodes]);

  // Methods
  const loadSubjectsGroupedByPeriod = () => {
    const grouped = subjects
      // .filter(x => [x.code, ...x.requirements].includes('COM06853'))
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

  const onConnect = useCallback((connection: Connection) => {
    const src = nodes.find(n => n.id === connection.source);
    const tgt = nodes.find(n => n.id === connection.target);

    if (!src || !tgt) throw new Error('Node not found');

    const edge = createEdge(src, tgt);

    setEdges(prevState => addEdge(edge, prevState) as any);
  }, [nodes])

  const loadSubjectEdges = () => {
    const edges = nodes
      .filter(n => n.data.requirements.length)
      .flatMap(n => n.data.requirements.map(r => {
        const src = nodes.find(x => x.data.code === r);

        if (!src) {
          return;
        }

        return createEdge(src, n, {state: src.data.state}, {type: 'smoothstep'});
      }));

    setEdges(edges.filter(x => x !== undefined));
  }

  return (
    <ReactFlowProvider>
      <ReactFlow
        style={{color: 'black'}}
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={{
          [SubjectBox.name]: SubjectBox
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