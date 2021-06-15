import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    margin: theme.spacing(3, 2, -1),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    marginTop: 49,
    fontSize: 16,
    backgroundColor: '#primary',
    fontWeight: 'bold',
  },
}));

export default useStyles;
