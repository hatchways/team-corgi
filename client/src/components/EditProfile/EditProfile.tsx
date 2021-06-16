import { TextField, Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import useStyles from './useStyles';

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
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return (
    <>
      <Paper elevation={3} className={classes.gridContainer}>
        <Typography variant="h3" className={classes.heading}>
          Edit Profile
        </Typography>
        <form>
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={2} className={classes.formLabel}>
              FIRST NAME
            </Grid>
            <Grid item xs={6} className={classes.formInputField}>
              <TextField size="small" variant="outlined" placeholder="First Name" fullWidth></TextField>
            </Grid>
            <Grid xs={2}></Grid>

            <Grid item xs={2}></Grid>
            <Grid item xs={2} className={classes.formLabel}>
              LAST NAME
            </Grid>
            <Grid item xs={6} className={classes.formInputField}>
              <TextField size="small" variant="outlined" placeholder="First Name" fullWidth></TextField>
            </Grid>
            <Grid xs={2}></Grid>

            <Grid item xs={2}></Grid>
            <Grid item xs={2} className={classes.formLabel}>
              GENDER
            </Grid>
            <Grid item xs={6}>
              <Select variant="outlined" label="Male" className={classes.formSelectField1}>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={2}></Grid>

            {/* BirthDate  */}
            <Grid item xs={2}></Grid>
            <Grid item xs={2} className={classes.formLabel}>
              Birth Date
            </Grid>
            <Grid item xs={2}>
              <Select variant="outlined" className={classes.formSelectField2}>
                {months.map((m, index) => (
                  <MenuItem key={index} value={m}>
                    {m}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={1}>
              <Select variant="outlined" className={classes.formSelectField2}>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={2}>
              <Select variant="outlined" label="Male" className={classes.formSelectField2}>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={2}></Grid>

            {/* email Address    */}
            <Grid item xs={2}></Grid>
            <Grid item xs={2} className={classes.formLabel}>
              EMAIL ADDRESS
            </Grid>
            <Grid item xs={6} className={classes.formInputField}>
              <TextField size="small" variant="outlined" placeholder="johndoe@gmail.com" fullWidth></TextField>
            </Grid>
            <Grid xs={2}></Grid>

            {/* Phone Number   */}
            <Grid item xs={2}></Grid>
            <Grid item xs={2} className={classes.formLabel}>
              PHONE NUMBER
            </Grid>
            <Grid item xs={6} className={classes.formInputField}>
              <Button variant="outlined" className={classes.buttonPhone}>
                Add a phone number
              </Button>
            </Grid>
            <Grid xs={2}></Grid>

            {/* Address */}
            <Grid item xs={2}></Grid>
            <Grid item xs={2} className={classes.formLabel}>
              WHERE YOU LIVE
            </Grid>
            <Grid item xs={6} className={classes.formInputField}>
              <TextField size="small" variant="outlined" placeholder="johndoe@gmail.com" fullWidth></TextField>
            </Grid>
            <Grid xs={2}></Grid>

            {/* Description  */}
            <Grid item xs={2}></Grid>
            <Grid item xs={2} className={classes.formLabel}>
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
    </>
  );
};

export default EditProfile;
