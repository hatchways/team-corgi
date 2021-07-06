/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AppBar, Toolbar, Button } from '@material-ui/core';
import React from 'react';
import Logo from './logo.png';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  box: {
    flexGrow: 1,
  },
  aTag: {
    color: '#000',
  },
  button: {
    marginLeft: '12px',
  },
  loginButton: {
    marginLeft: '30px',
  },
  logo: {
    width: '180px',
    height: '30px',
  },
});

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" color={'transparent'}>
      <Toolbar>
        <img src={Logo} alt="Logo" className={classes.logo} />
        <box className={classes.box}></box>
        <a href="/" className={classes.aTag}>
          BECOME A SITTER
        </a>
        <Button variant="outlined" color="secondary" className={classes.loginButton}>
          Login
        </Button>
        <Button variant="contained" color="secondary" className={classes.button}>
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
