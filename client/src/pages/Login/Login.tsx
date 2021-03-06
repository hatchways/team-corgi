import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import login from '../../helpers/APICalls/login';
import LoginForm from './LoginForm/LoginForm';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import { Button } from '@material-ui/core';
import dogs from '../../Images/goldenRetrievers.jpg';
import logo from '../../Images/logo.png';
import LandingPageBar from '../../components/LandingPageBar/LandingPageBar';
import Logo from '../../components/Logo/Logo';
import { useSocket } from '../../context/useSocketContext';

export default function Login(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();
  const { socket, initSocket } = useSocket();

  const handleSubmit = (
    { email, password }: { email: string; password: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string }>,
  ) => {
    login(email, password).then((data) => {
      if (data.error) {
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
        initSocket();
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  const handleDemoUser = () => {
    login('test@test.com', 'test123').then((data) => {
      if (data.success) {
        updateLoginContext(data.success);
      }
    });
  };

  return (
    <Grid container component="main" direction="row" wrap="nowrap" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={7} elevation={6} component={Paper} square>
        <Logo />
        <Box className={classes.authWrapper}>
          <Box width="100%" maxWidth={450} p={3} alignSelf="center">
            <Grid container>
              <Grid item xs>
                <Typography className={classes.welcome} component="h1" variant="h5">
                  Log in
                </Typography>
              </Grid>
            </Grid>
            <LoginForm handleSubmit={handleSubmit} />
          </Box>
          <Box alignSelf="center">
            <Typography variant="button">
              Not a member yet?
              <Link to="/signup" style={{ marginLeft: '5px' }}>
                Register
              </Link>
            </Typography>
          </Box>
          <Button className={classes.demoUserButton} onClick={handleDemoUser}>
            Sign in With Demo User
          </Button>
        </Box>
      </Grid>
      <img className={classes.dogs} src={dogs} />
    </Grid>
  );
}
