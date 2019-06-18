import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

const authPath = "/login";

const renderComponent = ({ route, authed, extraProps }) => {
  return props => {
    if (!route.requiresAuth || authed || route.path === authPath) {
      return <route.component {...props} {...extraProps} route={route} />;
    }
    return (
      <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
    );
  };
};

// const renderRoutes = ({ routes, authed, authPath = '/login', extraProps = {}, switchProps = {} }) => routes ? (
const renderRoutes = ({ routes, switchProps = {}, ...rest }) =>
  routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={renderComponent({ ...rest, route })}
        />
      ))}
    </Switch>
  ) : null;

export default renderRoutes;
