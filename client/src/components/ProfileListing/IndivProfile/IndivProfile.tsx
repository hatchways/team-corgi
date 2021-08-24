import { Grid, Typography, Avatar, Paper, Tooltip } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import useStyles from './useStyles';
import RoomIcon from '@material-ui/icons/Room';

interface Props {
  name: string;
  image?: string;
  location?: string;
  title?: string;
  description?: string;
  ratings?: Array<number>;
  wage?: number;
}
const IndivProfile = ({ name, image, location, title, description, ratings, wage }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Paper className={classes.paper} elevation={6}>
        <Grid container alignItems={'center'} className={classes.main}>
          <Avatar alt="Profile Picture" src={image} className={classes.image} />
          <Typography className={classes.name}>{name}</Typography>
          <Tooltip title={title ? title : 'Just me'}>
            <Typography noWrap className={classes.title}>
              {title}
            </Typography>
          </Tooltip>
          <Rating
            size={'small'}
            readOnly={true}
            precision={0.1}
            value={ratings ? ratings.reduce((a, b) => a + b, 0) / ratings.length : 0}
          />
          <Tooltip title={description ? description : 'Busy petsitting, will update soon...'}>
            <Typography className={classes.description}>{description}</Typography>
          </Tooltip>
        </Grid>
        <Grid container className={classes.bottom}>
          <Grid item className={classes.location}>
            <RoomIcon color={'primary'} />
            <Typography>{location}</Typography>
          </Grid>
          <Typography className={classes.wage}>${wage}/hr</Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default IndivProfile;
