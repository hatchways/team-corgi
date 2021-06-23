import {
  Typography,
  Grid,
  CircularProgress,
  Paper,
  Card,
  CardMedia,
  CardContent,
  GridList,
  GridListTile,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/useAuthContext';
import house from '../../Images/house.jpg';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import useStyles from './useStyles';
import cuteDogOne from '../../Images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg';
import cuteDogTwo from '../../Images/dog-unsolicited.jpg';
import cuteDogThree from '../../Images/siberian_husky_cute_puppies.jpg';

const SitterProfile = (): JSX.Element => {
  const classes = useStyles();
  const { loggedInUser } = useAuth();
  const history = useHistory();

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    return <CircularProgress />;
  }

  const tileData = [
    {
      img: cuteDogOne,
      title: 'Dog',
    },
    {
      img: cuteDogTwo,
      title: 'Another dog',
    },
    {
      img: cuteDogThree,
      title: 'Even more dog',
    },
  ];

  return (
    <Card className={classes.mainCard} elevation={5}>
      <CardMedia className={classes.cardMedia} image={house} />

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
          <Typography className={classes.contentTypography} variant="h4">
            About me
          </Typography>
          <Grid item className={classes.profileText}>
            <Typography>
              Big Body Of TextBig Body Of TextBig Body Of TextBig Body Of TextBig Body Of TextBig Body Of TextBig Bod
              Big Body Of TextBig Body Of TextBig Body Of TextBig Body Of TextBig Body Of TextBig Body Of TextBig Bod
              Big Body Of TextBig Body Of TextBig Body Of TextBig Body Of TextBig Body Of TextBig Body Of TextBig Bod
            </Typography>
          </Grid>
          <GridList className={classes.gridList} cols={4}>
            {tileData.map((tile) => (
              <GridListTile key={tile.img}>
                <img className={classes.img} src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SitterProfile;
