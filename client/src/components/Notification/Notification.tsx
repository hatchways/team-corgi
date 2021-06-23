import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import React, { useEffect } from 'react';

const Notification = (): JSX.Element => {
  const notifications = [
    'A has requested your service',
    'B has accepted your service',
    'C has accepted your request',
    'D has requested your service',
  ];
  useEffect(() => {
    axios.get(`http://localhost:3001/notifications/all/60d10854eefb984ce4f30523`).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <>
      {notifications.map((notification, index) => (
        <Box p={1} key={index}>
          <Button>{notification}</Button>
        </Box>
      ))}
    </>
  );
};

export default Notification;
