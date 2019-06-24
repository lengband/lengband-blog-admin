import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { SnackbarProvider } from "notistack";
// import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import renderRoutes from "@/components/renderRoutes";
import { Provider } from "mobx-react";
import stores from "./store";
import routes from "./routes/routes";
import { snackbarConfig } from "@/constants";
import "./styles/index.scss";
// import Test from './views/test'

function App() {
  return (
    <Provider {...stores}>
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
