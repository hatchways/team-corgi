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
    fontWeight: 'bold',
  },
  pic: {
    margin: '10px',
  },
  root: {
    margin: '5%',
  },
  status: {
    fontSize: '11px',
    fontWeight: 'bold',
    color: 'rgb(125, 125, 125)',
    textTransform: 'uppercase',
    marginRight: '30px',
  },
  time: {
    fontWeight: 'bold',
    fontSize: '15px',
    padding: '13px 10px 5px 18px',
  },
}));

export default useStyles;
