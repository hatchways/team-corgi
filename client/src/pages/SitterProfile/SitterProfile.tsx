import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';
import SitterProfile from '../../components/SitterProfile/SitterProfile';
import BookSitter from '../../components/BookSitter/BookSitter';

export default function Register(): JSX.Element {
  const classes = useStyles();
  //const { updateLoginContext } = useAuth();
  //const { updateSnackBarMessage } = useSnackBar();

  return (
    <Grid container direction="row">
      <Grid item className={classes.profile}>
        <SitterProfile />
      </Grid>
      <Grid item className={classes.book}>
        <BookSitter />
      </Grid>
    </Grid>
  );
}
