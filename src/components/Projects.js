import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
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
      width: "17em",
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
      details:
        "Flow Living is a Single Page Web Application created for a Sole Trader who specialises in providing Holistic Spiritual Healing services.",
    },
    {
      title: "Fox Tree Kids",
      liveLink: "https://fox-tree-kids-nextjs.vercel.app/",
      ghLink: "https://github.com/JayMcK/FoxTreeKids-NextJS",
      imageSmall: foxTreeKids,
      imageLarge: foxTreeKidsLarge,
      alt: "fox tree kids website link",
      designLink: "https://pdfhost.io/v/5Y~Jb.Q5d_Flow_Livingcompressed",
      details:
        "Fox Tree Kids is a Single Page Web Application for a Montessori School, allowing the school to engage with prospective and current parents.",
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
        <Grid item align="center" style={{ marginTop: "5em" }}>
          <Typography variant="h2">Website Applications</Typography>
        </Grid>
        <Grid item>
          {/* ----- Web Apps Section ----- */}
          <Grid item>
            {/* ----- Flow Living Web App Section ----- */}
            <Grid
              container
              direction={matchesMD ? "column" : "row"}
              alignItems="center"
              className={classes.greyBackground}
              style={{ paddingTop: "5em", paddingBottom: "5em" }}
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
              alignItems="center"
              className={classes.purpleBackground}
              style={{ paddingTop: "5em", paddingBottom: "5em" }}
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
        <Grid item align="center" style={{ marginTop: "5em" }}>
          <Typography variant="h2">Fun with APIs</Typography>
        </Grid>
        <Grid item>
          {/* ----- APIs Section ----- */}
          <Grid item>
            {/* ----- API Project 1 ----- */}
            <Grid
              container
              direction={matchesMD ? "column" : "row"}
              alignItems="center"
              className={classes.orangeBackground}
              style={{ paddingTop: "5em", paddingBottom: "5em" }}
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
              alignItems="center"
              className={classes.greyBackground}
              style={{ paddingTop: "5em", paddingBottom: "5em" }}
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
              alignItems="center"
              className={classes.purpleBackground}
              style={{ paddingTop: "5em", paddingBottom: "5em" }}
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
