import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Translate } from '@material-ui/icons';
import { relative } from 'path';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainCard: {
      margin: '1rem',
      position: 'relative',
      flex: 1,
      marginLeft: '2rem',
      marginRight: '2rem',
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
      flex: 1,
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
    cardContent: {},
    contentTypography: {
      fontWeight: 700,
      marginBottom: '1rem',
    },
    profileText: {
      marginBottom: '30px',
    },
    gridList: {
      flexWrap: 'nowrap',
      overflow: 'hidden',
    },
    img: {
      height: '160px',
      width: '160px',
      borderRadius: '5%',
    },
  }),
);

export default useStyles;
