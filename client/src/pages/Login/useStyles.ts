import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'fixed',
    minHeight: '100%',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  authWrapper: {
    position: 'relative',
    top: '20%',
    width: '50vw',
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
    objectPosition: '-20rem',
    objectFit: 'cover',
    maxWidth: '50vw',
  },
}));

export default useStyles;
