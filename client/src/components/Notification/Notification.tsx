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
            {notification.type === 'message' && (
              <Button>
                {notification.sender.firstName} {notification.sender.lastName} has sent you a message
              </Button>
            )}
            {notification.type === 'request' && (
              <Button>
                {notification.sender.firstName} {notification.sender.lastName} has requested your service
              </Button>
            )}
            {notification.type === 'accept' && (
              <Button>
                {notification.sender.firstName} {notification.sender.lastName} has accepted your service
              </Button>
            )}
          </Box>
        ))}
      {(notifications === undefined || notifications?.length == 0) && (
        <Box>
          <Button>No notifications</Button>
        </Box>
      )}
    </>
  );
};

export default Notification;
