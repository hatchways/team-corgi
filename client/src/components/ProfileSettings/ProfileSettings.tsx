import { Grid } from '@material-ui/core';
import React, { ReactElement } from 'react';
import EditProfile from '../EditProfile/EditProfile';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from './useStyles';

function ProfileSettings(): ReactElement {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={2}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <List>
            {['Edit Profile', 'Profile Photo', 'Availability', 'Payment', 'Security', 'Settings'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} className={classes.listItem} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Grid>
      <Grid item xs={10}>
        <EditProfile></EditProfile>
      </Grid>
    </Grid>
  );
}

export default ProfileSettings;
