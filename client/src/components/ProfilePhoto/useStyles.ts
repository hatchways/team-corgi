import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    margin: '5% 15% 0% 15%',
    minHeight: '500px',
  },
  main: {
    height: '100%',
    minHeight: '500px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bolder',
    padding: '40px',
  },
  displayPic: {
    height: '100px',
    width: '100px',
  },
  buttonUpload: {
    padding: '14px',
    width: '70%',
  },
  explanation: {
    color: 'grey',
    padding: '20px 0px 40px 0px',
    fontSize: 12,
    width: '50%',
    textAlign: 'center',
  },
  buttonDelete: {
    margin: '40px',
  },
  textDelete: {
    color: 'grey',
    fontSize: 12,
    paddingLeft: '7px',
  },
}));

export default useStyles;
