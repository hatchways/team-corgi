import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '500px',
    flexWrap: 'wrap',
    display: 'flex',
    flexDirection: 'row',
    padding: '5% 10% 0% 10%',
  },
  searchContainer: {
    flexDirection: 'column',
    marginTop: '5%',
  },
  searchTitle: {
    fontWeight: 'bold',
    fontSize: '20px',
  },
  searchBox: {
    border: '1px solid rgb(225, 225, 225)',
  },
  profileContainer: {
    padding: '2%',
    width: '100%',
  },
}));

export default useStyles;
