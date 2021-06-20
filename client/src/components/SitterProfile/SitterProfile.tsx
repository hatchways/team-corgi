import { Typography, Grid, CircularProgress, Paper, Card, CardMedia, CardContent, Box } from '@material-ui/core';
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
    <Card className={classes.mainCard}>
      <CardMedia className={classes.cardMedia} image={house} />
      <Paper elevation={3}>
        <Paper elevation={2} className={classes.avatarPaper}>
          <AvatarDisplay loggedIn user={loggedInUser} className={classes.avatar} />
        </Paper>
        <Grid container direction="column" alignContent="center">
          <Grid item className={classes.firstGridItem}>
            <Typography className={classes.name}>Norma Byers</Typography>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Typography className={classes.subtitle}>Loving Pet Sitter</Typography>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Typography className={classes.location}>
              <LocationOnIcon color="primary"></LocationOnIcon>Toronto, Ontario
            </Typography>
          </Grid>
        </Grid>

        <CardContent className={classes.cardContent}>
          <Grid container direction="column">
            <Grid item>
              <Typography className={classes.contentTypography} variant="h4">
                About me
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                Big Body Of TextBig Body Of TextBig Body Of TextBig Body Of TextBig Body Of TextBig Body Of TextBig Bod
                Big Body Of TextBig Body Of TextBig Body Of TextBig Body Of TextBig Body Of TextBig Body Of TextBig Bod
                Big Body Of TextBig Body Of TextBig Body Of TextBig Body Of TextBig Body Of TextBig Body Of TextBig Bod
              </Typography>
              <Grid item className={classes.imageDrawer}></Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Paper>
    </Card>
  );
};

export default SitterProfile;
