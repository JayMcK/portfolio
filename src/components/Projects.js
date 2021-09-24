import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import LightProject from "./commonComponents/LightProjectInfo";
import PurpleProject from "./commonComponents/PurpleProjectInfo";
import OrangeProject from "./commonComponents/OrangeProjectInfo";
import ContactCard from "./ui/ContactCard";

import flowLiving from "../assets/flowLiving.jpg";
import foxTreeKids from "../assets/foxTreeKids.jpg";
import flowLivingLarge from "../assets/flowLivingLarge.png";
import foxTreeKidsLarge from "../assets/foxTreeKidsLarge.png";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "35em",
    [theme.breakpoints.down("md")]: {
      width: "30em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "25em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "20em",
    },
  },
  purpleBackground: {
    backgroundColor: theme.palette.common.purple,
  },
  orangeBackground: {
    backgroundColor: theme.palette.common.orange,
  },
  greyBackground: {
    backgroundColor: theme.palette.grey[200],
  },
}));

export default function Projects({ setValue }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const webProjects = [
    {
      title: "Flow Living",
      liveLink: "https://flowliving.vercel.app/",
      ghLink: "https://github.com/JayMcK/FlowLiving-NextJS",
      imageSmall: flowLiving,
      imageLarge: flowLivingLarge,
      alt: "flow living website link",
      designLink:
        "https://www.keepandshare.com/doc23/114271/flow-living-compressed-pdf-4-5-meg?da=y",
      purpose:
        "The goal of the site is to convert more visitors into potential clients’ increasing this businesses client base.",
      process:
        "The site provides information about the different services my client provides, to provide further information about who they are and why they should be hired, and to smoothly move the visitor through the site toward the call to action - sign up for a free session. This action allows my client to convert more visitors into potential clients; increasing their client base.",
      laterFeatures:
        "May include a Blog alongside a Login In area for current clients.",
    },
    {
      title: "Fox Tree Kids",
      liveLink: "https://fox-tree-kids-nextjs.vercel.app/",
      ghLink: "https://github.com/JayMcK/FoxTreeKids-NextJS",
      imageSmall: foxTreeKids,
      imageLarge: foxTreeKidsLarge,
      alt: "fox tree kids website link",
      designLink: "https://pdfhost.io/v/5Y~Jb.Q5d_Flow_Livingcompressed",
      purpose:
        "The goal of the site is to increase the number of applicants to the nursery school.",
      process:
        "The site provides information about the type of early years education provided by this school, in order to persuade parents to register to either visit the school or add their child to the waiting list.",
      laterFeatures: "May include a Login In area for current parents.",
    },
  ];

  return (
    <Grid item>
      <Grid container direction="column" style={{ marginTop: "3em" }}>
        <Grid
          item
          style={{ marginLeft: matchesMD ? 0 : "5em" }}
          align={matchesMD ? "center" : undefined}
        >
          <Typography variant="h1">Recent Projects</Typography>
        </Grid>
        <Grid item align="center">
          <Typography variant="h2">Website Applications</Typography>
        </Grid>
        <Grid item>
          {/* ----- Web Apps Section ----- */}
          <Grid item>
            {/* ----- Flow Living Web App Section ----- */}
            <Grid
              container
              direction={matchesMD ? "column" : "row"}
              style={{
                marginTop: "3em",
              }}
              className={classes.greyBackground}
            >
              <Grid
                item
                md
                container
                alignItems="center"
                justifyContent="center"
              >
                <Hidden mdDown>
                  <Grid
                    item
                    component={"a"}
                    href={webProjects[0].liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    align="center"
                  >
                    <img
                      src={webProjects[0].imageLarge}
                      alt={webProjects[0].alt}
                      className={classes.image}
                    />
                  </Grid>
                </Hidden>
              </Grid>
              <Grid item md container>
                <LightProject info={webProjects[0]} />
              </Grid>
              <Hidden lgUp>
                <Grid
                  item
                  component={"a"}
                  href={webProjects[0].liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  align="center"
                >
                  <img
                    src={webProjects[0].imageLarge}
                    alt={webProjects[0].alt}
                    className={classes.image}
                  />
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
          <Grid item>
            {/* ----- Fox Tree Kids Web App Section ----- */}
            <Grid
              container
              direction={matchesMD ? "column" : "row"}
              style={{ marginTop: "3em", marginBottom: "3em" }}
              className={classes.purpleBackground}
            >
              <Grid item md container>
                <PurpleProject info={webProjects[1]} />
              </Grid>
              <Grid
                item
                md
                component={"a"}
                href={webProjects[1].liveLink}
                target="_blank"
                rel="noopener noreferrer"
                align="center"
              >
                <img
                  src={webProjects[1].imageLarge}
                  alt={webProjects[1].alt}
                  className={classes.image}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item align="center">
          <Typography variant="h2">Fun with APIs</Typography>
        </Grid>
        <Grid item style={{ paddingBottom: "3em" }}>
          {/* ----- APIs Section ----- */}
          <Grid item>
            {/* ----- API Project 1 ----- */}
            <Grid
              container
              direction={matchesMD ? "column" : "row"}
              style={{ marginTop: "3em" }}
              className={classes.orangeBackground}
            >
              <Grid
                item
                md
                container
                alignItems="center"
                justifyContent="center"
              >
                <Hidden mdDown>
                  <Grid
                    item
                    component={"a"}
                    href={webProjects[0].liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    align="center"
                  >
                    <img
                      src={webProjects[0].imageLarge}
                      alt={webProjects[0].alt}
                      className={classes.image}
                    />
                  </Grid>
                </Hidden>
              </Grid>
              <Grid item md container>
                <OrangeProject info={webProjects[0]} />
              </Grid>
              <Hidden lgUp>
                <Grid
                  item
                  component={"a"}
                  href={webProjects[0].liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  align="center"
                >
                  <img
                    src={webProjects[0].imageLarge}
                    alt={webProjects[0].alt}
                    className={classes.image}
                  />
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
          <Grid item>
            {/* ----- API Project 2 ----- */}
            <Grid
              container
              direction={matchesMD ? "column" : "row"}
              style={{ marginTop: "3em", marginBottom: "3em" }}
              className={classes.greyBackground}
            >
              <Grid item md container>
                <LightProject info={webProjects[1]} />
              </Grid>
              <Grid
                item
                md
                component={"a"}
                href={webProjects[1].liveLink}
                target="_blank"
                rel="noopener noreferrer"
                align="center"
              >
                <img
                  src={webProjects[1].imageLarge}
                  alt={webProjects[1].alt}
                  className={classes.image}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            {/* ----- API Project 3 ----- */}
            <Grid
              container
              direction={matchesMD ? "column" : "row"}
              style={{ marginTop: "3em" }}
              className={classes.purpleBackground}
            >
              <Grid
                item
                md
                container
                alignItems="center"
                justifyContent="center"
              >
                <Hidden mdDown>
                  <Grid
                    item
                    component={"a"}
                    href={webProjects[0].liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    align="center"
                  >
                    <img
                      src={webProjects[0].imageLarge}
                      alt={webProjects[0].alt}
                      className={classes.image}
                    />
                  </Grid>
                </Hidden>
              </Grid>
              <Grid item md container>
                <PurpleProject info={webProjects[0]} />
              </Grid>
              <Hidden lgUp>
                <Grid
                  item
                  component={"a"}
                  href={webProjects[0].liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  align="center"
                >
                  <img
                    src={webProjects[0].imageLarge}
                    alt={webProjects[0].alt}
                    className={classes.image}
                  />
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </Grid>
        <ContactCard setValue={setValue} />
      </Grid>
    </Grid>
  );
}
