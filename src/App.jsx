import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { renderRoutes } from "react-router-config";
import { Provider } from "mobx-react";
import Store from "./store/index";
import routes from "./routes/routes";
import Router from "./routes/Routers";
import Layouts from "./components/layouts/index";
import routes1 from "@/routes/routes1";
import "./styles/index.css";
// import Test from './views/test'

const store = new Store();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <CssBaseline />
        {/* <Test /> */}
        <BrowserRouter>
          <Router />
          <Layouts />
          {/* {renderRoutes(routes)} */}
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
