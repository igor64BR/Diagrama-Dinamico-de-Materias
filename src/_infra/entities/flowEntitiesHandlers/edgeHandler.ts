import { Edge, Node } from '@xyflow/react';

const generateId = (src: Node, tgt: Node) => {
  return `${src.id}-${tgt.id}`;
}

export const createEdge = <
  TNode extends Record<string, unknown>,
  TData extends Record<string, unknown>>(
  src: Node<TNode>,
  tgt: Node<TNode>,
  data?: TData,
  opts: Omit<Edge, 'id' | 'target' | 'source' | 'data'> | undefined = undefined
): Edge<TData> => {
  return {...opts, data: data, id: generateId(src, tgt), source: src.id, target: tgt.id};
}