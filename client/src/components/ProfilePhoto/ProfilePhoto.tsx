import { Grid, Paper, CircularProgress, Typography, Button, Avatar } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import React, { useState, useEffect } from 'react';

import Sidebar from '../Sidebar/SideBar';
import useStyles from './useStyles';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import { useAuth } from '../../context/useAuthContext';
import { useHistory } from 'react-router-dom';
import uploadPictureRequest from '../../helpers/APICalls/uploadPic';

const ProfilePhoto = (): JSX.Element => {
  const classes = useStyles();
  const { loggedInUser } = useAuth();
  const history = useHistory();

  const [previewSource, setPreviewSource] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (!(event.target.files instanceof FileList)) return;
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (reader.result) {
        const result: string = reader.result as string;
        const fd = new FormData();
        fd.append('pics', result);
        uploadPictureRequest(fd);
        previewFile(result);
      }
    };
  };
  const previewFile = (file: string) => {
    setPreviewSource(file);
  };

  const loadProfilePic = async () => {
    try {
      const res = await fetch('/api/pic');
      const data = await res.json();
      console.log(data);
      setPreviewSource(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProfilePic();
  }, []);

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
              {previewSource ? (
                <Avatar src={previewSource} className={classes.displayPic} />
              ) : (
                <AvatarDisplay loggedIn user={loggedInUser} className={classes.displayPic} />
              )}
              <Typography className={classes.explanation}>
                Be sure to use a photo that clearly shows your face
              </Typography>
              <Button color="primary" variant="outlined" className={classes.buttonUpload} component="label">
                Upload a file from your device
                <input type="file" hidden onChange={handleInputChange} />
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
