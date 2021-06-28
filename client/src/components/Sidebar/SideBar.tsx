import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

import useStyles from './useStyles';

const Sidebar = (): JSX.Element => {
  const classes = useStyles();

  return (
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
        <ListItem button component={Link} to="/manage-profile/edit-profile">
          <ListItemText primary="Edit Profile" className={classes.listItem}></ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/manage-profile/profile-photo">
          <ListItemText primary="Profile Photo" className={classes.listItem}></ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/manage-profile/availability">
          <ListItemText primary="Availability" className={classes.listItem}></ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/manage-profile/payment">
          <ListItemText primary="Payment" className={classes.listItem}></ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/manage-profile/security">
          <ListItemText primary="Security" className={classes.listItem}></ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/manage-profile/settings">
          <ListItemText primary="Settings" className={classes.listItem}></ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
