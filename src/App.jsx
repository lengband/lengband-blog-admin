import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import renderRoutes from "@/components/renderRoutes";
import { Provider } from "mobx-react";
import Store from "./store/index";
import routes from "./routes/routes";
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
          <Switch>{renderRoutes({ routes })}</Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
