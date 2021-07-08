/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AppBar, Toolbar, Button, Grid, Menu, MenuItem } from '@material-ui/core';
import React from 'react';
import Logo from './logo.png';
import { makeStyles } from '@material-ui/styles';
import Popover from '@material-ui/core/Popover';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Tooltip from '@material-ui/core/Tooltip';
import { Fab } from '@material-ui/core';
import Notification from '../../components/Notification/Notification';
import { useAuth } from '../../context/useAuthContext';
import { useHistory } from 'react-router-dom';
import { usePopupState, bindMenu } from 'material-ui-popup-state/hooks';

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
  menu: {
    marginTop: '35px',
  },
  menuButton: {
    marginRight: '10px',
  },
});

function Header() {
  const classes = useStyles();
  const { loggedInUser } = useAuth();
  const history = useHistory();
  const popupState = usePopupState({ variant: 'popover', popupId: 'Menu' });
  const { logout } = useAuth();

  const handleMenu = (address) => {
    popupState.close();
    history.push(`/${address}`);
  };
  const handleLogout = () => {
    logout();
    popupState.close;
  };
  return (
    <AppBar position="static" color={'transparent'}>
      <Toolbar>
        <img src={Logo} alt="Logo" className={classes.logo} />
        <box className={classes.box}></box>
        {!loggedInUser ? (
          <Grid>
            <a href="/" className={classes.aTag}>
              BECOME A SITTER
            </a>
            <Button
              variant="outlined"
              onClick={() => history.push('/login')}
              color="secondary"
              className={classes.loginButton}
            >
              Login
            </Button>
            <Button
              variant="contained"
              onClick={() => history.push('/signup')}
              color="secondary"
              className={classes.button}
            >
              Sign Up
            </Button>
          </Grid>
        ) : (
          <Grid>
            <Button variant="contained" {...bindTrigger(popupState)} className={classes.menuButton}>
              Menu
            </Button>
            <Menu {...bindMenu(popupState)} className={classes.menu}>
              <MenuItem onClick={() => handleMenu('dashboard')}>Home</MenuItem>
              <MenuItem onClick={() => handleMenu('profile')}>Profile</MenuItem>
              <MenuItem onClick={() => handleMenu('manage-bookings')}>Bookings</MenuItem>
              <MenuItem onClick={() => handleMenu('manage-profile')}>Edit Profile</MenuItem>
              <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
            </Menu>
          </Grid>
        )}

        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <Grid>
              <Tooltip title="notification">
                <Fab {...bindTrigger(popupState)} color="primary">
                  <NotificationsIcon></NotificationsIcon>
                </Fab>
              </Tooltip>
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Notification></Notification>
              </Popover>
            </Grid>
          )}
        </PopupState>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
