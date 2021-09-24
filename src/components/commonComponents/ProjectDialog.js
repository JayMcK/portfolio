import DialogContent from "@material-ui/core/DialogContent";
import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";

import CloseIcon from "@material-ui/icons/Close";

import nextIcon from "../../assets/nextIcon.svg";
import javascriptIcon from "../../assets/javascriptIcon.svg";
import htmlIcon from "../../assets/htmlIcon.svg";
import cssIcon from "../../assets/cssIcon.svg";
import materialIcon from "../../assets/materialIcon.svg";
import reactIcon from "../../assets/reactIcon.svg";

const useStyles = makeStyles((theme) => ({
  icons: {
    height: "2em",
    marginLeft: "1em",
    marginRight: "1em",
  },
  linkButton: {
    ...theme.typography.learnButton,
    color: theme.palette.common.purple,
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
    width: 150,
    height: 40,
    fontSize: "0.75rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0.5em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0.5em",
    },
  },
  dialogDivider: {
    marginTop: "auto",
    marginBottom: "auto",
    backgroundColor: theme.palette.common.orange,
    width: "20em",
    [theme.breakpoints.down("xs")]: {
      width: "10em",
    },
  },
  dialogDividerWidth: {
    marginLeft: 0,
  },
  closeButton: {
    ...theme.typography.learnButton,
    borderRadius: 0,
    backgroundColor: "transparent",
    border: `2px solid ${theme.palette.common.purple}`,
    "&:hover": {
      backgroundColor: theme.palette.common.purple,
      color: theme.palette.common.orange,
    },
    fontWeight: 800,
    textTransform: "uppercase",
    width: 150,
    height: 40,
    marginBottom: "2em",
  },
  siteImage: {
    [theme.breakpoints.down("sm")]: {
      width: "20em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
}));

export default function ProjectDialog({ info, setDialogOpen }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const techStackIcons = [
    { name: "react", src: reactIcon, alt: "react js icon" },
    { name: "next", src: nextIcon, alt: "next js icon" },
    { name: "material", src: materialIcon, alt: "material ui icon" },
    { name: "javascript", src: javascriptIcon, alt: "javascript icon" },
    { name: "html", src: htmlIcon, alt: "html5 icon" },
    { name: "css", src: cssIcon, alt: "css3 icon" },
  ];

  return (
    <DialogContent>
      <Grid container direction="column">
        <Grid item align="right">
          <IconButton onClick={() => setDialogOpen(false)}>
            <CloseIcon color="secondary" fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item align="center" style={{ marginBottom: "1em" }}>
          <Typography variant="h2">{info.title}</Typography>
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
        <Grid
          item
          component={"a"}
          href={info.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          align="center"
        >
          <img
            src={info.imageSmall}
            alt={info.alt}
            className={classes.siteImage}
          />
        </Grid>
        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          style={{ marginTop: "2em", marginBottom: "2em" }}
          alignItems="center"
        >
          <Grid item align="center">
            <Divider
              orientation={matchesSM ? "horizontal" : "vertical"}
              variant="inset"
              className={classes.dialogDivider}
              classes={{ inset: classes.dialogDividerWidth }}
              style={{
                marginBottom: matchesSM ? "2em" : 0,
                marginTop: matchesSM ? "1em" : 0,
              }}
            />
          </Grid>
          <Grid
            item
            sm
            align="center"
            style={{ marginRight: "0.5em", maxWidth: "30em" }}
          >
            <Typography variant="h3">Project Details</Typography>
            <Typography style={{ marginTop: "0.5em" }} variant="body1">
              {info.details}
            </Typography>
          </Grid>
        </Grid>
        <Grid item align="center">
          <Button
            className={classes.closeButton}
            onClick={() => setDialogOpen(false)}
          >
            Close
          </Button>
        </Grid>
      </Grid>
    </DialogContent>
  );
}
