import React, { useState, Fragment, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import logo from "../assets/logo.svg";
import linkedin from "../assets/linkedin.svg";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    backgroundColor: theme.palette.common.orange,
    height: "50em",
  },
}));

export default function Home({ value, setValue }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid item>
      <Grid container direction="column">
        <Grid item>
          {/* ------ Hero Section ----- */}
          <Grid container direction="column" className={classes.heroContainer}>
            <Grid item>
              <Typography variant="h1">Font End Web Developer</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                I use technology to create solutions for businesses
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
