import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Translate } from '@material-ui/icons';
import { relative } from 'path';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainCard: {
      height: '400px',
      width: '275px',
      display: 'flex',
    },
    grid: {
      flex: 1,
    },
    paper: {
      flex: 1,
      padding: '20px',
    },
    form: {
      flex: 1,
    },
    price: {
      textAlign: 'center',
    },
    stars: {
      marginTop: '5px',
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '40px',
    },
    dropInLabel: {
      fontSize: 14,
      fontWeight: 700,
    },
    dropIn: {
      display: 'flex',
      marginBottom: '25px',
    },
    dropInText: {

      borderColor: 'gray',
    },
    dropOffLabel: {
      fontWeight: 700,
    },
    dropOff: {
      display: 'flex',
    },
    buttonGrid: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '30px',
    },
    button: {
      color: 'white',
      backgroundColor: theme.palette.primary.main,
      borderRadius: '0px',
      height: '45px',
      width: '160px',
    },
  }),
);

export default useStyles;
