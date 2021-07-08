import { Typography, Grid, Card, Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Alert from '@material-ui/lab/Alert';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../context/useAuthContext';
import useStyles from './useStyles';
import { useState } from 'react';
import { KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import createRequests from '../../helpers/APICalls/createRequest';

const BookSitter = (): JSX.Element => {
  const classes = useStyles();
  const { loggedInUser } = useAuth();
  const [date, handleDate] = useState<Date | null>(new Date());
  const [startTime, handleStartTime] = useState<Date | null>(new Date());
  const [endTime, handleEndTime] = useState<Date | null>(new Date());
  const [isAlert, setIsAlert] = useState(false);
  const [isError, setIsError] = useState(false);

  const location = useLocation();
  const sendRequest = () => {
    createRequests(startTime, endTime, date, '60d4994ec30c55353c3e5d93', '60d4996fc30c55353c3e5d94').then((res) => {
      if (res.error) {
        setIsError(true);
      } else if (res) {
        setIsAlert(true);
      }
    });
  };

  return (
    <>
      <Card className={classes.mainCard}>
        <form className={classes.form}>
          <Grid container direction="column" className={classes.grid}>
            <Grid item className={classes.price}>
              <Typography variant="h4">$14/hr</Typography>
            </Grid>
            <Grid item className={classes.stars}>
              <Rating name="read-only" value={2} readOnly />
            </Grid>
            <Typography className={classes.dropInLabel}>DATE</Typography>
            <Grid item className={classes.dropIn}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  clearable
                  value={date}
                  disablePast
                  onChange={(d) => handleDate(d)}
                  minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Typography className={classes.dropInLabel}>DROP-IN</Typography>
            <Grid item className={classes.dropIn}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker mask="__:__ _M" value={startTime} onChange={(d) => handleStartTime(d)} />
              </MuiPickersUtilsProvider>
            </Grid>

            <Typography className={classes.dropInLabel}>DROP-OFF</Typography>
            <Grid item className={classes.dropIn}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker mask="__:__ _M" value={endTime} onChange={(d) => handleEndTime(d)} />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item className={classes.buttonGrid}>
              <Button className={classes.button} onClick={sendRequest}>
                SEND REQUEST
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
      {isAlert && <Alert severity="success">Request sent successfully</Alert>} ;
      {isError && <Alert severity="error">Something went wrong</Alert>}
    </>
  );
};

export default BookSitter;
