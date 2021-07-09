import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import { CircularProgress } from '@material-ui/core';

interface Props {
  handleSubmit: (
    {
      username,
      email,
      password,
      firstname,
      lastname,
    }: {
      email: string;
      password: string;
      username: string;
      firstname: string;
      lastname: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      email: string;
      password: string;
      username: string;
      firstname: string;
      lastname: string;
    }>,
  ) => void;
}

const SignUpForm = ({ handleSubmit }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        username: '',
        firstname: '',
        lastname: '',
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required('Username is required').max(40, 'Username is too long'),
        email: Yup.string().required('Email is required').email('Email is not valid'),
        password: Yup.string()
          .required('Password is required')
          .max(100, 'Password is too long')
          .min(6, 'Password too short'),
        firstname: Yup.string().required('First Name is required').max(256, 'First Name is too long'),
        lastname: Yup.string().required('Last Name is required').max(256, 'Last name is too long'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Typography className={classes.label}>USERNAME</Typography>
          <TextField
            id="username"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="username"
            autoComplete="username"
            placeholder="Your username"
            autoFocus
            helperText={touched.username ? errors.username : ''}
            error={touched.username && Boolean(errors.username)}
            value={values.username}
            onChange={handleChange}
            variant="outlined"
          />
          <Typography className={classes.label}>EMAIL ADDRESS</Typography>
          <TextField
            id="email"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="email"
            autoComplete="email"
            placeholder="Your email"
            helperText={touched.email ? errors.email : ''}
            error={touched.email && Boolean(errors.email)}
            value={values.email}
            onChange={handleChange}
            variant="outlined"
          />
          <Typography className={classes.label}>PASSWORD</Typography>
          <TextField
            id="password"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            type="password"
            autoComplete="current-password"
            placeholder="Your password"
            helperText={touched.password ? errors.password : ''}
            error={touched.password && Boolean(errors.password)}
            value={values.password}
            onChange={handleChange}
            variant="outlined"
          />
          <Typography className={classes.label}>FIRST NAME</Typography>
          <TextField
            id="firstname"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="firstname"
            autoComplete="firstname"
            placeholder="First Name"
            autoFocus
            helperText={touched.firstname ? errors.firstname : ''}
            error={touched.firstname && Boolean(errors.firstname)}
            value={values.firstname}
            onChange={handleChange}
            variant="outlined"
          />
          <Typography className={classes.label}>LAST NAME</Typography>
          <TextField
            id="lastname"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="lastname"
            autoComplete="lastname"
            placeholder="Last Name"
            autoFocus
            helperText={touched.lastname ? errors.lastname : ''}
            error={touched.lastname && Boolean(errors.lastname)}
            value={values.lastname}
            onChange={handleChange}
            variant="outlined"
          />

          <Box textAlign="center">
            <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
              {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Create'}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default SignUpForm;
