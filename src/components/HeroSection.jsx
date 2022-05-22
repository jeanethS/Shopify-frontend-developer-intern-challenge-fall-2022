import React from "react";
import heropic from "../assets/Saly-10.png";
import "./HeroSection.css";
import CreateEmailForm from "./CreateEmailForm";
import { useMediaQuery, Grid, Container } from "@mui/material";
const HeroSection = () => {
  //set the grid container height depending on the screen size
  /*const gridHeight = window.innerWidth > 600 ? "100vh" : "240vh";*/
  /*const imageHeight = window.innerWidth > 600 ? "40vh" : "30vh";*/
  return (
    <Container
      maxWidth={false}
      sx={{
        background:
          "linear-gradient(135deg, rgba(115, 125, 254, 0.8) 0%, rgba(255, 202, 201, 0.8) 100%)",
        height: useMediaQuery("(min-width:900px)") ? "100vh" : "240vh",
        width: "100%",
        marginBottom: "5rem",
        display: "flex",
      }}
    >
      <Grid container component="main" sx={{ padding: "2% 10%" }}>
        <Grid item xs={false} sm={false} md={5}>
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
        <Grid item xs={false} sm={false} md={7} justifyContent="flex-end">
          <Container
            sx={{
              margin: "5% 10%",
              background: "rgba(240, 247, 250, 0.5)",
              boxShadow: "15px 15px 25px rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(90px)",
              borderRadius: "65px",
              padding: "5%",
            }}
          >
            <CreateEmailForm />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;
