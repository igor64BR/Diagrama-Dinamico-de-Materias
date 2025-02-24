import { Handle, Node, NodeProps, Position } from "@xyflow/react";
import Subject from "@/_infra/entities/Subject";
import React, { useEffect, useState } from "react";
import { getStateName, SelectableStates, stateColors, StateStyles } from "@/_infra/enums/SubjectState";
import { BaseNode } from "@/components/base-node";
import {
  NodeHeader,
  NodeHeaderActions,
  NodeHeaderIcon,
  NodeHeaderMenuAction,
  NodeHeaderTitle,
} from "@/components/node-header";
import {
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { Box, Typography } from "@mui/material";


export default function SubjectBox(
  {
    data: {
      type,
      name,
      code,
      state,
      period,
      requirements,
    }
  }: NodeProps<Node<Subject>>) {
  // Data
  const [color, setColor] = useState<StateStyles>({bgColor: '', fontColor: ''});

  const [selectedState, setSelectedState] = useState(state);

  // UseEffect
  useEffect(() => {
    loadColor();
  }, [selectedState]);

  // Methods
  const loadColor = () => {
    setColor(stateColors[selectedState]);
  }

  return (
    <BaseNode style={{backgroundColor: color.bgColor, color: color.fontColor}}>
      <NodeHeader className={'px-3 border-b'}>
        <NodeHeaderIcon>
          <Typography fontSize={'smaller'} fontWeight={'bold'}>{period}</Typography>
        </NodeHeaderIcon>
        <NodeHeaderTitle>{code}</NodeHeaderTitle>
        <NodeHeaderActions>
          <NodeHeaderMenuAction label={'Selecionar Estado'}>
            <DropdownMenuLabel>Selecione um estado</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuRadioGroup
              value={selectedState.toString()}
              onValueChange={(newState) => setSelectedState(parseInt(newState))}
            >
              {Object.values(SelectableStates).map((state, index) => (
                <DropdownMenuRadioItem key={index} value={state.toString()}>
                  {getStateName(state)}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </NodeHeaderMenuAction>
        </NodeHeaderActions>
      </NodeHeader>
      <Box width={150} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Typography textAlign={'center'}>{name}</Typography>
      </Box>
      {requirements.length && <Handle
          type={'target'}
          position={Position.Left}

      />}
      <Handle type={'source'} position={Position.Right}/>
    </BaseNode>
  );
}
