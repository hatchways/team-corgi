import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    minHeight: '100vh',
    marginTop: '50vh',
  },
  welcome: {
    fontSize: 35,
    paddingBottom: '2rem',
    color: '#000000',
    fontWeight: 900,
    fontFamily: "'Open Sans'",
    textAlign: 'center',
  },
}));

export default useStyles;
