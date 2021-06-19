import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      flex: 1,
      justifyContent: 'flex-start',
      alignContent: 'stretch',
    },
    housePicture: {
      flex: 1,
      objectFit: 'cover',
      maxHeight: '40%',
    },
    displayPic: {
      alignSelf: 'center',
      marginTop: '-4rem',
      width: '8rem',
      height: '8rem',
      boxShadow: '3',
      border: '4px solid white',
    },
    name: {
      fontWeight: 700,
      textAlign: 'center',
    },
    gridItem: {
        marginTop: '2rem',
    },
    subtitle: {
        fontSize: '16px',
        textAlign: 'center',
        marginTop: '-1rem',
    },
    location: {
        color: '#b0acac',
        textAlign: 'center',
    },
    locationIcon: {
        color: theme.palette.primary.main,
        marginRight: '1rem',
    },
    aboutMe: {
        fontWeight: 700,
    },
    aboutMeParagraph: {
        fontSize: '16px',
    }
  }),
);

export default useStyles;
