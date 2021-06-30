import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useEffect, useState } from 'react';
import { INotification } from '../../interface/Notification';
import { User } from '../../interface/User';

interface Props {
  username: User;
}

const Notification = ({ username }: Props): JSX.Element => {
  const [notifications, setNotifications] = useState<INotification[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3001/notifications/all/60c7d2fbdf1550572c6660d2`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setNotifications(result.notifications);
        console.log(result.notifications);
      });
  }, [username]);

  return (
    <>
      {console.log(notifications)}
      {notifications &&
        notifications.map((notification, index) => (
          <Box p={1} key={index}>
            <Button>
              {notification.sender} has {notification.type}ed your service
            </Button>
          </Box>
        ))}
    </>
  );
};

export default Notification;
