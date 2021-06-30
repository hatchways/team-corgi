import { Grid, Paper, CircularProgress, Typography } from '@material-ui/core';
import { Request } from '../../interface/Request';

import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import CurrentBookings from './BookModule/CurrentBookings';
import image from '../../Images/68f55f7799df6c8078a874cfe0a61a5e6e9e1687.png';
import EachBooking from './BookModule/EachBooking/EachBooking';

const ManageBookings = (): JSX.Element => {
  const classes = useStyles();

  const request: Request = { name: 'Some Guy', date: '30 June 2021', startTime: 14, endTime: 19, pic: image };

  return (
    <Grid className={classes.root}>
      <Grid item sm={4}>
        <Paper>
          <Typography>Your next booking:</Typography>
          <EachBooking request={request} />
        </Paper>
        <CurrentBookings />
      </Grid>
    </Grid>
  );
};

export default ManageBookings;
