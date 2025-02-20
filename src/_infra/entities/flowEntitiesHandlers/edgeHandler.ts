import { Edge, Node } from '@xyflow/react';

const generateId = (src: Node, tgt: Node) => {
  return `${src.id}-${tgt.id}`;
}

export const createEdge = (
  src: Node,
  tgt: Node,
  opts: Omit<Edge, 'id' | 'target' | 'source'> | undefined = undefined
): Edge => {
  return {...opts, id: generateId(src, tgt), source: src.id, target: tgt.id};
}