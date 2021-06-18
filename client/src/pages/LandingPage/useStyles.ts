import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'fixed',
    height: '100%',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  authWrapper: {
    marginTop: '5rem',
    width: '50vw',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  welcome: {
    fontSize: 45,
    paddingBottom: '4rem',
    color: '#000000',
    fontWeight: 600,
    fontFamily: theme.typography.fontFamily,
    textAlign: 'left',
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
