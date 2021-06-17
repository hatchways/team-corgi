import { makeStyles, Theme } from '@material-ui/core';
const drawerWidth = '20%';
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#FAFAFA',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    border: '0',
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#fafafa',
    border: '0',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  listItem: {
    marginLeft: '30%',
  },
}));

export default useStyles;
