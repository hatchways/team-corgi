import { Grid, Paper } from '@material-ui/core';
import Sidebar from '../Sidebar/SideBar';
import useStyles from './useStyles';

const Availability = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={2}>
        <Sidebar></Sidebar>
      </Grid>
      <Grid item xs={10}>
        <Paper className={classes.root} elevation={2}>
          <h1>Availability</h1>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Availability;
