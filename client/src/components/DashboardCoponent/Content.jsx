/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useEffect } from 'react';
import Card from './ProfileCard';
import { Grid, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import getAllProfiles from '../../helpers/APICalls/getAllProfiles';

const useStyles = makeStyles(() => ({
  bottomButton: {
    margin: 'auto',
  },
  btnContainer: {
    padding: '2rem 0',
    display: 'grid',
    width: '100%',
  },
}));

function Content() {
  const [allProfileData, setAllProfileData] = useState([]);
  useEffect(() => {
    const profileData = async () => {
      const result = await getAllProfiles();
      setAllProfileData(result.profiles);
    };
    profileData();
  }, []);

  const [length, setLength] = useState(6);
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      {allProfileData.map((sitterProfile) => (
        <Grid item xs={12} sm={6} md={4} xl={3} key={sitterProfile._id}>
          <Card sitter={sitterProfile} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Content;
