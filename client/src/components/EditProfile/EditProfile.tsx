import { TextField, Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import useStyles from './useStyles';
import Sidebar from '../Sidebar/SideBar';

interface Props {
  firstName?: string;
  lastName?: string;
  gender?: string;
  birthDate?: Date;
  email?: string;
  phone?: string;
  place?: string;
  description?: string;
}

const EditProfile = (props: Props) => {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <Sidebar></Sidebar>
        </Grid>
        <Grid item xs={10} style={{ backgroundColor: '#FAFAFA' }}>
          <Paper elevation={3} className={classes.gridContainer}>
            <Typography variant="h3" className={classes.heading}>
              Edit Profile
            </Typography>
            <form>
              <Grid container>
                <Grid item xs={2} md={2}></Grid>
                <Grid item xs={2} md={2} className={classes.formLabel}>
                  FIRST NAME
                </Grid>
                <Grid item xs={6} md={6} className={classes.formInputField}>
                  <TextField size="small" variant="outlined" placeholder="First Name" fullWidth></TextField>
                </Grid>
                <Grid xs={2} md={2}></Grid>

                <Grid item xs={2}></Grid>
                <Grid item xs={2} className={classes.formLabel}>
                  LAST NAME
                </Grid>
                <Grid item xs={6} className={classes.formInputField}>
                  <TextField size="small" variant="outlined" placeholder="Last Name" fullWidth></TextField>
                </Grid>
                <Grid xs={2}></Grid>

                <Grid item xs={2}></Grid>
                <Grid item xs={2} className={classes.formLabel}>
                  EMAIL ADDRESS
                </Grid>
                <Grid item xs={6} className={classes.formInputField}>
                  <TextField size="small" variant="outlined" placeholder="johndoe@gmail.com" fullWidth></TextField>
                </Grid>
                <Grid xs={2}></Grid>

                <Grid item xs={2}></Grid>
                <Grid item xs={2} className={classes.formLabel}>
                  PHONE NUMBER
                </Grid>
                <Grid item xs={6} className={classes.formInputField}>
                  <Button color="primary" variant="outlined" className={classes.buttonPhone}>
                    Add a phone number
                  </Button>
                </Grid>
                <Grid xs={2}></Grid>

                <Grid item xs={2}></Grid>
                <Grid item xs={2} className={classes.formLabel}>
                  WHERE YOU LIVE
                </Grid>
                <Grid item xs={6} className={classes.formInputField}>
                  <TextField size="small" variant="outlined" placeholder="Toronto, Canada" fullWidth></TextField>
                </Grid>
                <Grid xs={2}></Grid>

                <Grid item xs={1}></Grid>
                <Grid item xs={3} className={classes.formLabel}>
                  DESCRIBE YOURSELF
                </Grid>
                <Grid item xs={6} className={classes.formInputField}>
                  <TextField
                    size="small"
                    variant="outlined"
                    multiline
                    rows={4}
                    placeholder="About you"
                    fullWidth
                  ></TextField>
                </Grid>
                <Grid xs={2}></Grid>
              </Grid>
            </form>
            <Button color="primary" size="large" type="submit" variant="contained" className={classes.submitButton}>
              Submit
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default EditProfile;
