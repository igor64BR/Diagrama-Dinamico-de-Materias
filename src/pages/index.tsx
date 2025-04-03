"use client";

import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./globals.css";
import "@xyflow/react/dist/style.css";
import FlowBody from "@/pages/reactFlowComponents/FlowBody";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }

  return (
    <Box width={'100vw'} height={'100vh'}>
      <FlowBody/>
    </Box>
  );
}
