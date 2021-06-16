import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import register from '../../helpers/APICalls/register';
import SignUpForm from './SignUpForm/SignUpForm';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import { Button } from '@material-ui/core';
import login from '../../helpers/APICalls/login';
import dogs from '../../Images/goldenRetrievers.jpg';
import LandingPageBar from '../../components/LandingPageBar/LandingPageBar';
import Logo from '../../components/Logo/Logo';

export default function Register(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { username, email, password }: { email: string; password: string; username: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string; username: string }>,
  ) => {
    register(username, email, password).then((data) => {
      if (data.error) {
        console.error({ error: data.error.message });
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
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
                  Sign up
                </Typography>
              </Grid>
            </Grid>
            <SignUpForm handleSubmit={handleSubmit} />
          </Box>
          <Box alignSelf="center" paddingTop="1rem">
            <Typography variant="button">
              Already a member?
              <span> </span>
              <Link to="/login">Login</Link>
            </Typography>
          </Box>
          <Button className={classes.demoUserButton} onClick={handleDemoUser}>
            Sign in With Demo User
          </Button>
        </Box>
      </Grid>
      <img className={classes.dogs} src={dogs} />
      <LandingPageBar signupLink="/signup" loginLink="/login" sitterLink="/signup"></LandingPageBar>
    </Grid>
  );
}
