import { Typography, Grid, CircularProgress, Paper, Card, CardMedia, CardContent, Box } from '@material-ui/core';
import { useAuth } from '../../context/useAuthContext';
import house from '../../Images/house.jpg';
import useStyles from './useStyles';

const BookSitter = (): JSX.Element => {
  const classes = useStyles();
  const { loggedInUser } = useAuth();

  return (
    <Card className={classes.mainCard}>
      <Paper elevation={3}>
        <form>
          <Grid container direction="column">
            <Grid item className={classes.price}></Grid>
            <Grid item className={classes.stars}></Grid>
            <Grid item className={classes.dropIn}></Grid>
            <Grid item className={classes.dropOff}></Grid>
            <Grid item className={classes.button}></Grid>
          </Grid>
        </form>
      </Paper>
    </Card>
  );
};

export default BookSitter;
