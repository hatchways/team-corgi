import { Grid, Paper, CircularProgress, Typography, CssBaseline } from '@material-ui/core';
import { Request } from '../../interface/Request';
import Calendar from 'react-calendar';
import './Calendar.css?rnd=13';

import useStyles from './useStyles';
import CurrentBookings from './BookModule/CurrentBookings';
import EachBooking from './BookModule/EachBooking/EachBooking';
import { useState, useEffect } from 'react';
import { compareDay } from '../CompareDay/CompareDay';
import { editRequest, getRequest } from '../../helpers/APICalls/request';
import { useAuth } from '../../context/useAuthContext';
import getProfile from '../../helpers/APICalls/getProfile';

interface Dates {
  date: Date;
  view?: string;
}

const ManageBookings = (): JSX.Element => {
  const classes = useStyles();
  const { loggedInUser } = useAuth();

  const [allBookings, setAllBookings] = useState<Array<Request>>();
  const [nextBooking, setNextBooking] = useState<Request | null>(null);
  const [bookedDates, setBookedDates] = useState<Array<Date>>();
  const [loading, setLoading] = useState(true);
  const today = new Date();

  const getBookings = async () => {
    if (!loggedInUser?.id) return console.log('server error');
    await getRequest(loggedInUser.id).then((res) => {
      if (res.requests) {
        setBookings(res.requests);
      }
    });
  };

  const setBookings = (requests: Request[]) => {
    const all = requests.sort((a: Request, b: Request) => a.day.getTime() - b.day.getTime());
    all.forEach(async (request, i) => {
      all[i].day = new Date(request.day);
      all[i].startTime = new Date(request.startTime);
      all[i].endTime = new Date(request.endTime);
      console.log(request.day);
      const owner = (await getProfile(request.user)).success?.profile;
      all[i].name = owner?.firstName + ' ' + owner?.lastName;
      all[i].pic = owner?.profilePic;
      if ((i = all.length)) handleComponents(all);
    });
  };
  const handleComponents = (all: Request[]) => {
    setAllBookings(all);
    const accepted = all?.filter((request) => request.accepted);
    const booked = accepted?.map((request) => request.day);
    setBookedDates(booked);
    const next = accepted?.filter((request) => request.day >= today || compareDay(request.day, today));
    if (next) {
      setNextBooking(next[0]);
    }
    setLoading(false);
  };
  const handleAccept = (response: boolean, id: number) => {
    if (!allBookings) return;
    setLoading(true);
    const b = [...allBookings];
    b.filter((request) => request.day >= today)[id - 1].accepted = response;
    const editedRequest = b.filter((request) => request.day >= today)[id - 1];
    if (b.length < 1) return;
    editRequest(editedRequest._id, editedRequest).then(() => {
      setBookings(b);
      setLoading(false);
    });
  };

  const tileClassName = ({ date }: Dates) => {
    if (bookedDates) {
      // Check if a day React-Calendar wants to check is on the list of dates to add class to
      if (bookedDates.find((dDate) => compareDay(dDate, date))) {
        if (compareDay(date, today)) {
          return classes.today;
        }
        if (date > today) {
          return classes.active;
        }
        return classes.past;
      }
    }
    return classes.inactive;
  };
  useEffect(() => {
    getBookings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setAllBookings]);
  return (
    <Grid>
      <CssBaseline />

      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container className={classes.root}>
          <Grid item sm={5} className={classes.allRequests}>
            <Paper elevation={3} className={classes.nextBooking}>
              <Typography className={classes.title}>Your next booking:</Typography>
              {nextBooking ? <EachBooking id={0} request={nextBooking} /> : <Typography>Nothing yet!</Typography>}
            </Paper>
            {allBookings ? <CurrentBookings handleAccept={handleAccept} bookings={allBookings} /> : null}
          </Grid>
          <Grid item sm={5} className={classes.calendarContainer}>
            <Paper>
              {
                <Calendar
                  minDetail={'year'}
                  className={classes.calendar}
                  next2Label={null}
                  prev2Label={null}
                  tileClassName={tileClassName}
                />
              }
            </Paper>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default ManageBookings;
