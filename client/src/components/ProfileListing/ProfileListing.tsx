import { Grid, TextField, Typography } from '@material-ui/core';
import Sidebar from '../Sidebar/SideBar';
import useStyles from './useStyles';
import IndivProfile from './IndivProfile/IndivProfile';
import firstPic from '../../Images/b1f0e680702e811aa8ba333cb19c0e0ea95e8e31.png';
import secondPic from '../../Images/68f55f7799df6c8078a874cfe0a61a5e6e9e1687.png';

const ProfileListings = (): JSX.Element => {
  const classes = useStyles();

  const profiles = [
    {
      firstName: 'First',
      lastName: 'Person',
      wage: 15,
      ratings: [4, 5],
      location: {
        city: 'Vancouver',
        country: 'Canada',
      },
      title: 'I love dogs, and pretty much all animals',
      description:
        "I've worked with pets my whole life and love it I have had over a dozen dogs in the past and look forward to meeting yours!",
      profilePic: firstPic,
    },
    {
      firstName: 'Second',
      lastName: 'Person',
      wage: 20,
      ratings: [5, 1],
      location: {
        city: 'Toronto',
        country: 'Canada',
      },
      title: 'I love cats',
      description: "I'm a professional dog trainer",
      profilePic: secondPic,
    },
    {
      firstName: 'Second',
      lastName: 'Person',
      wage: 20,
      ratings: [5, 1],
      location: {
        city: 'Toronto',
        country: 'Canada',
      },
      title: 'I love cats',
      description: "I'm a professional dog trainer",
      profilePic: secondPic,
    },
    {
      firstName: 'Second',
      lastName: 'Person',
      wage: 20,
      ratings: [5, 1],
      location: {
        city: 'Toronto',
        country: 'Canada',
      },
      title: 'I love cats',
      description: "I'm a professional dog trainer",
      profilePic: secondPic,
    },
  ];

  return (
    <Grid container>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={10}>
        <Grid container alignContent={'center'} className={classes.searchContainer}>
          <Typography className={classes.searchTitle}>Your search results</Typography>
          <TextField InputProps={{ disableUnderline: true }} className={classes.searchBox}></TextField>
        </Grid>
        <Grid container className={classes.root}>
          {profiles.map(
            (profile, i) => (
              i++,
              (
                <Grid item xs={4} className={classes.profileContainer} key={i}>
                  <IndivProfile
                    key={i}
                    name={profile.firstName + ' ' + profile.lastName}
                    image={profile.profilePic}
                    location={profile.location.city + ', ' + profile.location.country}
                    description={profile.description}
                    title={profile.title}
                    wage={profile.wage}
                    ratings={profile.ratings}
                  />
                </Grid>
              )
            ),
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileListings;
