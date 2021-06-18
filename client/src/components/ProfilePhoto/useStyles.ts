import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  buttonDelete: {
    margin: '40px',
  },
  buttonUpload: {
    padding: '14px',
    width: '70%',
  },
  displayPic: {
    height: '100px',
    width: '100px',
  },
  explanation: {
    color: 'grey',
    padding: '20px 0px 40px 0px',
    fontSize: 12,
    width: '50%',
    textAlign: 'center',
  },
  main: {
    height: '100%',
    minHeight: '500px',
  },
  root: {
    margin: '5% 15% 0% 15%',
    minHeight: '500px',
  },
  subMain: {
    width: '43%',
  },
  textDelete: {
    color: 'grey',
    fontSize: 12,
    paddingLeft: '7px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bolder',
    padding: '40px',
  },
}));

export default useStyles;
