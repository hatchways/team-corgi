import { Grid, Paper } from '@material-ui/core';
import Sidebar from '../Sidebar/SideBar';
import useStyles from './useStyles';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY =
  'pk_test_51J7pChILSJYRC5moahGV0sLHl8dDiKLI3jjnBt5LPb7kx9jAsG0zGt8FnQLcL3nDKEIbfsReSBj6TLRdWncJmwZC00KsJ3gS5Z';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Payment = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={2}>
        <Sidebar></Sidebar>
      </Grid>
      <Grid item xs={10}>
        <Paper className={classes.root} elevation={2}>
          <Elements stripe={stripeTestPromise}>
            <PaymentForm />
          </Elements>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Payment;
