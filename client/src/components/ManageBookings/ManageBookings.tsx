import { Grid, Paper, CircularProgress, Typography, CssBaseline } from '@material-ui/core';
import { Request } from '../../interface/Request';
import Calendar from 'react-calendar';
import './Calendar.css?rnd=13';

import useStyles from './useStyles';
import CurrentBookings from './BookModule/CurrentBookings';
import image from '../../Images/68f55f7799df6c8078a874cfe0a61a5e6e9e1687.png';
import EachBooking from './BookModule/EachBooking/EachBooking';
import { useState, useEffect } from 'react';
import { compareDay } from '../CompareDay/CompareDay';

interface Dates {
  date: Date;
  view?: string;
}

const ManageBookings = (): JSX.Element => {
  const classes = useStyles();
  const bookings: Array<Request> = [
    //replace with data from database
    { name: 'Some Guy1', date: new Date('2021-06-30'), startTime: 14, endTime: 19, pic: image, accepted: true },
    { name: 'Some Guy3', date: new Date('2021-07-29'), startTime: 14, endTime: 19, pic: image, accepted: true },
    { name: 'Some Guy2', date: new Date('2021-07-2'), startTime: 14, endTime: 19, pic: image, accepted: true },
    { name: 'Some Guy4', date: new Date('2021-07-25'), startTime: 14, endTime: 19, pic: image },
  ];
  const [allBookings, setAllBookings] = useState<Array<Request>>();
  const [nextBooking, setNextBooking] = useState<Request | null>(null);
  const [bookedDates, setBookedDates] = useState<Array<Date>>();
  const [loading, setLoading] = useState(true);
  const today = new Date();

  const getBookings = () => {
    if (!allBookings) {
      const all = bookings.sort((a, b) => a.date.getTime() - b.date.getTime());
      setAllBookings(all);
    }
    const acceptedBookings = allBookings?.filter((request) => request.accepted);
    const bookedDates = acceptedBookings?.map((request) => request.date);
    setBookedDates(bookedDates);
    const nextBookings = acceptedBookings?.filter(
      (request) => request.date >= today || compareDay(request.date, today),
    );
    if (nextBookings) {
      setNextBooking(nextBookings[0]);
    }
  };

  const handleAccept = (response: boolean, id: number) => {
    if (!allBookings) return;
    setLoading(true);
    const b = [...allBookings];
    b.filter((request) => request.date >= today)[id - 1].accepted = response;
    setAllBookings(b);
    setLoading(false);
  };
  useEffect(() => {
    getBookings();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allBookings]);

  const tileClassName = ({ date }: Dates) => {
    if (bookedDates) {
      // Check if a date React-Calendar wants to check is on the list of dates to add class to
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

  if (loading) return <CircularProgress />;
  return (
    <Grid container className={classes.root}>
      <CssBaseline />
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
  );
};

export default ManageBookings;
