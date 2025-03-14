import { Handle, Node, NodeProps, Position } from "@xyflow/react";
import Subject from "@/_infra/entities/Subject";
import React, { useEffect, useState } from "react";
import { DisplayState, getStateName, stateColors, StateStyles, SubjectState } from "@/_infra/enums/SubjectState";
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
import useSubjectNodesHandler from "@/utils/useSubjectNodesHandler";

type SubjectBoxProps = NodeProps<Node<Subject>> & {
  onStateChange: () => void;
  onMouseOver: (nodeId: string) => void;
  onMouseOut: (nodeId: string) => void;
};

export default function SubjectBox(
  {
    id,
    data,
    onStateChange,
    onMouseOver,
    onMouseOut,
  }: SubjectBoxProps
) {
  const subjectNodeHandler = useSubjectNodesHandler();

  // Data
  const [color, setColor] = useState<StateStyles>({bgColor: '', fontColor: ''});

  const [selectedState, setSelectedState] = useState(data.state);

  const isFirstRender = React.useRef(true);

  // UseEffect
  useEffect(() => {
    loadColor();

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    data.state = selectedState;
    subjectNodeHandler.updateSubjectState(data);
    onStateChange();
  }, [selectedState]);

  // Methods
  const loadColor = () => {
    if (selectedState !== SubjectState.PENDING) {
      setColor(stateColors[selectedState]);
      return;
    }

    const requirements = subjectNodeHandler.getRequirements(data);

    setColor(stateColors[
      requirements.every(x => x.data.state === SubjectState.DONE)
        ? DisplayState.AVAILABLE
        : DisplayState.UNAVAILABLE
      ]);
  }

  return (
    <BaseNode
      style={{backgroundColor: color.bgColor, color: color.fontColor}}
      onMouseOverCapture={() => onMouseOver(id)}
      onMouseOutCapture={() => onMouseOut(id)}
    >
      <NodeHeader className={'px-3 border-b'}>
        <NodeHeaderIcon>
          <Typography fontSize={'smaller'} fontWeight={'bold'}>{data.period}</Typography>
        </NodeHeaderIcon>
        <NodeHeaderTitle>{data.code}</NodeHeaderTitle>
        <NodeHeaderActions>
          <NodeHeaderMenuAction label={'Selecionar Estado'}>
            <DropdownMenuLabel>Selecione um estado</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuRadioGroup
              value={selectedState.toString()}
              onValueChange={(newState) => setSelectedState(parseInt(newState))}
            >
              {Object.values(SubjectState)
                .filter(x => typeof x === 'number')
                .map((state, index) => (
                  <DropdownMenuRadioItem key={index} value={state.toString()}>
                    {getStateName(state)}
                  </DropdownMenuRadioItem>
                ))}
            </DropdownMenuRadioGroup>
          </NodeHeaderMenuAction>
        </NodeHeaderActions>
      </NodeHeader>
      <Box width={150} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Typography textAlign={'center'}>{data.name}</Typography>
      </Box>
      {data.requirements.length && <Handle
          type={'target'}
          position={Position.Left}
          onConnect={(params) => console.error('handle onConnect', params)}
      />}
      <Handle
        type={'source'}
        position={Position.Right}
      />
    </BaseNode>
  );
}
