import React from "react";
import { useState } from "react";
import { FormControl, TextField, FormHelperText, Box } from "@mui/material";

const CreateEmailForm = () => {
  /*const [recipent, setName] = useState("Composed TextField");*/

  return (
    <Box
      component="form"
      sx={{
        padding: "1% 10%",
      }}
      Validate
      autoComplete="off"
    >
      <FormControl
        fullWidth={true}
        sx={{
          marginBottom: "1rem",
        }}
      >
        <TextField
          required
          id="standard-required"
          label="Who is the recipient of your email?"
          defaultValue="Hello World"
          variant="standard"
        />
        <FormHelperText id="my-helper-text">
          Who will recive this email
        </FormHelperText>
      </FormControl>
      <FormControl
        fullWidth={true}
        sx={{
          marginBottom: "1rem",
        }}
      >
        <TextField
          id="standard-multiline-static"
          label="What is the motive of your email?"
          multiline
          rows={3}
          placeholder="Mr. Darcy who is currently worried because he is unable to process payments in his online store"
          defaultValue="Default Value"
          variant="standard"
        />
        <FormHelperText id="my-helper-text">
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
          id="standard-required"
          label="What should your email have?"
          multiline
          rows={2}
          defaultValue="Hello World"
          variant="standard"
        />
        <FormHelperText id="my-helper-text">
          e.g. "ask for more information", "apologize for the inconvenience"
        </FormHelperText>
      </FormControl>
      <FormControl fullWidth={true}>
        <TextField
          required
          id="standard-required"
          label="What should the tone of your email be?"
          defaultValue="Hello World"
          variant="standard"
        />
        <FormHelperText id="my-helper-text">
          e.g. "ask for more information", "apologize for the inconvenience"
        </FormHelperText>
      </FormControl>
    </Box>
  );
};

export default CreateEmailForm;
