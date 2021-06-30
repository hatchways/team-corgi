/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { CardActionArea, CardActions, CardContent, CardMedia, Typography, Card, Divider } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  media: {
    height: 140,
    width: 140,
    borderRadius: '50%',
    margin: '10px',
  },
  name: {
    justifyContent: 'center',
  },
});

function ProfileCard() {
  const [value, setValue] = React.useState<number | null>(1);
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.content}>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          title="Display Picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.name}>
            Name
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            description
          </Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          ></Rating>
          <Typography variant="h6">Profile Content, skills, about</Typography>
        </CardContent>
      </CardActionArea>
      <Divider />
      <CardActions>
        <LocationOnIcon />
      </CardActions>
    </Card>
  );
}

export default ProfileCard;
