import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

const ConditionalRoute: React.FC<IConditionalRouteProps> = ({
  component: Component,
  condition,
  redirect,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (condition) return <Component {...rest} {...props} />;
        else return <Redirect to={redirect!} />;
      }}
    />
  );
};

ConditionalRoute.defaultProps = {
  redirect: '/signup',
  condition: true,
};

interface IConditionalRouteProps extends RouteProps {
  redirect?: string;
  component: React.FC;
  condition?: boolean;
}

export default ConditionalRoute;

// https://dev.to/mychal/protected-routes-with-react-function-components-dh
