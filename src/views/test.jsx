import React from "react";
import { renderRoutes } from "react-router-config";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

const GrandChild = ({ someProp }) => {
  console.log(someProp, "someProp");
  return (
    <div>
      <h3>Grand Child</h3>
      <div>{someProp}</div>
    </div>
  );
};

const Root = ({ route }) => (
  <div>
    <h1>Root</h1>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
);

const Home = ({ route }) => (
  <div>
    <h2>Home</h2>
  </div>
);

const Child = ({ route }) => {
  console.log(route, "route");

  return (
    <div>
      <h2>Child</h2>
      {/* child routes won't render without this */}
      {renderRoutes(route.routes, {
        someProp: "these extra props are optional"
      })}
    </div>
  );
};

const routes = [
  {
    component: Root,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      },
      {
        path: "/child",
        component: Child,
        routes: [
          {
            path: "/child/grand-child",
            component: GrandChild
          }
        ]
      }
    ]
  }
];

ReactDOM.render(
  <BrowserRouter>
    {/* kick it all off with the root route */}
    {renderRoutes(routes)}
  </BrowserRouter>,
  document.getElementById("root")
);
