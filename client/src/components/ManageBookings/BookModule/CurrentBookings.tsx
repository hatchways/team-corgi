import { Grid, Paper, Typography, Box } from '@material-ui/core';
import EachBooking from './EachBooking/EachBooking';
import image from '../../../Images/68f55f7799df6c8078a874cfe0a61a5e6e9e1687.png';
import { Request } from '../../../interface/Request';

import useStyles from './useStyles';

const CurrentBookings = (): JSX.Element => {
  const classes = useStyles();

  const bookings: Array<Request> = [
    { name: 'Some Guy', date: '30 June 2021', startTime: 14, endTime: 19, pic: image, offer: true, accepted: true },
    { name: 'Some Guy', date: '30 June 2021', startTime: 14, endTime: 19, pic: image, offer: true },
  ];
  if (!bookings) return <Typography>No booking requests yet, try updating your information!</Typography>;
  return (
    <Grid>
      <Paper elevation={3}>
        <Typography>Current bookings:</Typography>
        {bookings.map(
          (request, i) => (i++, (<EachBooking key={i} className={classes.bookingContainer} request={request} />)),
        )}
        <Box p={0.5} />
      </Paper>
    </Grid>
  );
};

export default CurrentBookings;
