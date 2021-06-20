import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Translate } from '@material-ui/icons';
import { relative } from 'path';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainCard: {
      flex: 1,
    },
    price: {
      marginTop: '2rem',
    },
    stars: {
      flex: 1,
    },
    dropIn: {
      flex: 1,
    },
    dropOff: {
      flex: 1,
    },
    button: {
      flex: 1,
    },
  }),
);

export default useStyles;
