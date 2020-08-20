import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import routes from './routesConfig';
import { RoutesInterface } from './Routes.interface';
import { AppLayout } from '../components/AppLayout';

const AuthComponent: FC<any> = (props) => {
  const { component: Component, authenticated, allowedRoles, showLayout } = props;
  const auth = { isLoggedIn: true };
  const user = { role: 'all' };

  if (authenticated && !auth.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <div>You are not authorized to access this page</div>;
  }

  if (showLayout) {
    return (
      <AppLayout>
        <Component {...props} />
      </AppLayout>
    );
  }
  return <Component {...props} />;
};

const Routes: FC<any> = () => (
  <Switch>
    {routes.map((each: RoutesInterface, index: number) => (
      <Route key={index} exact path={each.path} component={(props: any) => <AuthComponent {...props} {...each} />} />
    ))}
  </Switch>
);

export default Routes;
