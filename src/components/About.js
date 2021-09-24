import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import ContactCard from "./ui/ContactCard";

import download from "../assets/download.svg";
import office from "../assets/office.svg";
import lightbulb from "../assets/lightbulb.svg";
import nextIcon from "../assets/nextIcon.svg";
import javascriptIcon from "../assets/javascriptIcon.svg";
import htmlIcon from "../assets/htmlIcon.svg";
import cssIcon from "../assets/cssIcon.svg";
import materialIcon from "../assets/materialIcon.svg";
import reactIcon from "../assets/reactIcon.svg";

const useStyles = makeStyles((theme) => ({
  downloadButton: {
    ...theme.typography.learnButton,
    borderRadius: 0,
    backgroundColor: "transparent",
    border: `2px solid ${theme.palette.common.orange}`,
    "&:hover": {
      backgroundColor: theme.palette.common.purple,
      color: theme.palette.common.orange,
    },
    fontWeight: 800,
    textTransform: "uppercase",
  },
  downloadIcon: {
    marginLeft: "1em",
  },
  sectionImage: {
    maxWidth: "30em",
    [theme.breakpoints.down("md")]: {
      maxWidth: "25em",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "20em",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "15em",
    },
  },
  icons: {
    height: "6em",
    marginLeft: "1em",
    marginRight: "1em",
  },
}));

export default function About({ setValue }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const techStackIcons = [
    { name: "react", src: reactIcon, alt: "react js icon" },
    { name: "next", src: nextIcon, alt: "next js icon" },
    { name: "material", src: materialIcon, alt: "material ui icon" },
    { name: "javascript", src: javascriptIcon, alt: "javascript icon" },
    { name: "html", src: htmlIcon, alt: "html5 icon" },
    { name: "css", src: cssIcon, alt: "css3 icon" },
  ];

  return (
    <Grid
      item
      style={{
        marginTop: "3em",
      }}
    >
      <Grid container direction="column">
        <Grid
          item
          style={{ marginLeft: matchesMD ? 0 : "5em", marginBottom: "5em" }}
          align={matchesMD ? "center" : undefined}
        >
          {/* ----- Heading Section ----- */}
          <Grid item>
            <Typography variant="h1">About Me</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" paragraph>
              I am a Front End Web Developer from London, UK.
            </Typography>
          </Grid>
          <Grid item align="center">
            <Button
              variant="contained"
              color="primary"
              className={classes.downloadButton}
            >
              download my cv
              <img
                src={download}
                alt="download icon"
                className={classes.downloadIcon}
              />
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          {/* ----- My Background Section ----- */}
          <Grid
            container
            direction={matchesMD ? "column" : "row"}
            alignItems="center"
            style={{ paddingBottom: "5em" }}
          >
            <Grid item md container direction="column">
              <Grid
                item
                align={matchesMD ? "center" : undefined}
                style={{
                  marginLeft: matchesSM ? "1em" : "5em",
                  marginRight: matchesSM ? "1em" : "2em",
                }}
              >
                <Typography variant="h2">My Background</Typography>
              </Grid>
              <Grid
                item
                align={matchesMD ? "center" : undefined}
                style={{
                  marginLeft: matchesSM ? "1em" : "5em",
                  marginRight: matchesSM ? "1em" : "2em",
                }}
              >
                <Typography paragraph variant="body1">
                  With a First Class (Hons) in Business with Economics, I have
                  had a keen interest in business since I was a child and as we
                  have become a technology-centered world, I grew an equally
                  passionate interest in the use of technology in business
                  operations.
                </Typography>
                <Typography paragraph variant="body1">
                  As a self-taught developer with an intrinsic love of learning,
                  I have strong problem solving skills and love a challenge.
                </Typography>
                <Typography paragraph variant="body1">
                  When I am not coding or learning something new about
                  development and technology, you’ll find me in the gym or at my
                  basketball club.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md align="center">
              <img
                src={office}
                alt="girl sitting at office desk"
                className={classes.sectionImage}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/* ----- Current Tech Stack Section ----- */}
          <Grid container direction="column">
            <Grid item align="center">
              <Typography variant="h2">Current Tech Stack</Typography>
            </Grid>
            <Grid
              container
              direction="row"
              style={{ marginTop: "2em" }}
              justifyContent="center"
            >
              {techStackIcons.map((icon) => (
                <Grid
                  item
                  key={icon.src}
                  style={{ marginBottom: matchesMD ? "1em" : 0 }}
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className={classes.icons}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/* ----- My Approach to Technology Section ----- */}
          <Grid
            container
            direction={matchesMD ? "column" : "row"}
            alignItems="center"
            style={{ paddingBottom: "5em", paddingTop: "5em" }}
          >
            <Hidden smDown>
              <Grid item md align="center" style={{ marginBottom: "1em" }}>
                <img
                  src={lightbulb}
                  alt="girl sitting next to huge light bulb"
                  className={classes.sectionImage}
                />
              </Grid>
            </Hidden>
            <Grid item md container direction="column">
              <Grid
                item
                align={matchesMD ? "center" : "right"}
                style={{
                  marginLeft: matchesSM ? "1em" : 0,
                  marginRight: matchesSM ? "1em" : "5em",
                }}
              >
                <Typography variant="h2">My Approach to Technology</Typography>
              </Grid>
              <Grid
                item
                align={matchesMD ? "center" : "right"}
                style={{
                  marginLeft: matchesSM ? "1em" : 0,
                  marginRight: matchesSM ? "1em" : "5em",
                }}
              >
                <Typography paragraph variant="body1">
                  With technology advancing constantly, and at an exponential
                  rate, not only are the existing technologies developing, but
                  new technologies are being created.
                </Typography>
                <Typography paragraph variant="body1">
                  Therefore, instead of becoming dependent on and focused on any
                  specific technology, I prefer to look at the current problem
                  and then find the best technological solution to solve it, in
                  a long-term, sustainable way.
                </Typography>
                <Typography paragraph variant="body1">
                  This approach keeps me connected to the changes happening in
                  the industry and keen to constantly grow my awareness and
                  understanding of different technologies.
                </Typography>
              </Grid>
            </Grid>
            <Hidden mdUp>
              <Grid item md align="center">
                <img
                  src={lightbulb}
                  alt="girl sitting next to huge light bulb"
                  className={classes.sectionImage}
                />
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
        <ContactCard setValue={setValue} />
      </Grid>
    </Grid>
  );
}
