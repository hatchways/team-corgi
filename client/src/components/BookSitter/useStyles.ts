import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Translate } from '@material-ui/icons';
import { relative } from 'path';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
    mainCard: {
      margin: '1rem',
      height: '400px',
      width: '275px',
      display: 'flex',
      marginLeft: '2rem',
      marginRight: '2rem',
      padding: '65px',
      boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 10px 0px;',
    },
    grid: {
      flex: 1,
    },
    form: {
      flex: 1,
    },
    price: {
      textAlign: 'center',
      paddingBottom: '20px',
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
