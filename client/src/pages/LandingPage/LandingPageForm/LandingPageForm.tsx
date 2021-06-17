import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import { CircularProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

interface Props {
  handleSubmit: (
    {
      location,
      dropIn,
      dropOff,
    }: {
      location: string;
      dropIn: string;
      dropOff: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      location: string;
      dropIn: string;
      dropOff: string;
    }>,
  ) => void;
}

const LandingPageForm = ({ handleSubmit }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        location: '',
        dropIn: '',
        dropOff: '',
      }}
      validationSchema={Yup.object().shape({
        location: Yup.string().required('Location is required.'),
        dropIn: Yup.string().required('Drop In date is required'),
        dropOff: Yup.string().required('Drop Off date is required'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Typography className={classes.label}>WHERE</Typography>
          <TextField
            id="location"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="location"
            placeholder="Anywhere"
            autoFocus
            helperText={touched.location ? errors.location : ''}
            error={touched.location && Boolean(errors.location)}
            value={values.location}
            onChange={handleChange}
            variant="outlined"
          />
          <Typography className={classes.label}>WHERE</Typography>
          <Grid container direction="row" wrap="nowrap" justify="space-evenly">
            <TextField
              variant="outlined"
              className={classes.dropIn}
              id="dropIn"
              name="dropIn"
              type="date"
              value={values.dropIn}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              fullWidth
              className={classes.dropOff}
              id="dropOff"
              name="dropOff"
              type="date"
              value={values.dropOff}
              onChange={handleChange}
            />
          </Grid>
          <Box textAlign="center">
            <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
              {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'FIND MY DOG SITTER'}
            </Button>
          </Box>
          <div style={{ height: 95 }} />
        </form>
      )}
    </Formik>
  );
};

export default LandingPageForm;
