import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { UserContext } from '../context/UserContext';

const PrivateRoute: React.FC<any> = ({
  component: Component,
  ...rest
}) => {
  const { user } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user?.user) return <Component {...rest} {...props} />;
        else return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;

// https://dev.to/mychal/protected-routes-with-react-function-components-dh
