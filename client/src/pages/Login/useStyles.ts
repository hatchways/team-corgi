import { makeStyles } from '@material-ui/core/styles';
import { wrap } from 'module';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    minWidth: '100vw',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  authWrapper: {
    position: 'relative',
    top: '25%',
    minWidth: '35%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  welcome: {
    fontSize: 35,
    paddingBottom: '2rem',
    color: '#000000',
    fontWeight: 900,
    fontFamily: "'Open Sans'",
    textAlign: 'center',
  },
  demoUserButton: {
    position: 'fixed',
    left: '1rem',
    bottom: '1rem',
    backgroundColor: 'green',
    color: 'white',
  },
  dogs: {
    objetFit: 'cover',
    flex: 1,
    objectPosition: '10%',
  },
}));

export default useStyles;
