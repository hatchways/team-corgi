import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  gridContainer: {
    margin: '5% 15% 0% 15%',
    padding: '1%',
    justifyContent: 'center',
  },
  formInputField: {
    marginBottom: '15px',
  },
  heading: { fontWeight: 'bold', marginLeft: '35%', marginBottom: '5%', marginTop: '1%' },
  formLabel: {
    fontWeight: 'bold',
    fontSize: '14px',
    marginTop: '12px',
    textAlign: 'end',
    paddingRight: '10px',
    textTransform: 'uppercase',
  },
  formSelectField1: {
    marginBottom: '15px',
    width: '30%',
    height: '35px',
  },
  formSelectField2: {
    marginBottom: '15px',
    width: '90%',
    height: '35px',
  },
  buttonPhone: {
    float: 'right',
  },
  submitButton: {
    marginLeft: '45%',
  },
}));

export default useStyles;
