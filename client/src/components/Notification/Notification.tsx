import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useAuth } from '../../context/useAuthContext';

const Notification = (): JSX.Element => {
  const { notifications } = useAuth();

  return (
    <>
      {notifications &&
        notifications.map((notification, index) => (
          <Box p={1} key={index}>
            <Button>
              {notification.sender === null ? 'unknown' : notification.sender.firstName} has {notification.type}ed your
              service
            </Button>
          </Box>
        ))}
      {notifications === undefined && (
        <Box>
          <Button>No notifications</Button>
        </Box>
      )}
    </>
  );
};

export default Notification;
