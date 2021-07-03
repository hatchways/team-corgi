import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';
import DashboardComponent from '../../components/DashboardCoponent/DashboardComponent';
import { useEffect } from 'react';
import Popover from '@material-ui/core/Popover';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Tooltip from '@material-ui/core/Tooltip';
import { Fab, IconButton } from '@material-ui/core';
import Notification from '../../components/Notification/Notification';
import ChatSideBanner from '../../components/ChatSideBanner/ChatSideBanner';

export default function Dashboard(): JSX.Element {
  const classes = useStyles();

  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();

  const history = useHistory();

  useEffect(() => {
    initSocket();
  }, [initSocket]);

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }

  return (
    <Grid container component="main" className={`${classes.root} ${classes.dashboard}`}>
      <CssBaseline />
      <DashboardComponent />
      <Grid item className={classes.drawerWrapper}>
        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <div>
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
                {/* <Box p={2}>
                  <Typography>The content of the Popover.</Typography>
                </Box> */}
                <Notification username={loggedInUser}></Notification>
              </Popover>
            </div>
          )}
        </PopupState>
        <ChatSideBanner loggedInUser={loggedInUser} />
      </Grid>
    </Grid>
  );
}
