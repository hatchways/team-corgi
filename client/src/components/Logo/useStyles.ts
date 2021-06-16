import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  logoText: {
    marginLeft: '1.5rem',
    marginTop: '2rem',
    fontSize: 35,
    fontWeight: 700,
    letterSpacing: '-1px',
  },
  logoIcon: {
    marginLeft: '2rem',
    marginTop: '2rem',
    color: theme.palette.primary.main,
    height: '4rem',
    width: '4rem',
  },
}));

export default useStyles;
