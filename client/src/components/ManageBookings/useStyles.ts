import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  active: {
    backgroundColor: 'red',
    color: 'white',
  },
  allRequests: {
    margin: '3% 2% 2% 10%',
  },
  calendar: {
    border: '0px solid black',
    __arrow: { color: 'red' },
  },
  calendarContainer: {
    margin: '3% 2%',
    maxHeight: '450px',
    maxWidth: '450px',
  },
  inactive: {
    flex: 1,
  },
  navigationButton: {
    color: 'red',
  },
  nextBooking: {
    padding: '10px',
    marginBottom: '15px',
  },
  past: {
    backgroundColor: 'rgb(255, 200, 200)',
  },
  root: {
    justifyContent: 'space-together',
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '11px',
    padding: '22px 0px 0px 13px',
  },
  today: {
    backgroundColor: 'red',
    color: 'gold',
    fontWeight: 'bold',
  },
}));

export default useStyles;
