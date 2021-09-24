import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";

import nextIcon from "../../assets/nextIcon.svg";
import javascriptIcon from "../../assets/javascriptIcon.svg";
import htmlIcon from "../../assets/htmlIcon.svg";
import cssIcon from "../../assets/cssIcon.svg";
import materialIcon from "../../assets/materialIcon.svg";
import reactIcon from "../../assets/reactIcon.svg";
import reduxIcon from "../../assets/reduxIcon.svg";

const useStyles = makeStyles((theme) => ({
  icons: {
    height: "2em",
    marginLeft: "1em",
    marginRight: "1em",
  },
  linkButton: {
    ...theme.typography.learnButton,
    color: "#fff",
    borderRadius: 0,
    backgroundColor: "transparent",
    border: `2px solid ${theme.palette.common.orange}`,
    "&:hover": {
      backgroundColor: theme.palette.common.orange,
    },
    fontWeight: 800,
    marginLeft: "1em",
    marginRight: "1em",
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1em",
    },
  },
  dialogDivider: {
    marginTop: "auto",
    marginBottom: "auto",
    backgroundColor: theme.palette.common.orange,
    width: "20em",
  },
  dialogDividerWidth: {
    marginLeft: 0,
  },
  text: {
    color: "#fff",
  },
}));

export default function ProjectDialog({ info, setDialogOpen }) {
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
    { name: "redux", src: reduxIcon, alt: "redux icon" },
  ];

  return (
    <Grid container direction="row">
      <Grid item md container direction="column">
        <Grid item align="center" style={{ marginBottom: "1em" }}>
          <Typography variant="h2" color="secondary">
            {info.title}
          </Typography>
        </Grid>
        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          justifyContent="center"
          alignItems={matchesSM ? "center" : undefined}
        >
          <Grid item>
            <Button
              component={"a"}
              variant="contained"
              href={info.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.linkButton}
            >
              live site
            </Button>
          </Grid>
          <Grid item>
            <Button
              component={"a"}
              variant="contained"
              href={info.ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.linkButton}
            >
              github repo
            </Button>
          </Grid>
          <Grid item>
            <Button
              component={"a"}
              variant="contained"
              href={info.designLink}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.linkButton}
            >
              Design file
            </Button>
          </Grid>
          <Grid
            container
            direction="row"
            style={{ marginTop: "2em", marginBottom: "2em" }}
            justifyContent="center"
          >
            {techStackIcons.map((icon) => (
              <Grid item key={icon.src}>
                <img src={icon.src} alt={icon.alt} className={classes.icons} />
              </Grid>
            ))}
          </Grid>
          <Grid container direction="column" style={{ marginBottom: "2em" }}>
            <Grid item style={{ marginLeft: "1em", marginRight: "1em" }}>
              <Grid item sm align="center" style={{ marginRight: "0.5em" }}>
                <Typography variant="h3" color="secondary">
                  Purpose
                </Typography>
                <Typography
                  style={{ marginTop: "0.5em" }}
                  variant="body1"
                  className={classes.text}
                >
                  {info.purpose}
                </Typography>
              </Grid>
              <Grid item align="center">
                <Divider
                  orientation="horizontal"
                  variant="inset"
                  className={classes.dialogDivider}
                  classes={{ inset: classes.dialogDividerWidth }}
                  style={{
                    marginBottom: "2em",
                    marginTop: "2em",
                  }}
                />
              </Grid>
              <Grid
                item
                sm
                align="center"
                style={{
                  marginRight: "0.5em",
                  marginLeft: "0.5em",
                }}
              >
                <Typography variant="h3" color="secondary">
                  Process
                </Typography>
                <Typography
                  style={{ marginTop: "0.5em" }}
                  className={classes.text}
                >
                  {info.process}
                </Typography>
              </Grid>
              <Grid item align="center">
                <Divider
                  orientation="horizontal"
                  variant="inset"
                  className={classes.dialogDivider}
                  classes={{ inset: classes.dialogDividerWidth }}
                  style={{
                    marginBottom: "2em",
                    marginTop: "2em",
                  }}
                />
              </Grid>
              <Grid item sm align="center" style={{ marginLeft: "0.5em" }}>
                <Typography variant="h3" color="secondary">
                  Later Features
                </Typography>
                <Typography
                  style={{ marginTop: "0.5em" }}
                  className={classes.text}
                >
                  {info.laterFeatures}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
