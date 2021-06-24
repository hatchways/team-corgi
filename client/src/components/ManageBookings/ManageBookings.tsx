import { Grid, Paper, CircularProgress, Typography } from '@material-ui/core';

import Sidebar from '../Sidebar/SideBar';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { useHistory } from 'react-router-dom';

const ManageBookings = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Sidebar />
    </Grid>
  );
};

export default ManageBookings;
