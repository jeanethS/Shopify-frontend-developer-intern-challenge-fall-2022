import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import PastEmails from "./PastEmails";

const HistorySection = (props) => {
  // save the a list of past prompts and responses
  const [pastPrompts, setPastPrompts] = React.useState([props.pastPrompt]);
  const [pastResponses, setPastResponses] = React.useState([
    props.pastResponse,
  ]);
  // make a list of past prompts and responses
  const makePastPrompts = (prompt) => {
    setPastPrompts([...pastPrompts, prompt]);
  };
  const makePastResponses = (response) => {
    setPastResponses([...pastResponses, response]);
  };
  // render the past prompts and responses
  let listEmails = pastPrompts.map((prompt, index) => (
    <PastEmails
      key={index}
      pastPrompt={prompt}
      pastResponse={pastResponses[index]}
    />
  ));
  return (
    <Box
      sx={{
        margin: "20vh -20vw ",
        background: "rgba(240, 247, 250, 0.5)",
        boxShadow: "15px 15px 25px rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(90px)",
        borderRadius: "50px",
        padding: "10%",
        width: "50vw",
      }}
    >
      {listEmails}
    </Box>
  );
};

HistorySection.propTypes = {};

export default HistorySection;
