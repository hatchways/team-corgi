import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  accept: {
    color: 'green',
    border: '1px solid green',
    margin: '5px',
  },
  client: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  decline: {
    color: 'red',
    border: '1px solid red',
    margin: '5px',
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    margin: '10px',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: '14px',
  },
  pic: {
    margin: '10px',
  },
  root: {
    margin: '5%',
  },
  status: {
    fontSize: '12px',
    color: 'rgb(125, 125, 125)',
    textTransform: 'uppercase',
    marginRight: '15px',
  },
  time: {
    fontWeight: 'bold',
    padding: '9px',
  },
}));

export default useStyles;
