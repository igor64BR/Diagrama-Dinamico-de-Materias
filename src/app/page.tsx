"use client";

import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import SubjectBox from "./components/SubjectBox";
import subjects from "@/_data/subjects";
import Subject from "@/_infra/entities/Subject";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  const [subjectsGroupedByPeriod, setSubjectsGroupedByPeriod] = useState<{
    [key: number]: Subject[];
  }>([]);

  useEffect(() => {
    setIsClient(true);
    loadSubjectsGroupedByPeriod();
  }, []);

  const loadSubjectsGroupedByPeriod = () => {};

  if (!isClient) {
    return null;
  }

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      {subjects.map((x) => {
        return <SubjectBox key={x.code} subject={x} />;
      })}
    </Box>
  );
}
