import React, { useContext } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { UserContext } from '../context/UserContext';

const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  component: Component,
  redirect,
  ...rest
}) => {
  const { user } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user?.user) return <Component {...rest} {...props} />;
        else return <Redirect to={redirect!} />;
      }}
    />
  );
};

PrivateRoute.defaultProps = {
  redirect: '/login',
};

interface IPrivateRouteProps extends RouteProps {
  redirect?: string;
  component: React.FC;
}

export default PrivateRoute;

// https://dev.to/mychal/protected-routes-with-react-function-components-dh
