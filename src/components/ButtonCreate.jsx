import React from "react";
import PropTypes from "prop-types";
import { Box, Button, useMediaQuery } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import HistorySection from "./HistorySection.jsx";

const ButtonCreate = (props) => {
  const parameters = {
    prompt: `Write a professional email to ${props.recipient} because ${props.purpose}. 
      It is necessary to ${props.goal}. The email should sound: ${props.tone}`,
    temperature: 0.88,
    max_tokens: 500,
  };
  const [response, setResponse] = useState();
  const call = () => {
    axios
      .post(
        "https://api.openai.com/v1/engines/text-curie-001/completions",
        parameters,
        {
          headers: {
            ContentType: "application/json",
            Authorization: "Bearer " + process.env.REACT_APP_OPENAI_API_KEY,
          },
        }
      )
      .then((res) => {
        setResponse(res.data.choices[0].text);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Box>
      <Button
        variant="contained"
        sx={{
          background: "linear-gradient(90deg, #FF0076 0%, #590FB7 100%)",
          boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.3)",
          borderRadius: useMediaQuery("(min-width:600px)") ? "20px" : "15px",
          fontWeight: "700",
          fontSize: "0.8rem",
          height: "2.5rem",
          width: useMediaQuery("(min-width:600px)") ? "8rem" : "15vw",
          padding: "0.1rem",
        }}
        onClick={() => {
          call();
          console.log(parameters.prompt);
        }}
      >
        Create
      </Button>
      <HistorySection pastPrompt={parameters.prompt} pastResponse={response} />
    </Box>
  );
};

ButtonCreate.propTypes = {};

export default ButtonCreate;
