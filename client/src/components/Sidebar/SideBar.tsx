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
        <ListItem button component={Link} to="/manageprofile/editprofile">
          <ListItemText primary="Edit Profile" className={classes.listItem}></ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/manageprofile/profilephoto">
          <ListItemText primary="Profile Photo" className={classes.listItem}></ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/manageprofile/availability">
          <ListItemText primary="Availability" className={classes.listItem}></ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/manageprofile/payment">
          <ListItemText primary="Payment" className={classes.listItem}></ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/manageprofile/security">
          <ListItemText primary="Security" className={classes.listItem}></ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/manageprofile/settings">
          <ListItemText primary="Settings" className={classes.listItem}></ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
