import { Grid, CircularProgress, Typography, Avatar, Button } from '@material-ui/core';
import useStyles from './useStyles';
import { Request } from '../../../../interface/Request';

interface Props {
  className?: string;
  request: Request;
  offer?: boolean;
  handleAccept?: (arg1: boolean, arg2: number) => void;
  id: number;
}

const EachBooking = ({ className, request, offer, handleAccept, id }: Props): JSX.Element => {
  const classes = useStyles();
  const month = request.day.toLocaleString('default', { month: 'long' });
  const stringDate = `${request.day.getDate()} ${month} ${request.day.getFullYear()}`;
  if (!request.day) return <CircularProgress />;
  const getStatus = () => {
    if (!offer) return;
    if (request.accepted == null && handleAccept) {
      return (
        <Grid>
          <Button size={'small'} className={classes.accept} onClick={() => handleAccept(true, id)}>
            Accept
          </Button>
          <Button size={'small'} className={classes.decline} onClick={() => handleAccept(false, id)}>
            Decline
          </Button>
        </Grid>
      );
    }
    return <Typography className={classes.status}>{request.accepted ? 'Accepted' : 'Declined'}</Typography>;
  };

  return (
    <Grid className={className}>
      <Typography className={classes.time}>{`${stringDate}, ${
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
