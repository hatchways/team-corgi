import { Typography, Grid, CircularProgress, Paper } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/useAuthContext';
import house from '../../Images/house.jpg';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import useStyles from './useStyles';

const SitterProfile = (): JSX.Element => {
  const classes = useStyles();
  const { loggedInUser } = useAuth();
  const history = useHistory();

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    return <CircularProgress />;
  }

  return (
    <Grid container className={classes.main} direction="column">
      <img className={classes.housePicture} src={house} object-fit="fill" />
      <AvatarDisplay loggedIn user={loggedInUser} className={classes.displayPic} />
      <Grid item className={classes.gridItem} direction="column">
        <Typography className={classes.name} variant="h2">
          Norma Byers
        </Typography>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Typography className={classes.subtitle}>Loving pet sitter</Typography>
      </Grid>
      <Grid item direction="row" alignItems="baseline" className={classes.gridItem}>
        <Typography className={classes.location}>
          <LocationOnIcon className={classes.locationIcon} />
          Toronto, Ontario
        </Typography>
      </Grid>
      <Grid container>
        <Grid item>
          <Typography className={classes.aboutMe} variant="h4">
            About me
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.aboutMeParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare sodales scelerisque. Nunc vitae
            faucibus augue, in vehicula ligula. Nullam maximus sagittis mauris id bibendum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nam porta ipsum leo. Cras diam ipsum, accumsan sed libero quis, convallis
            pellentesque justo. In fringilla a purus nec molestie. Donec ac metus vel libero sagittis aliquet id a
            risus. Vestibulum mi nisi, consequat at ante eu, sagittis rutrum velit. Etiam tincidunt, velit quis dapibus
            mollis, quam dui sagittis lacus, dictum molestie ligula enim eget metus. Duis at aliquam nisl, quis placerat
            nibh. In ut magna nunc. Donec ut ultrices ligula, nec vulputate eros.
          </Typography>
        </Grid>
        <Grid item>
            <Grid container direction="row">
                <img></img>
                <img></img>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SitterProfile;
