import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    margin: '1%',
    maxHeight: '350px',
    display: 'flex',
    overflowX: 'hidden',
    overflowY: 'scroll',
    flexDirection: 'column',
    '&::-webkit-scrollbar': {
      width: '0.4em',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgb(200,200,200)',
      webkitBoxShadow: 'inset 0 0 6px rgb(0,0,0)',
      borderRadius: '20px',
      margin: '47px 0px 20px 0px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.3)',
      borderRadius: '20px',
    },
  },
  bookingContainer: {
    border: '1px solid rgb(225, 225, 225)',
    borderRadius: '5px',
    margin: '10px',
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '11px',
    padding: '22px 0px 0px 13px',
  },
}));

export default useStyles;
