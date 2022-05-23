import { useState } from "react";
import {
  FormControl,
  Autocomplete,
  TextField,
  FormHelperText,
  Box,
  useMediaQuery,
} from "@mui/material";
import ButtonCreate from "./ButtonCreate.jsx";

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
  const [data, setData] = useState({
    recipient: "",
    purpose: "",
    goal: "",
    tone: options[0],
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
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
            name="recipient"
            label="Who is the recipient of your email?"
            variant="standard"
            value={data.recipient}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl
          fullWidth={true}
          sx={{
            marginBottom: "1rem",
          }}
        >
          <TextField
            name="purpose"
            label="What is the context behind your email?"
            multiline
            rows={3}
            variant="standard"
            value={data.purpose}
            onChange={handleChange}
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
            name="goal"
            label="What is the goal of your email have?"
            multiline
            rows={2}
            variant="standard"
            value={data.goal}
            onChange={handleChange}
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
            disablePortal
            options={options}
            name="tone"
            value={data.tone}
            onChange={(event, newValue) => {
              setData({
                ...data,
                tone: newValue,
              });
            }}
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
      <ButtonCreate
        recipient={data.recipient}
        purpose={data.purpose}
        goal={data.goal}
        tone={data.tone}
      />
    </Box>
  );
};

export default CreateEmailForm;
