import {
    addEdge,
    Connection,
    Controls,
    Node,
    ReactFlow,
    ReactFlowProvider,
    useEdgesState,
    useNodesState
} from "@xyflow/react";
import React, {useCallback, useEffect} from "react";
import FlowBg from "@/pages/reactFlowComponents/FlowBg";
import FlowMinimap from "@/pages/reactFlowComponents/FlowMinimap";
import {createNode} from "@/_infra/entities/flowEntitiesHandlers/nodeHandler";
import {createEdge} from "@/_infra/entities/flowEntitiesHandlers/edgeHandler";
import subjects from "@/_data/subjects";
import Subject from "@/_infra/entities/Subject";
import SubjectBox from "../components/SubjectBox";

export default function FlowBody() {
    // Data

    // React
    useEffect(() => {
        loadSubjectsGroupedByPeriod();
    }, []);

    // Flow
    const [nodes, setNodes, onNodesChange] = useNodesState<Node<Subject>>([]);

    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    // Methods
    const loadSubjectNodes = (grouped: { [key: number]: Subject[]; }) => {
        const nodes: Node<Subject>[] = [];

        for (const period of Object.keys(grouped)) {
            let x = Number(period) * 250;
            let y = 0;

            for (const subject of grouped[Number(period)]) {
                y += 100;

                if (y > 500) {
                    x += 250;
                    y = 100;
                }

                const node = createNode(subject, {x, y, componentName: SubjectBox.name});
                nodes.push(node);
            }
        }

        setNodes(nodes);
    }

    const loadSubjectsGroupedByPeriod = () => {
        const grouped = subjects.reduce((acc, x) => {
            if (!acc[x.period ?? -1]) {
                acc[x.period ?? -1] = [];
            }
            acc[x.period ?? -1].push(x);
            return acc;
        }, {} as { [key: number]: Subject[] });

        loadSubjectNodes(grouped);
    };

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