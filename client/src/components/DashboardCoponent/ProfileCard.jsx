/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { CardActionArea, CardActions, CardContent, CardMedia, Typography, Card, Divider, Box } from '@material-ui/core';
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
  cardFooter: {
    padding: '1rem',
  },
  location: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 500,
    gap: '0.25rem',
  },
  price: {
    fontSize: '1rem',
  },
  boldFont: {
    fontWeight: 600,
  },
  link: {
    textDecoration: 'none',
  },
});

function ProfileCard({ sitter }) {
  const [value, setValue] = useState(1);
  const classes = useStyles();
  return (
    // <Link to={`/profile/${sitter._id}`} className={classes.link}>
    <Card className={classes.root}>
      <CardActionArea className={classes.content}>
        <NavLink to={{ pathname: '/book-sitter', state: { sitter } }}>
          <CardMedia
            className={classes.media}
            image="https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            title="Display Picture"
          />
        </NavLink>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.name}>
            {`${sitter.firstName} ${sitter.lastName}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {sitter.description?.substr(0, 60)}...
          </Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          ></Rating>
          <Typography variant="h6">Your next dog sitter</Typography>
        </CardContent>
      </CardActionArea>
      <Divider />
      <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.cardFooter}>
        <Typography variant="body1" color="secondary" className={classes.location}>
          <LocationOnIcon color="primary" />
          {sitter.city}
        </Typography>
        <Typography variant="body1" className={`${classes.boldFont} ${classes.price}`}>
          ${sitter.price}/hr
        </Typography>
      </Box>
    </Card>
    // </Link>
  );
}

export default ProfileCard;
