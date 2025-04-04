import { Node, NodeProps } from "@xyflow/react";
import Subject from "@/_infra/entities/Subject";
import React, { useEffect, useState } from "react";
import { DisplayState, getStateName, StateStyles, SubjectState } from "@/_infra/enums/SubjectState";
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
import SubjectRepository from "@/_infra/repositories/subjectRepository";

type SubjectBoxProps = NodeProps<Node<Subject>> & {
  onStateChange: () => void;
  onMouseOver: (nodeId: string) => void;
  onMouseOut: (nodeId: string) => void;
  repository: SubjectRepository;
};

const stateColors: { [key in DisplayState]: StateStyles } = {
  [DisplayState.AVAILABLE]: {bgColor: 'white', fontColor: 'black'},
  [DisplayState.UNAVAILABLE]: {bgColor: 'red', fontColor: 'white'},
  [DisplayState.DONE]: {bgColor: 'green', fontColor: 'white'},
  [DisplayState.ONGOING]: {bgColor: 'blue', fontColor: 'white'},
}

export default function SubjectBox(
  {
    id,
    data,
    onStateChange,
    onMouseOver,
    onMouseOut,
    repository,
  }: SubjectBoxProps
) {
  // Data
  const [color, setColor] = useState<StateStyles>({bgColor: '', fontColor: ''});

  const [selectedState, setSelectedState] = useState(data.state);

  const [isLoading, setIsLoading] = useState(false);

  // UseEffect
  useEffect(() => {
    data.state = selectedState;
    onStateChange();
    void loadColor();
  }, [selectedState]);

  // Methods
  const loadColor = async () => {
    if (selectedState !== SubjectState.PENDING) {
      console.log("Style:", selectedState, stateColors[selectedState]);
      setColor(stateColors[selectedState]);
      return;
    }

    setIsLoading(true);

    const requirements = await repository.getManyById(data.requirementsIds);

    const pendingState = requirements.every(x => x.state === SubjectState.DONE)
      ? DisplayState.AVAILABLE
      : DisplayState.UNAVAILABLE;

    setColor(stateColors[pendingState]);

    setIsLoading(false);
  }

  if (isLoading) {
    return (
      <BaseNode>
        <Typography>Carregando...</Typography>
      </BaseNode>
    );
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
              value={selectedState}
              onValueChange={(newState: string) => setSelectedState(newState as SubjectState)}>
              {Object.values(SubjectState)
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
        <Typography textAlign={'center'}>{data.title}</Typography>
      </Box>
    </BaseNode>
  );
}
