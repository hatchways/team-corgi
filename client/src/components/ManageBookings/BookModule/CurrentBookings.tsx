import { Grid, Paper, Typography, Box, CssBaseline, CircularProgress } from '@material-ui/core';
import EachBooking from './EachBooking/EachBooking';
import { Request } from '../../../interface/Request';

import useStyles from './useStyles';

interface Props {
  bookings: Array<Request>;
  handleAccept: (arg1: boolean, arg2: number) => void;
}

const CurrentBookings = ({ bookings, handleAccept }: Props): JSX.Element => {
  const classes = useStyles();
  const now = new Date();

  let pastBookings = [...bookings];
  pastBookings = pastBookings.filter((request) => request.date < now);
  let futureBookings = [...bookings];
  futureBookings = futureBookings.filter((request) => request.date >= now);

  if (!bookings) return <CircularProgress />;
  return (
    <Grid>
      <CssBaseline />
      <Paper elevation={3}>
        <Grid className={classes.root}>
          <Typography className={classes.title}>Current bookings:</Typography>
          {futureBookings.map(
            (request, i) => (
              i++,
              (
                <EachBooking
                  key={i}
                  id={i}
                  handleAccept={handleAccept}
                  className={classes.bookingContainer}
                  offer={true}
                  request={request}
                />
              )
            ),
          )}
          <Typography className={classes.title}>Past bookings:</Typography>
          {pastBookings.map(
            (request, i) => (
              i++, (<EachBooking key={i} id={i} className={classes.bookingContainer} offer={true} request={request} />)
            ),
          )}
          <Box p={0.5} />
        </Grid>
      </Paper>
    </Grid>
  );
};

export default CurrentBookings;
