import { Grid, Paper, CircularProgress, Typography, Button } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import Sidebar from '../Sidebar/SideBar';
import useStyles from './useStyles';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import { useAuth } from '../../context/useAuthContext';
import { useHistory } from 'react-router-dom';

const ProfilePhoto = (): JSX.Element => {
  const classes = useStyles();
  const { loggedInUser } = useAuth();
  const history = useHistory();
  const handleUpload = (event: any) => {
    console.log(event.target.files[0]);
  };
  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }
  return (
    <Grid container>
      <Grid item xs={2}>
        <Sidebar></Sidebar>
      </Grid>
      <Grid item xs={10}>
        <Paper className={classes.root} elevation={2}>
          <Grid container justify="center" className={classes.main}>
            <Grid container alignItems="center" direction="column" className={classes.subMain}>
              <Typography className={classes.title}>Profile Photo</Typography>
              <AvatarDisplay loggedIn user={loggedInUser} className={classes.displayPic} />
              <Typography className={classes.explanation}>
                Be sure to use a photo that clearly shows your face
              </Typography>
              <Button color="primary" variant="outlined" className={classes.buttonUpload} component="label">
                Upload a file from your device
                <input type="file" hidden onChange={handleUpload} />
              </Button>
              <Button className={classes.buttonDelete}>
                <DeleteOutlineIcon />
                <Typography className={classes.textDelete}>Delete photo</Typography>
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProfilePhoto;
