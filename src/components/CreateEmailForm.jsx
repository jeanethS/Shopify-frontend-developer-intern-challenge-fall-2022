import React from "react";
import { useState } from "react";
import {
  FormControl,
  TextField,
  FormHelperText,
  Box,
  useMediaQuery,
  Button,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
const options = [
  "Appreciative",
  "Assertive",
  "Confident",
  "Cooperative",
  "Encouraging",
  "Formal",
  "Friendly",
  "Optimistic",
];
const CreateEmailForm = () => {
  /*const [recipent, setName] = useState("Composed TextField");*/
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState("");
  return (
    <Box
      component="form"
      sx={{
        padding: "1% 10%",
        alignItems: "center",
        textAlign: "center",
      }}
      Validate
      autoComplete="off"
    >
      <Box
        sx={{
          margin: useMediaQuery("(min-width:900px)") ? "5% 10%" : "1%",
          background: "rgba(240, 247, 250, 0.5)",
          boxShadow: "15px 15px 25px rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(90px)",
          borderRadius: useMediaQuery("(min-width:900px)") ? "65px" : "50px",
          padding: "10%",
        }}
      >
        <FormControl
          fullWidth={true}
          sx={{
            marginBottom: "1rem",
          }}
        >
          <TextField
            required
            id="recipientValue"
            label="Who is the recipient of your email?"
            defaultValue="John"
            variant="standard"
          />
        </FormControl>
        <FormControl
          fullWidth={true}
          sx={{
            marginBottom: "1rem",
          }}
        >
          <TextField
            id="purposeValue"
            label="What is the context behind your email?"
            multiline
            rows={3}
            defaultValue="Mr. Darcy is currently worried because he is ..."
            variant="standard"
          />
          <FormHelperText
            id="purpose-helper-text"
            sx={{
              marginLeft: "-1px",
            }}
          >
            The situation or the purpose of the email
          </FormHelperText>
        </FormControl>
        <FormControl
          fullWidth={true}
          sx={{
            marginBottom: "1rem",
          }}
        >
          <TextField
            required
            id="goalValue"
            label="What is the goal of your email have?"
            multiline
            rows={2}
            defaultValue="ask for more information"
            variant="standard"
          />
          <FormHelperText
            id="my-helper-text"
            sx={{
              marginLeft: "-1px",
            }}
          >
            e.g. "ask for more information", "apologize for the inconvenience"
          </FormHelperText>
        </FormControl>
        <FormControl fullWidth={true}>
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}
            renderInput={(params) => (
              <TextField
                {...params}
                label="What should be the tone of your email?"
                variant="standard"
              />
            )}
          />
        </FormControl>
      </Box>
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
      >
        Create
      </Button>
    </Box>
  );
};

export default CreateEmailForm;
