import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../themes/theme';

const useStyles = makeStyles(() => ({
  logoBox: {
    display: 'flex',
    position: 'fixed',
    height: '4rem',
    top: '3rem',
    left: '3rem',
  },
  logoText: {
    marginLeft: '1.5rem',
    fontSize: 35,
    fontWeight: 700,
    alignSelf: 'center',
    letterSpacing: '-1px',
  },
  logoIcon: {
    color: theme.palette.primary.main,
    height: '4rem',
    width: '4rem',
    alignSelf: 'center',
  },
}));

export default useStyles;
