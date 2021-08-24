import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    minWidth: '100%',
    minHeight: '300px',
  },
  image: {
    height: '80px',
    width: '80px',
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    color: 'grey',
    textAlign: 'center',
    paddingBottom: '7px',
    overflow: 'hidden',
    textOverflow: 'elipses',
    width: '100%',
    cursor: 'default',
  },
  main: {
    width: '100%',
    flexDirection: 'column',
    padding: '15px 16% 10px 16%',
    minHeight: '250px',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '15px 10px 15px 10px',
    borderTop: '1px solid rgb(225, 225, 225)',
  },
  wage: {
    flexDirection: 'row-reverse',
    fontWeight: 'bolder',
  },
  description: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: '7px',
    overflow: 'hidden',
    textOverflow: 'elipses',
    width: '100%',
    display: '-webkit-box',
    boxOrient: 'vertical',
    lineClamp: 3,
  },
  location: {
    flexDirection: 'row',
    display: 'flex',
    color: 'grey',
  },
  paper: {
    width: '100%',
  },
}));

export default useStyles;
