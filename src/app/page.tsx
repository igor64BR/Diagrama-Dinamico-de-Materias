"use client";

import { Box, Divider, Typography } from "@mui/material";
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
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      {Object.entries(subjectsGroupedByPeriod).map(([period, subjects], index) => (Number(period) === -1 
      ? null 
      : (
          <Box key={index} display={"flex"} flexDirection={"column"} height={"80%"} margin={2}>
            <Typography
              align="center"
              variant="h5"
              marginBottom={2}
            >
              {`${Number(period) > 0 ? `${period}º` : 'Sem'} Período`}
            </Typography>

            <Box display={"flex"} justifyContent="space-between" flexDirection={"column"} flexGrow={1}>
              {subjects.map((subject, index) => (
                <Box key={index}>
                  <SubjectBox subject={subject} />
                  <Divider sx={{my: 1}}/>
                </Box>
              ))}
            </Box>
          </Box>
        )
        ))}
    </Box>
  );
}
