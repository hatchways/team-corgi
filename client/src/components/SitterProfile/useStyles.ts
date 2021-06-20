import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Translate } from '@material-ui/icons';
import { relative } from 'path';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainCard: {
      margin: '1rem',
      position: 'relative',
      flex: 1,
    },
    cardMedia: {
      objectFit: 'cover',
      minHeight: '300px',
      flex: 1,
    },
    avatarPaper: {
      position: 'absolute',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
      flexShrink: 1,
    },
    firstGridItem: {
      marginTop: '4rem',
    },
    gridItem: {
      textAlign: 'center',
    },
    avatar: {
      width: '6rem',
      height: '6rem',
      margin: '4px',
    },
    name: {
      fontWeight: 700,
      fontSize: 24,
    },
    subtitle: {
      fontSize: 16,
    },
    location: {
      color: 'gray',
      marginTop: '2rem',
    },
    cardContent: {
      margin: '2rem',
    },
    contentTypography: {
      fontWeight: 700,
      marginBottom: '1rem',
    },
    imageDrawer: {
      display: 'flex',
    },
  }),
);

export default useStyles;
