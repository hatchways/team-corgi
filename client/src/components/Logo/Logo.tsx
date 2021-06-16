import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import PetsIcon from '@material-ui/icons/Pets';

const Logo = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container justify="flex-start" alignItems="center" direction="row" wrap="nowrap">
      <Grid item>
        <PetsIcon className={classes.logoIcon} />
      </Grid>
      <Grid item>
        <Typography className={classes.logoText}>LovingSitter.</Typography>
      </Grid>
    </Grid>
  );
};

export default Logo;
