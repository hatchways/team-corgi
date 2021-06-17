import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  label: {
    fontSize: 15,
    fontWeight: 700,
    color: 'black',
    marginBottom: '-0.8rem',
    marginTop: '0.8rem',
  },
  inputs: {
    height: '1.5rem',
  },
  forgot: {
    paddingRight: 10,
    color: '#3a8dff',
  },
  submit: {
    margin: theme.spacing(3, 2, -10),
    padding: 0,
    width: '12rem',
    height: '4rem',
    borderRadius: theme.shape.borderRadius,
    marginTop: '2rem',
    fontSize: 14,
    backgroundColor: theme.palette.primary.main,
    fontWeight: 'bold',
  },
  dropIn: {
    color: theme.palette.primary.main,
    marginTop: '1rem',
    width: '50%',
  },
  dropOff: {
    color: theme.palette.primary.main,
    marginTop: '1rem',
    width: '50%',
    borderRadius: '0%',
  },
}));

export default useStyles;
