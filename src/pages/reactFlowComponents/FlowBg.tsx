import { Background, BackgroundVariant } from "@xyflow/react";
import React from "react";

export default function FlowBg() {
  return (
    <>
      <Background id={'1'} variant={BackgroundVariant.Dots} gap={10} size={1}/>
      <Background id={'2'} variant={BackgroundVariant.Dots} gap={100} size={3} offset={[6.5, 6.5]}/>
    </>
  );
}