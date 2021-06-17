import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import login from '../../helpers/APICalls/login';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import { Button } from '@material-ui/core';
import LandingPageForm from './LandingPageForm/LandingPageForm';
import dogs from '../../Images/goldenRetrievers.jpg';
import LandingPageBar from '../../components/LandingPageBar/LandingPageBar';
import Logo from '../../components/Logo/Logo';
import makeSitterRequest from '../../helpers/APICalls/makeSitterRequest';

export default function LandingPage(): JSX.Element {
  const classes = useStyles();
  /*const { updateLoginContext } = useAuth();*/
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { location, dropIn, dropOff }: { location: string; dropIn: string; dropOff: string },
    { setSubmitting }: FormikHelpers<{ location: string; dropIn: string; dropOff: string }>,
  ) => {
    makeSitterRequest(location, dropIn, dropOff).then((data) => {
      if (data.error) {
        console.error({ error: data.error.message });
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        console.log('success');
      }
    });
  };

  const handleDemoUser = () => {
    login('test@test.com', 'test123').then((data) => {
      if (data.success) {
        /*updateLoginContext(data.success);*/
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
                <Typography className={classes.welcome} variant="h1">
                  Find the care your dog deserves
                </Typography>
              </Grid>
            </Grid>
            <LandingPageForm handleSubmit={handleSubmit} />
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
