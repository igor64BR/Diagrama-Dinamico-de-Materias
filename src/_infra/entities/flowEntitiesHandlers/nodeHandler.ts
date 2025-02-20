import { Node } from '@xyflow/react';

export const createNode = <T extends Record<string, unknown>>(
  data: T,
  position: { x: number, y: number },
  opts: Omit<Node, 'id' | 'data' | 'position'> | undefined = undefined
): Node => {
  return {
    id: Math.random().toString(),
    position: position,
    data: data,
    ...opts,
  };
};