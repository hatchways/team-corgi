import { Grid, Paper } from '@material-ui/core';
import React, { ReactElement } from 'react';
import Sidebar from '../Sidebar/SideBar';
import useStyles from './useStyles';

const ProfilePhoto = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={2}>
        <Sidebar></Sidebar>
      </Grid>
      <Grid item xs={10}>
        <Paper className={classes.root} elevation={2}>
          <h1>Profile Photo</h1>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProfilePhoto;
