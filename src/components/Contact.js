import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

import CloseIcon from "@material-ui/icons/Close";

import contactBackground from "../assets/contactBackground.jpg";
import telephone from "../assets/telephone.svg";
import envelope from "../assets/envelope.svg";
import location from "../assets/location.svg";
import paperPlane from "../assets/paperPlane.svg";

const useStyles = makeStyles((theme) => ({
  contactBackgroundContainer: {
    backgroundImage: `url(${contactBackground})`,
    minHeight: "50em",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  aTag: {
    textDecoration: "none",
    color: theme.palette.common.purple,
    marginLeft: "0.5em",
  },
  infoIcon: {
    width: "1em",
  },
  iconButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    padding: 0,
  },
  submitButton: {
    ...theme.typography.learnButton,
    fontFamily: " Caveat Brush",
    borderRadius: 0,
    backgroundColor: "transparent",
    border: `2px solid ${theme.palette.common.orange}`,
    "&:hover": {
      backgroundColor: theme.palette.common.orange,
    },
    fontWeight: 500,
    fontSize: "1.25rem",
    marginLeft: "1em",
    marginRight: "1em",
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1em",
    },
  },
  submitIcon: {
    width: "1em",
    marginLeft: "1em",
  },
  cancelButton: {
    ...theme.typography.learnButton,
    color: theme.palette.common.orange,
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
    },
    fontWeight: 500,
    textTransform: "uppercase",
    marginTop: "1em",
  },
}));

export default function Contact({ setValue }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [name, setName] = useState("");
  const [nameHelper, setNameHelper] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const textFields = [
    { name: "name", label: "Name", value: name, helper: nameHelper },
    { name: "email", label: "Email", value: email, helper: emailHelper },
    { name: "phone", label: "Phone", value: phone, helper: phoneHelper },
  ];

  const handleChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "name":
        setName(event.target.value);
        valid = /(.*[a-z]){2}/i.test(event.target.value);
        if (!valid) {
          setNameHelper("Invalid Name");
        } else {
          setNameHelper("");
        }
        break;
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper("Invalid Email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\d{11}$/.test(event.target.value);
        if (!valid) {
          setPhoneHelper("Invalid Phone Number");
        } else {
          setPhoneHelper("");
        }
        break;
      case "message":
        setMessage(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setPhoneHelper("");
    setDialogOpen(false);
    setSnackbarOpen(true);
  };

  return (
    <Grid item>
      <Grid container direction="row">
        <Grid
          container
          item
          lg={4}
          direction="column"
          style={{ marginTop: "3em" }}
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid
            item
            style={{ marginLeft: matchesMD ? 0 : "2em" }}
            align={matchesMD ? "center" : undefined}
          >
            <Grid item>
              <Typography variant="h1">Contact Me</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h3" paragraph>
                Let's talk!
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            alignItems={matchesMD ? "center" : undefined}
          >
            <Grid item style={{ marginLeft: matchesMD ? 0 : "2em" }}>
              <Grid item>
                <Typography paragraph>
                  <IconButton
                    disableRipple
                    component={"a"}
                    href="tel:07645837192"
                    className={classes.iconButton}
                  >
                    <img
                      src={telephone}
                      alt="telephone"
                      className={classes.infoIcon}
                    />
                  </IconButton>
                  <a href="tel:07645837192" className={classes.aTag}>
                    +44 (0) 07538 530 603
                  </a>
                </Typography>
              </Grid>
              <Grid item style={{ marginBottom: "1em" }}>
                <Typography>
                  <IconButton
                    disableRipple
                    component={"a"}
                    href="mailto:contact@flowliving.com"
                    className={classes.iconButton}
                  >
                    <img
                      src={envelope}
                      alt="envelope"
                      className={classes.infoIcon}
                    />
                  </IconButton>
                  <a
                    href="mailto:contact@flowliving.com"
                    className={classes.aTag}
                  >
                    contact@jaymckenzie.co.uk
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              justifyContent={matchesMD ? "center" : undefined}
              style={{ marginBottom: "1em", marginLeft: matchesMD ? 0 : "2em" }}
            >
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.purple }}
                >
                  <img
                    src={location}
                    alt="location pin"
                    className={classes.infoIcon}
                    style={{
                      marginRight: "0.5em",
                      color: theme.palette.common.purple,
                    }}
                  />
                  London, UK
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="column">
              {textFields.map((textField) => (
                <Grid
                  item
                  key={textField.name}
                  style={{
                    marginRight: "2em",
                    marginLeft: "2em",
                    marginBottom: "1em",
                  }}
                >
                  <TextField
                    key={textField.name}
                    id={textField.name}
                    label={textField.label}
                    value={textField.value}
                    onChange={handleChange}
                    fullWidth
                    error={textField.helper.length !== 0}
                    helperText={textField.helper}
                    color="secondary"
                    size="small"
                  />
                </Grid>
              ))}
            </Grid>
            <Grid container>
              <Grid
                item
                style={{
                  marginBottom: "1em",
                  width: "100%",
                  marginLeft: "2em",
                  marginRight: "2em",
                }}
              >
                <TextField
                  id="message"
                  label="Tell me more!"
                  multiline
                  rows={6}
                  value={message}
                  onChange={handleChange}
                  placeholder="Tell me a little about your query!"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid
              item
              align="center"
              style={{ marginTop: "1em", marginBottom: "2em" }}
            >
              <Button
                variant="contained"
                disabled={
                  nameHelper.length !== 0 ||
                  emailHelper.length !== 0 ||
                  message.length === 0
                }
                className={classes.submitButton}
                onClick={() => setDialogOpen(true)}
              >
                Submit Request
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid
            item
            container
            lg={8}
            className={classes.contactBackgroundContainer}
          ></Grid>
        </Hidden>
        <Dialog
          fullWidth
          fullScreen
          style={{ zIndex: 1302 }}
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
        >
          <DialogContent>
            <Grid container direction="column">
              <Grid item align="right">
                <IconButton onClick={() => setDialogOpen(false)}>
                  <CloseIcon color="secondary" fontSize="large" />
                </IconButton>
              </Grid>
              <Grid item align="center">
                <Typography variant="h1">Confirm Message</Typography>
              </Grid>
              <Grid container direction="column">
                {textFields.map((textField) => (
                  <Grid
                    key={textField.name}
                    item
                    style={{
                      marginLeft: matchesXS ? "1em" : "2em",
                      marginRight: matchesXS ? "1em" : "2em",
                    }}
                  >
                    <TextField
                      key={textField.name}
                      id={textField.name}
                      label={textField.label}
                      value={textField.value}
                      onChange={handleChange}
                      style={{ marginBottom: "1em" }}
                      error={textField.helper.length !== 0}
                      helperText={textField.helper}
                      color="secondary"
                      size="small"
                      classes={{ root: classes.textField }}
                      fullWidth
                    />
                  </Grid>
                ))}
                <Grid
                  item
                  style={{
                    marginLeft: matchesXS ? "1em" : "2em",
                    marginRight: matchesXS ? "1em" : "2em",
                  }}
                >
                  <TextField
                    id="message"
                    label="Tell us more!"
                    multiline
                    fullWidth
                    rows={6}
                    value={message}
                    onChange={handleChange}
                    placeholder="Tell us a little about interest in Flow Living and detail any questions/queries/requests you may have!"
                  />
                </Grid>
              </Grid>
              <Grid
                item
                container
                direction="column"
                style={{
                  maxWidth: "30em",
                  marginTop: "2em",
                }}
              ></Grid>
              <Grid
                item
                container
                direction="column"
                style={{ maxWidth: "30em", marginTop: "2em" }}
              ></Grid>
              <Grid item align="center">
                <Button
                  variant="contained"
                  disabled={
                    nameHelper.length !== 0 ||
                    emailHelper.length !== 0 ||
                    message.length === 0
                  }
                  className={classes.submitButton}
                  onClick={() => {
                    setDialogOpen(true);
                    handleSubmit();
                  }}
                  style={{ marginBottom: 0 }}
                >
                  Send message
                  <img
                    src={paperPlane}
                    alt="paper plane"
                    className={classes.submitIcon}
                  />
                </Button>
              </Grid>
              <Grid item align="center">
                <Button
                  className={classes.cancelButton}
                  onClick={() => setDialogOpen(false)}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Grid>
    </Grid>
  );
}
