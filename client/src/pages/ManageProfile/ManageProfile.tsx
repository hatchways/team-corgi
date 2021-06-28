import { CssBaseline, Grid, Paper, CircularProgress } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../context/useAuthContext';
import useStyles from './useStyles';
import { useEffect, useState } from 'react';

import SideBar from '../../components/Sidebar/SideBar';
import EditProfile from '../../components/EditProfile/EditProfile';
import ProfilePhoto from '../../components/ProfilePhoto/ProfilePhoto';
import Payment from '../../components/Payment/Payment';
import Availability from '../../components/Availability/Availability';
import Security from '../../components/Security/Security';
import Settings from '../../components/Settings/Settings';
import getUserProfile from '../../helpers/APICalls/getProfile';
import { Profile } from '../../interface/Profile';

export default function ManageProfile(): JSX.Element {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const userData = useAuth();
  const userId = userData.loggedInUser?.id;
  const [userProfile, setUserProfile] = useState<Profile>();

  const handleRoute = (path: string) => {
    switch (path) {
      case '/manage-profile/edit-profile':
        return <EditProfile _id={userId} profile={userProfile} />;

      case '/manage-profile/profile-photo':
        return <ProfilePhoto />;

      case '/manage-profile/payment':
        return <Payment />;

      case '/manage-profile/availability':
        return <Availability />;

      case '/manageprofile/security':
        return <Security />;

      case '/manage-profile/settings':
        return <Settings />;

      default:
        return <EditProfile />;
    }
  };
  useEffect(() => {
    setLoading(true);
    async function getProfileData() {
      if (userId)
        return await getUserProfile(userId).then((data) => {
          if (data?.success) {
            setUserProfile(data.success.profile);
          }
          setLoading(false);
        });
      else setLoading(false);
    }
    getProfileData();
  }, [userId]);
  if (userId === undefined) return <CircularProgress />;
  if (loading) return <CircularProgress />;
  return (
    <Grid container>
      <CssBaseline />
      <Grid item xs={2}>
        <SideBar />
      </Grid>
      <Grid item xs={10} className={classes.root}>
        <Paper elevation={3} className={classes.gridContainer}>
          {handleRoute(location.pathname)}
        </Paper>
      </Grid>
    </Grid>
  );
}
