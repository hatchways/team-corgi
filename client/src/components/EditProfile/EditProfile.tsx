import { TextField, Grid, Typography, Button, CircularProgress } from '@material-ui/core';
import useStyles from './useStyles';
import { useSnackBar } from '../../context/useSnackbarContext';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import editProfile from '../../helpers/APICalls/editProfile';
import createProfile from '../../helpers/APICalls/createProfile';
import { Profile } from '../../interface/Profile';

interface Props {
  _id?: string;
  profile?: Profile;
}

const EditProfile = (props: Props): JSX.Element => {
  const classes = useStyles();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { firstName, lastName, email, phone, city, description }: Profile,
    { setSubmitting }: FormikHelpers<Profile>,
  ) => {
    const _id = props._id;
    if (!_id) {
      setSubmitting(false);
      updateSnackBarMessage('Could not find profile');
      return;
    }
    if (!props.profile) {
      const profile = { _id, firstName, lastName, email, phone, city, description };
      createProfile(profile).then((data) => {
        if (data.error) {
          setSubmitting(false);
          updateSnackBarMessage(data.error.message);
        } else if (data.success) {
          setSubmitting(false);
          alert('Created a new Profile!');
        } else {
          // For an unknown issue
          console.error({ data });
          setSubmitting(false);
          updateSnackBarMessage('An unexpected error occurred. Please try again');
        }
      });
    } else {
      const profile = { firstName, lastName, email, phone, city, description };
      editProfile(_id, profile).then((data) => {
        if (data.error) {
          setSubmitting(false);
          updateSnackBarMessage(data.error.message);
        } else if (data.success) {
          setSubmitting(false);
          alert('Profile updated');
        } else {
          // For an unknown issue
          console.error({ data });

          setSubmitting(false);
          updateSnackBarMessage('An unexpected error occurred. Please try again');
        }
      });
    }
  };
  return (
    <Grid container>
      <Typography variant="h3" className={classes.heading}>
        Edit Profile
      </Typography>
      <Formik
        initialValues={{
          firstName: props.profile?.firstName,
          lastName: props.profile?.lastName,
          email: props.profile?.email,
          phone: props.profile?.phone,
          city: props.profile?.city,
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required('First name is required').max(20, 'First name is too long'),
          lastName: Yup.string().required('Last name is required').max(20, 'Last name is too long'),
          email: Yup.string().required('Email is required').email('Email is not valid'),
          phone: Yup.number().notRequired(),
          city: Yup.string().notRequired(),
        })}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Grid container>
              <Grid item xs={2} md={2} />
              <Grid item xs={2} md={2} className={classes.formLabel}>
                first name
              </Grid>
              <Grid item xs={6} md={6} className={classes.formInputField}>
                <TextField
                  id="firstName"
                  name="firstName"
                  autoComplete="First Name"
                  helperText={touched.firstName ? errors.firstName : ''}
                  error={touched.firstName && Boolean(errors.firstName)}
                  value={values.firstName}
                  onChange={handleChange}
                  variant="outlined"
                  placeholder="First Name"
                  fullWidth
                  size={'small'}
                />
              </Grid>
              <Grid item xs={2} md={2} />

              <Grid item xs={2} />
              <Grid item xs={2} className={classes.formLabel}>
                last name
              </Grid>
              <Grid item xs={6} className={classes.formInputField}>
                <TextField
                  id="lastName"
                  name="lastName"
                  autoComplete="Last Name"
                  helperText={touched.lastName ? errors.lastName : ''}
                  error={touched.lastName && Boolean(errors.lastName)}
                  value={values.lastName}
                  onChange={handleChange}
                  size="small"
                  variant="outlined"
                  placeholder="Last Name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={2} />

              <Grid item xs={2} />
              <Grid item xs={2} className={classes.formLabel}>
                email address
              </Grid>
              <Grid item xs={6} className={classes.formInputField}>
                <TextField
                  id="email"
                  name="email"
                  autoComplete="email"
                  helperText={touched.email ? errors.email : ''}
                  error={touched.email && Boolean(errors.email)}
                  value={values.email}
                  onChange={handleChange}
                  size="small"
                  variant="outlined"
                  placeholder="johndoe@gmail.com"
                  fullWidth
                />
              </Grid>
              <Grid item xs={2} />

              <Grid item xs={2} />
              <Grid item xs={2} className={classes.formLabel}>
                phone number
              </Grid>
              <Grid item xs={6} className={classes.formInputField}>
                <Button color="primary" variant="outlined" className={classes.buttonPhone}>
                  Add a phone number
                </Button>
              </Grid>
              <Grid item xs={2} />

              <Grid item xs={2} />
              <Grid item xs={2} className={classes.formLabel}>
                city you live in
              </Grid>
              <Grid item xs={6} className={classes.formInputField}>
                <TextField
                  id="city"
                  name="city"
                  autoComplete="city"
                  helperText={touched.city ? errors.city : ''}
                  error={touched.city && Boolean(errors.city)}
                  value={values.city}
                  onChange={handleChange}
                  size="small"
                  variant="outlined"
                  placeholder="Toronto"
                  fullWidth
                />
              </Grid>
              <Grid item xs={2} />

              <Grid item xs={1}></Grid>
              <Grid item xs={3} className={classes.formLabel}>
                describe yourself
              </Grid>
              <Grid item xs={6} className={classes.formInputField}>
                <TextField
                  id="description"
                  name="description"
                  helperText={touched.description ? errors.description : ''}
                  error={touched.description && Boolean(errors.description)}
                  value={values.description}
                  onChange={handleChange}
                  size="small"
                  variant="outlined"
                  multiline
                  rows={4}
                  placeholder="About you"
                  fullWidth
                />
              </Grid>
              <Grid item xs={2} />
            </Grid>
            <Button color="primary" size="large" type="submit" variant="contained" className={classes.submitButton}>
              {isSubmitting ? <CircularProgress size={23} style={{ color: 'white' }} /> : 'Submit'}
            </Button>
          </form>
        )}
      </Formik>
    </Grid>
  );
};

export default EditProfile;
