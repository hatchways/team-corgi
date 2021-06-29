import { Grid, Typography, Paper, Box } from '@material-ui/core';
// import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import Header from './Header';
import Content from './Content';
import { makeStyles } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { red } from '@material-ui/core/colors';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
  header: {
    margin: '50px',
  },
  typography: {
    padding: '50px',
  },
  searchBar: {
    paddingBottom: '50px',
    width: '100%',
    maxWidth: '35rem',
  },
  paper: {},
  inputBox: {
    display: 'flex',
    alignItems: 'center',
  },
  inputBoxContainer: {
    // width: "22rem"
  },
  dataRangeContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
  },
  input: {
    border: 'none',
    width: '100%',
    padding: '16px 0',
    borderRight: '1px solid rgba(0, 0, 0, 0.12)',
    '&:focus': {
      outline: 'none',
    },
  },
  searchIcon: {
    margin: '0 5px',
    color: red[500],
  },
  dateText: {
    fontSize: '14px',
  },
  dateIconsContainer: {
    padding: '0 8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIconContainer: {
    marginLeft: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Dashboardcomponent() {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        <Header className={classes.header} />
      </Grid>
      <Grid item container direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h3" className={classes.typography}>
            Your search results
          </Typography>
        </Grid>
        <Grid item className={classes.searchBar}>
          <Paper variant="outlined" className={classes.paper} elevation="1">
            <Grid container direction="row" className={classes.inputBoxContainer} justify="center">
              <Grid xs={7} item className={classes.inputBox}>
                <SearchIcon className={classes.searchIcon} />
                <input className={classes.input} placeholder="Toronto, Ontario" />
              </Grid>
              <Grid item className={classes.dataRangeContainer} xs={5}>
                <Box className={classes.dateIconsContainer}>
                  <DateRangeIcon />
                </Box>
                <Typography className={classes.dateText} variant={'body1'}>
                  16-17 june 2019
                </Typography>
                <Box className={classes.closeIconContainer}>
                  <CloseIcon />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item xs={1} md={2} />
        <Grid item xs={10} md={8}>
          <Grid item container>
            <Content />
          </Grid>
        </Grid>
        <Grid xs={1} md={2} />
      </Grid>
    </Grid>
  );
}
