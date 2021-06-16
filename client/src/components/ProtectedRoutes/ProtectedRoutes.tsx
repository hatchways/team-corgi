import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAuth } from '../../context/useAuthContext';

interface RouteProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
  path?: string;
  exact?: boolean;
}

export default function ProtectedRoute({ component: Component, ...rest }: RouteProps): JSX.Element {
  const { loggedInUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (loggedInUser) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
}
