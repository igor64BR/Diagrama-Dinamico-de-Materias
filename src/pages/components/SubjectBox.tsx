import Subject from "@/_infra/entities/Subject";
import { Box, Divider, Typography } from "@mui/material";

export default function SubjectBox(props: { subject: Subject }) {
  return (
    <Box
      sx={{
        backgroundColor: props.subject.color.bgColor,
        color: props.subject.color.fontColor,
        borderRadius: 5,
      }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      padding={1}
    >
      <Box>
        {props.subject.code}
      </Box>
    <Divider sx={{ width: '100%', backgroundColor: 'black', my: .5 }} />
      <Box
        flex={1}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography align="center">{props.subject.name}</Typography>
      </Box>
    </Box>
  );
}
