import { Node } from '@xyflow/react';
import { v4 as uuidv4 } from 'uuid';

export const createNode = <T extends Record<string, unknown>>(
  data: T,
  renderOpts: { x: number, y: number, componentName: string },
  opts: Omit<Node, 'id' | 'data' | 'position' | 'type'> | undefined = undefined
): Node<T> => {
  return {
    id: uuidv4(),
    position: { x: renderOpts.x, y: renderOpts.y },
    data: data,
    type: renderOpts.componentName,
    ...opts,
  };
};