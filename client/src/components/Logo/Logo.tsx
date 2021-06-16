import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import PetsIcon from '@material-ui/icons/Pets';

const Logo = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.logoBox}>
      <PetsIcon className={classes.logoIcon} />
      <Typography className={classes.logoText}>LovingSitter.</Typography>
    </Box>
  );
};

export default Logo;
