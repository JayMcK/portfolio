import React, { useState, Fragment, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import ProjectDialog from "./commonComponents/ProjectDialog";

import downArrow from "../assets/downArrow.svg";
import rightArrow from "../assets/rightArrow.svg";
import rightArrowWhite from "../assets/rightArrowWhite.svg";
import flowLiving from "../assets/flowLiving.jpg";
import foxTreeKids from "../assets/foxTreeKids.jpg";
import graduate from "../assets/graduate.svg";
import tech from "../assets/tech.svg";
import graph from "../assets/graph.svg";
import cardBackground from "../assets/cardBackground.png";

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    backgroundColor: theme.palette.common.orange,
    height: "50em",
    marginTop: "1em",
  },
  projectsContainer: {
    backgroundColor: "#fff",
    height: "50em",
  },
  infoContainer: {
    backgroundColor: theme.palette.common.purple,
  },
  cardBlockContainer: {
    backgroundImage: `url(${cardBackground})`,
    height: "50em",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.up("md")]: {
      backgroundAttachment: "fixed",
    },
  },
  downArrow: {
    height: "1.5em",
    width: "1.5em",
  },
  heroIconButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  projectImage: {
    height: "40em",
    [theme.breakpoints.down("xs")]: {
      height: "30em",
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    borderRadius: 0,
    backgroundColor: "transparent",
    border: `2px solid ${theme.palette.common.orange}`,
    "&:hover": {
      backgroundColor: theme.palette.common.orange,
    },
    fontWeight: 800,
  },
  learnButtonPurple: {
    ...theme.typography.learnButton,
    borderRadius: 0,
    backgroundColor: "transparent",
    border: `2px solid ${theme.palette.common.orange}`,
    "&:hover": {
      backgroundColor: theme.palette.common.orange,
      color: theme.palette.common.purple,
    },
    fontWeight: 800,
    color: theme.palette.common.orange,
  },
  rightArrow: {
    marginLeft: "1em",
    height: "1em",
    width: "1em",
  },
  sectionTitle: {
    textTransform: "uppercase",
  },
  projectLink: {
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "transparent",
    },
    padding: 0,
  },
  projectTitle: {
    fontSize: "1.5rem",
    color: theme.palette.common.purple,
  },
  specialText: {
    color: theme.palette.common.orange,
    fontFamily: "Caveat Brush",
  },
  infoIcon: {
    height: "15em",
  },
  cardBackground: {
    backgroundColor: theme.palette.common.gold,
  },
  cardContainer: {
    borderRadius: 50,
    [theme.breakpoints.down("xs")]: {
      borderRadius: 0,
    },
    paddingRight: "2em",
    paddingLeft: "2em",
    paddingTop: "3em",
    paddingBottom: "3em",
    border: `2px solid ${theme.palette.common.purple}`,
  },
  cardTitle: {
    color: theme.palette.common.purple,
  },
}));

export default function Home({ value, setValue }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [dialogOpen, setDialogOpen] = useState(false);
  const [project, setProject] = useState("");

  const webProjects = [
    {
      title: "Flow Living",
      liveLink: "https://flowliving.vercel.app/",
      ghLink: "https://github.com/JayMcK/FlowLiving-NextJS",
      image: flowLiving,
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
      image: foxTreeKids,
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
      <Grid container direction="column">
        <Grid item>
          {/* ------ Hero Section ----- */}
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            className={classes.heroContainer}
          >
            <Grid
              item
              align="center"
              style={{ marginRight: "1em", marginLeft: "1em" }}
            >
              <Typography paragraph variant="h1">
                Front End Web Developer
              </Typography>
            </Grid>
            <Grid item align="center">
              <Typography
                variant="subtitle1"
                style={{ color: theme.palette.common.purple }}
              >
                I use technology to create solutions for businesses
              </Typography>
            </Grid>
            <Grid container direction="column" alignItems="center">
              <Grid item style={{ marginTop: "10em" }}>
                <Typography
                  variant="h4"
                  style={{
                    color: theme.palette.common.purple,
                    fontSize: "1.25rem",
                  }}
                >
                  view recent projects
                </Typography>
              </Grid>
              <Grid item>
                <IconButton
                  component={Link}
                  to="/projects"
                  onClick={() => setValue(false)}
                  className={classes.heroIconButton}
                  disableRipple
                >
                  <img
                    src={downArrow}
                    alt="down arrow"
                    className={classes.downArrow}
                  />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/* ------ Projects Section ----- */}
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item style={{ marginTop: "5em", marginBottom: "1em" }}>
              <Typography variant="h2" className={classes.sectionTitle}>
                Web Apps
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: "3em" }}>
              <Button
                variant="contained"
                color="primary"
                className={classes.learnButton}
                component={Link}
                to="/projects"
                onClick={() => {
                  setValue(3);
                }}
              >
                Learn More
                <img
                  src={rightArrow}
                  alt="right arrow"
                  className={classes.rightArrow}
                />
              </Button>
            </Grid>
            <Grid container direction={matchesSM ? "column" : "row"}>
              {webProjects.map((project) => (
                <Grid
                  key={project.image}
                  item
                  sm
                  container
                  direction="column"
                  alignItems="center"
                  component={Button}
                  disableRipple
                  onClick={() => {
                    setDialogOpen(true);
                    setProject(project);
                  }}
                  className={classes.projectLink}
                  style={{
                    display: "grid",
                  }}
                >
                  <Grid item>
                    <Typography variant="h5" className={classes.projectTitle}>
                      {project.title}
                    </Typography>
                  </Grid>
                  <Grid item style={{ marginBottom: matchesSM ? "2em" : 0 }}>
                    <img
                      src={project.image}
                      alt={project.alt}
                      className={classes.projectImage}
                    />
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.infoContainer}
          style={{ paddingTop: "5em", paddingBottom: "5em" }}
        >
          {/* ----- Info Section ----- */}
          <Grid container direction={matchesSM ? "column" : "row"}>
            {/* ----- Tech Stack Block ----- */}
            <Grid item md container direction="column">
              <Grid
                item
                style={{
                  marginLeft: matchesSM ? 0 : "5em",
                }}
                align={matchesSM ? "center" : undefined}
              >
                <Typography
                  variant="h3"
                  paragraph
                  style={{ color: theme.palette.common.orange }}
                >
                  Tech Stack
                </Typography>
              </Grid>
              <Grid
                item
                style={{
                  marginLeft: matchesSM ? "1em" : "5em",
                  marginRight: matchesSM ? "1em" : 0,
                }}
                align={matchesSM ? "center" : undefined}
              >
                <Typography variant="body1" style={{ color: "#fff" }} paragraph>
                  React.js, Next.js, Javascript, Material UI, CSS and HTML are
                  my current technologies of choice.
                </Typography>
                <Typography paragraph variant="body1" style={{ color: "#fff" }}>
                  I am familiar with Redux, Node.js, Express.js and
                  <span className={classes.specialText}>
                    {" "}
                    can quickly learn any tech that is right for the task at
                    hand.
                  </span>
                </Typography>
              </Grid>
              <Grid
                item
                style={{ marginLeft: matchesSM ? 0 : "5em" }}
                align={matchesSM ? "center" : undefined}
              >
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.learnButtonPurple}
                  component={Link}
                  to="/about"
                  onClick={() => {
                    setValue(1);
                  }}
                >
                  Learn More
                  <img
                    src={rightArrowWhite}
                    alt="right arrow white"
                    className={classes.rightArrow}
                  />
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              md
              align={matchesSM ? "center" : undefined}
              style={{ marginTop: matchesSM ? "1em" : "5em" }}
            >
              <img
                src={tech}
                alt="technology stack"
                className={classes.infoIcon}
                style={{ marginLeft: matchesSM ? 0 : "2em" }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            direction={matchesSM ? "column" : "row"}
            className={classes.infoContainer}
          >
            {/* ----- Approach to Technology Block ----- */}
            <Grid
              item
              md
              container
              direction="column"
              style={{ marginTop: "5em" }}
            >
              <Grid
                item
                style={{
                  marginLeft: matchesSM ? 0 : "5em",
                }}
                align={matchesSM ? "center" : "right"}
              >
                <Typography
                  variant="h3"
                  paragraph
                  style={{ color: theme.palette.common.orange }}
                >
                  Approach to Technology
                </Typography>
              </Grid>
              <Grid
                item
                align={matchesSM ? "center" : "right"}
                style={{
                  marginLeft: matchesSM ? "1em" : "5em",
                  marginRight: matchesSM ? "1em" : 0,
                }}
              >
                <Typography variant="body1" style={{ color: "#fff" }} paragraph>
                  I believe that technology should make business practices
                  easier, not harder.
                </Typography>
                <Typography paragraph variant="body1" style={{ color: "#fff" }}>
                  Having a long-term vision when solving current problems leads
                  <span className={classes.specialText}>
                    {" "}
                    to better technogical solutions.
                  </span>
                </Typography>
              </Grid>
              <Grid item align={matchesSM ? "center" : "right"}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.learnButtonPurple}
                  component={Link}
                  to="/about"
                  onClick={() => {
                    setValue(1);
                  }}
                >
                  Learn More
                  <img
                    src={rightArrowWhite}
                    alt="right arrow white"
                    className={classes.rightArrow}
                  />
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              md={3}
              style={{
                marginTop: matchesSM ? "1em" : "5em",
                marginRight: matchesSM ? 0 : "5em",
              }}
              align={matchesSM ? "center" : "left"}
            >
              <img
                src={graph}
                alt="graph"
                className={classes.infoIcon}
                style={{ marginLeft: matchesSM ? 0 : "2em" }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            direction={matchesSM ? "column" : "row"}
            className={classes.infoContainer}
          >
            {/* ----- Business Background Block ----- */}
            <Grid
              item
              md
              container
              direction="column"
              style={{ marginTop: "5em" }}
            >
              <Grid
                item
                style={{
                  marginLeft: matchesSM ? 0 : "5em",
                }}
                align={matchesSM ? "center" : undefined}
              >
                <Typography
                  variant="h3"
                  paragraph
                  style={{ color: theme.palette.common.orange }}
                >
                  Business Background
                </Typography>
              </Grid>
              <Grid
                item
                style={{
                  marginLeft: matchesSM ? "1em" : "5em",
                  marginRight: matchesSM ? "1em" : 0,
                }}
                align={matchesSM ? "center" : undefined}
              >
                <Typography variant="body1" style={{ color: "#fff" }} paragraph>
                  First Class (Hons) Business with Economics Degree.
                </Typography>
                <Typography paragraph variant="body1" style={{ color: "#fff" }}>
                  My understanding of businesses allows me to develop
                  <span className={classes.specialText}>
                    {" "}
                    better technologies for businesses.
                  </span>
                </Typography>
              </Grid>
              <Grid
                item
                style={{ marginLeft: matchesSM ? 0 : "5em" }}
                align={matchesSM ? "center" : undefined}
              >
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.learnButtonPurple}
                  component={Link}
                  to="/about"
                  onClick={() => {
                    setValue(1);
                  }}
                >
                  Learn More
                  <img
                    src={rightArrowWhite}
                    alt="right arrow white"
                    className={classes.rightArrow}
                  />
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              md
              style={{
                marginTop: matchesSM ? "1em" : "5em",
              }}
              align={matchesSM ? "center" : undefined}
            >
              <img
                src={graduate}
                alt="graduation hat"
                className={classes.infoIcon}
                style={{ marginLeft: matchesSM ? 0 : "2em" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.cardBlockContainer}>
          {/* ----- Card Block ----- */}
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ height: "50em" }}
          >
            <Card elevation={0} classes={{ root: classes.cardContainer }}>
              <CardContent>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item align="center">
                    <Typography variant="h5" className={classes.cardTitle}>
                      Contact Me
                    </Typography>
                  </Grid>
                  <Grid item align="center">
                    <Typography
                      variant="body1"
                      style={{ color: theme.palette.grey[700] }}
                      paragraph
                    >
                      Currently open to opportunities
                    </Typography>
                  </Grid>
                  <Grid item align="center">
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.learnButton}
                      component={Link}
                      to="/contact"
                      onClick={() => {
                        setValue(2);
                      }}
                    >
                      Learn More
                      <img
                        src={rightArrow}
                        alt="right arrow"
                        className={classes.rightArrow}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Dialog
          style={{ zIndex: 1302 }}
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          fullScreen
        >
          <ProjectDialog info={project} setDialogOpen={setDialogOpen} />
        </Dialog>
      </Grid>
    </Grid>
  );
}
