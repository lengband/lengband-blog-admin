import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import renderRoutes from "@/components/renderRoutes";
import { Provider } from "mobx-react";
import stores from "./store";
import routes from "./routes/routes";
import { snackbarConfig, globalTheme } from "@/constants";
import "./styles/index.scss";
// import Test from "./views/test";

function App() {
  return (
    <Provider {...stores}>
      <SnackbarProvider {...snackbarConfig}>
        <CssBaseline />
        {/* <Test /> */}
        <MuiThemeProvider theme={globalTheme}>
          <BrowserRouter>
            <Switch>{renderRoutes({ routes })}</Switch>
          </BrowserRouter>
        </MuiThemeProvider>
      </SnackbarProvider>
    </Provider>
  );
}

export default App;
