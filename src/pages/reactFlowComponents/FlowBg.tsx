import { Background, BackgroundVariant } from "@xyflow/react";
import React from "react";

export default function FlowBg() {
  return (
    <>
      <Background
        id={'2'}
        variant={BackgroundVariant.Dots}
        gap={100}
        size={3}
        offset={[6.5, 6.5]}
        style={{backgroundColor: '#121212'}}
      />
      <Background id={'1'} variant={BackgroundVariant.Dots} gap={10} size={1} style={{backgroundColor: '#0000'}}/>
    </>

  );
}