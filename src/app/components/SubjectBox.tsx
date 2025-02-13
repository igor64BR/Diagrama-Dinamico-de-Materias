import Subject from "@/_infra/entities/Subject";
import { Box } from "@mui/material";

export default function SubjectBox(props: { subject: Subject }) {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        color: "black",
        borderRadius: 5,
        minHeight: 100,
        minWidth: 200,
      }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      padding={1}
    >
      <Box>
        {props.subject.period} - {props.subject.code}
      </Box>
      <Box
        flex={1}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {props.subject.name}
      </Box>
    </Box>
  );
}
