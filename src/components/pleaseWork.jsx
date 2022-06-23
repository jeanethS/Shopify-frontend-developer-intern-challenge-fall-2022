import React from "react";

const pleaseWork = () => {
  const parameters = {
    prompt: `Write a professional email to ${data.recipient} because ${data.purpose}. 
          It is necessary to ${data.goal}. The email should sound: ${data.tone}`,
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
    <div>
      <Container
        maxWidth={false}
        sx={{
          height: useMediaQuery("(min-width:900px)") ? "120vh" : "240vh",
          width: "100%",
          marginBottom: "5rem",
          /*display: "flex",*/
        }}
      >
        <Grid
          container
          component="main"
          sx={{
            padding: useMediaQuery("(min-width:900px)") ? "2% 10%" : "1%",
          }}
        >
          <Grid
            item
            xs={false}
            sm={false}
            md={5}
            sx={{
              marginBottom: useMediaQuery("(min-width:900px)") ? "10%" : "10vh",
            }}
          >
            <h1 className="tittle">Fun with Ai</h1>
            <h2 className="tagline">
              Get more done with the help of our ai email generator
            </h2>
            <Container
              sx={{
                backgroundImage: `url(${heropic})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
                height: useMediaQuery("(min-width:900px)") ? "40vh" : "30vh",
                marginLeft: "-1%",
                width: "100%",
              }}
            />
          </Grid>
          <Grid item xs={false} sm={false} md={7}>
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
                  borderRadius: useMediaQuery("(min-width:900px)")
                    ? "65px"
                    : "50px",
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
                    e.g. "ask for more information", "apologize for the
                    inconvenience"
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
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(90deg, #FF0076 0%, #590FB7 100%)",
                    boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.3)",
                    borderRadius: useMediaQuery("(min-width:600px)")
                      ? "20px"
                      : "15px",
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
                ></Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default pleaseWork;
