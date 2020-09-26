import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
} from "@material-ui/core";

import { Heading } from "@chakra-ui/core";

import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    boxShadow: "none",
    marginBottom: "2rem",
  },
  toolbar: {
    padding: "0",
  },
  title: {
    flexGrow: 1,
  },
  goTop: {
    position: "fixed",
    bottom: theme.spacing(5),
    right: theme.spacing(5),
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
}));

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.goTop}>
        {children}
      </div>
    </Zoom>
  );
}

const Navabr = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar color="inherit" className={classes.navbar} position="static">
        <Container>
          <Toolbar className={classes.toolbar}>
            <Heading size="lg" ml="0" className={classes.title}>
              <Link className={classes.link} to="/">
                Pokedex{" "}
              </Link>
            </Heading>

            <Button color="inherit">About</Button>
          </Toolbar>
        </Container>
      </AppBar>
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default Navabr;
