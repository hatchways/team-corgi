import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../themes/theme';

const useStyles = makeStyles(() => ({
  sitterLoginSignup: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'row',
    marginTop: '2rem',
    marginRight: '4rem',
    right: 0,
    top: 0,
  },
  becomeASitterText: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
    marginRight: '4rem',
  },
  signupButton: {
    marginLeft: '1rem',
    width: '10rem',
    height: '4rem',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    fontSize: 18,
    fontWeight: 600,
  },
  signupButtonText: {
    color: 'white',
    textDecoration: 'none',
  },
  loginButton: {
    color: 'white',
    border: '1px solid',
    borderColor: 'white',
    width: '10rem',
    height: '4rem',
    fontSize: 18,
    fontWeight: 600,
  },
  loginButtonText: {
    color: 'white',
    textDecoration: 'none',
  },
}));

export default useStyles;
