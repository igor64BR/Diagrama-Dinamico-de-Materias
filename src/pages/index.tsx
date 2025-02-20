"use client";

import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import subjects from "@/_data/subjects";
import Subject from "@/_infra/entities/Subject";
import "./globals.css";
import "@xyflow/react/dist/style.css";
import FlowBody from "@/pages/reactFlowComponents/FlowBody";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  const [subjectsGroupedByPeriod, setSubjectsGroupedByPeriod] = useState<{
    [key: number]: Subject[];
  }>([]);

  useEffect(() => {
    setIsClient(true);
    loadSubjectsGroupedByPeriod();
  }, []);

  const loadSubjectsGroupedByPeriod = () => {
    const grouped = subjects.reduce((acc, x) => {
      if (!acc[x.period ?? -1]) {
        acc[x.period ?? -1] = [];
      }
      acc[x.period ?? -1].push(x);
      return acc;
    }, {} as { [key: number]: Subject[] });

    setSubjectsGroupedByPeriod(grouped);
  };

  if (!isClient) {
    return null;
  }

  return (
    <Box width={'100vw'} height={'100vh'}>
        <FlowBody />
    </Box>
  );
}
