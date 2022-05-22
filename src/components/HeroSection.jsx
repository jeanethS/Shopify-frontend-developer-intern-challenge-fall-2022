import React from "react";
import heropic from "../assets/Saly-10.png";
import "./HeroSection.css";
import { Grid, Container } from "@mui/material";
const HeroSection = () => {
  //set the grid container height depending on the screen size
  const gridHeight = window.innerWidth > 700 ? "100vh" : "240vh";
  const imageHeight = window.innerWidth > 700 ? "40vh" : "30vh";
  return (
    <Container
      maxWidth={false}
      sx={{
        background:
          "linear-gradient(135deg, rgba(115, 125, 254, 0.8) 0%, rgba(255, 202, 201, 0.8) 100%)",
        height: gridHeight,
        width: "100%",
        marginBottom: "5rem",
        display: "flex",
      }}
    >
      <Grid container component="main" sx={{ padding: "2% 5%" }}>
        <Grid item xs={false} sm={4} md={4}>
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
              height: imageHeight,
              marginLeft: "-1%",
              width: "100%",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;
