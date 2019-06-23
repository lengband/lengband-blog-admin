import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { SnackbarProvider } from "notistack";
// import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import renderRoutes from "@/components/renderRoutes";
import { Provider } from "mobx-react";
import Store from "./store/index";
import routes from "./routes/routes";
import { snackbarConfig } from "@/constants";
import "./styles/index.scss";
// import Test from './views/test'

const store = new Store();

function App() {
  return (
    <Provider store={store}>
      <SnackbarProvider {...snackbarConfig}>
        <CssBaseline />
        {/* <Test /> */}
        <BrowserRouter>
          <Switch>{renderRoutes({ routes })}</Switch>
        </BrowserRouter>
      </SnackbarProvider>
    </Provider>
  );
}

export default App;
