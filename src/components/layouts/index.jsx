import React from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import renderRoutes from "@/components/renderRoutes";
import { Redirect } from "react-router-dom";

import ToolBar from "./ToolBar";
import SliderMenu from "./SliderMenu";
import ContentTabs from "./ContentTabs";
import { drawerWidth } from "@/constants";

const styles = theme => {
  return {
    root: {
      display: "flex"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap"
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1
      }
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
      ...theme.mixins.toolbar
    },
    contentWrapper: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    contentWrapperMin: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    contentWrapperMax: {
      width: `calc(100% - ${theme.spacing(7) + 1}px)`,
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${theme.spacing(9) + 1}px)`
      }
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  };
};

@withStyles(styles)
class Layouts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }

  handleDrawerOpen() {
    this.setState({
      open: true
    });
  }

  handleDrawerClose() {
    this.setState({
      open: false
    });
  }

  render() {
    const { open } = this.state;
    const { classes, route, location } = this.props;
    const RouterMaps = renderRoutes({ routes: route.routes });

    return (
      <div className={classes.root}>
        <ToolBar open={open} handleDrawerOpen={this.handleDrawerOpen} />
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })
          }}
          open={open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <SliderMenu locationPath={location.pathname} />
        </Drawer>
        <div
          className={clsx("d-flex", "flex-column", classes.contentWrapper, {
            [classes.contentWrapperMin]: open,
            [classes.contentWrapperMax]: !open
          })}
        >
          <ContentTabs history={this.props.history} />
          <main className={classes.content}>
            {location.pathname === "/" ? (
              <Redirect to={route.redirectTo} />
            ) : null}
            {RouterMaps}
          </main>
        </div>
      </div>
    );
  }
}

export default Layouts;
