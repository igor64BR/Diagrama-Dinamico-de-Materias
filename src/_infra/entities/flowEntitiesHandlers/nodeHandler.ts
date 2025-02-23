import { Node } from '@xyflow/react';

export const createNode = <T extends Record<string, unknown>>(
  data: T,
  renderOpts: { x: number, y: number, componentName: string },
  opts: Omit<Node, 'id' | 'data' | 'position' | 'type'> | undefined = undefined
): Node<T> => {
  return {
    id: Math.random().toString(),
    position: { x: renderOpts.x, y: renderOpts.y },
    data: data,
    type: renderOpts.componentName,
    ...opts,
  };
};