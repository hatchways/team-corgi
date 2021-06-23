import {
  Typography,
  Grid,
  CircularProgress,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Box,
  TextField,
  Button,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { useAuth } from '../../context/useAuthContext';
import house from '../../Images/house.jpg';
import useStyles from './useStyles';

const BookSitter = (): JSX.Element => {
  const classes = useStyles();
  const { loggedInUser } = useAuth();

  return (
    <Card className={classes.mainCard}>
      <form className={classes.form}>
        <Grid container direction="column" className={classes.grid}>
          <Grid item className={classes.price}>
            <Typography variant="h4">$14/hr</Typography>
          </Grid>
          <Grid item className={classes.stars}>
            <Rating name="read-only" value={2} readOnly />
          </Grid>
          <Typography className={classes.dropInLabel}>DROP-IN</Typography>
          <Grid item className={classes.dropIn}>
            <TextField
              id="datetime-local"
              type="datetime-local"
              className={classes.dropInText}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Typography className={classes.dropOffLabel}>DROP-OFF</Typography>
          <Grid item className={classes.dropOff}>
            <TextField
              id="datetime-local"
              type="datetime-local"
              className={classes.dropInText}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item className={classes.buttonGrid}>
            <Button className={classes.button}>SEND REQUEST</Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
};

export default BookSitter;
