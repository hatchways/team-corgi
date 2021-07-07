import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';
import DashboardComponent from '../../components/DashboardCoponent/DashboardComponent';
import { useEffect } from 'react';
import getProfile from '../../helpers/APICalls/getProfile';
import ChatSideBanner from '../../components/ChatSideBanner/ChatSideBanner';

export default function Dashboard(): JSX.Element {
  const classes = useStyles();

  const { loggedInUser, userProfile } = useAuth();
  const { socket, initSocket } = useSocket();

  const history = useHistory();

  useEffect(() => {
    socket?.emit('login', { user: loggedInUser });
  }, [loggedInUser, socket]);

  useEffect(() => {
    loggedInUser?.id && getProfile(loggedInUser.id);
  }, [loggedInUser]);

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    return <CircularProgress />;
  }

  return (
    <Grid container component="main" className={`${classes.root} ${classes.dashboard}`}>
      <CssBaseline />
      <DashboardComponent />

      <Grid item className={classes.drawerWrapper}>
        <ChatSideBanner loggedInUser={loggedInUser} />
      </Grid>
    </Grid>
  );
}
