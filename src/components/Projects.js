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
import indigoSmall from "../assets/indigoSmall.jpg";
import indigoLarge from "../assets/indigoLarge.jpg";
import cribCocktailsSmall from "../assets/cribCocktailsSmall.jpg";
import cribCocktailsLarge from "../assets/cribCocktailsLarge.jpg";

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
        "https://www.mediafire.com/file/7kanthotibmr5qr/flow-living-design.pdf/file",
      details:
        "Flow Living is a Single Page Web Application, designed using Figma. Initially developed using create-react-app then migrated to Next.js for SEO Optimization and Server Side Rendering. Material UI was used extensively throughout this project.",
    },
    {
      title: "Fox Tree Kids",
      liveLink: "https://fox-tree-kids-nextjs.vercel.app/",
      ghLink: "https://github.com/JayMcK/FoxTreeKids-NextJS",
      imageSmall: foxTreeKids,
      imageLarge: foxTreeKidsLarge,
      alt: "fox tree kids website link",
      designLink:
        "https://www.mediafire.com/file/gmgub7ivav6hl62/fox-tree-kids-design.pdf/file",
      details:
        "Fox Tree Kids is a Single Page Web Application, designed using Figma. Initially developed using create-react-app then migrated to Next.js for SEO Optimization and Server Side Rendering. Material UI was used extensively throughout this project.",
    },
  ];

  const APIProjects = [
    {
      title: "Indigo",
      liveLink: "https://indigo-kappa.vercel.app/",
      ghLink: "https://github.com/JayMcK/indigo",
      imageSmall: indigoSmall,
      imageLarge: indigoLarge,
      alt: "indigo website link",
      designLink:
        "https://www.mediafire.com/file/sv7gpo1qheoxa0t/indigo-design.pdf/file",
      details:
        "Indigo is a Single Page Web Application, designed using Figma. Indigo is a movie information website, developed using OMDb's API; allowing the user to browse movie titles. Material UI was used extensively throughout this project.",
    },
    {
      title: "Crib Cocktails",
      liveLink: "https://crib-cocktails.vercel.app/",
      ghLink: "https://github.com/JayMcK/crib-cocktails",
      imageSmall: cribCocktailsSmall,
      imageLarge: cribCocktailsLarge,
      alt: "crib cocktails website link",
      designLink:
        "https://www.mediafire.com/file/xi3zlkkjz2j4pvu/crib-cocktails-design.pdf/file",
      details:
        "Crib Cocktails is a Single Page Web Application, designed using Figma. Indigo is a cocktail recipe information website, developed using thecocktaildb's API; allowing the user to search for cocktail recipe's by first letter, name or random pick. Material UI was used extensively throughout this project.",
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
                    href={APIProjects[0].liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    align="center"
                  >
                    <img
                      src={APIProjects[0].imageLarge}
                      alt={APIProjects[0].alt}
                      className={classes.image}
                    />
                  </Grid>
                </Hidden>
              </Grid>
              <Grid item md container>
                <OrangeProject info={APIProjects[0]} />
              </Grid>
              <Hidden lgUp>
                <Grid
                  item
                  component={"a"}
                  href={APIProjects[0].liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  align="center"
                >
                  <img
                    src={APIProjects[0].imageLarge}
                    alt={APIProjects[0].alt}
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
                <LightProject info={APIProjects[1]} />
              </Grid>
              <Grid
                item
                md
                component={"a"}
                href={APIProjects[1].liveLink}
                target="_blank"
                rel="noopener noreferrer"
                align="center"
              >
                <img
                  src={APIProjects[1].imageLarge}
                  alt={APIProjects[1].alt}
                  className={classes.image}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <ContactCard setValue={setValue} />
      </Grid>
    </Grid>
  );
}
