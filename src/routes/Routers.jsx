import React from "react";
import routes from "./routes";
import { Switch, Route } from "react-router-dom";

export default function Routers() {
  return (
    <Switch>
      {routes.map(({ name, path, meta = {}, component }) => (
        <Route
          path={path}
          exact={!!meta.exact}
          component={component}
          key={name}
        />
      ))}
    </Switch>
  );
}
