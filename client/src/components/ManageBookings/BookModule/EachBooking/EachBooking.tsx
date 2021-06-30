import { Grid, CircularProgress, Typography, Avatar, Button } from '@material-ui/core';
import useStyles from './useStyles';
import { Request } from '../../../../interface/Request';

interface Props {
  className?: string;
  request: Request;
}

const EachBooking = ({ className, request }: Props): JSX.Element => {
  const classes = useStyles();

  const handleAccept = (accept: boolean) => {
    console.log(accept);
  };
  if (!request.name) return <CircularProgress />;
  const getStatus = () => {
    if (!request.offer) return;
    if (request.accepted == null) {
      return (
        <Grid>
          <Button size={'small'} className={classes.accept} onClick={() => handleAccept(true)}>
            Accept
          </Button>
          <Button size={'small'} className={classes.decline} onClick={() => handleAccept(false)}>
            Decline
          </Button>
        </Grid>
      );
    }
    return <Typography className={classes.status}>{request.accepted ? 'Accepted' : 'Declined'}</Typography>;
  };

  return (
    <Grid className={className}>
      <Typography className={classes.time}>{`${request.date}, ${
        request.startTime > 12 ? request.startTime - 12 : request.startTime
      }-${request.endTime > 12 ? request.endTime - 12 + ' PM' : request.endTime + ' AM'}`}</Typography>
      <Grid item className={classes.main}>
        <Grid className={classes.client}>
          <Avatar src={request.pic} className={classes.pic} />
          <Typography className={classes.name}>{request.name}</Typography>
        </Grid>
        <Grid>{getStatus()}</Grid>
      </Grid>
    </Grid>
  );
};

export default EachBooking;
