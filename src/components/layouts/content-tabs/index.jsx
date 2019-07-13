import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Tabs } from "@material-ui/core";
import { observer, inject } from "mobx-react";
import LinkTab from "./LinkTab";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    marginTop: 64,
    height: "max-content"
  },
  tab: {
    "&:hover": {
      color: theme.palette.primary.light
    }
  }
});

@inject("tabStore")
@inject("menuStore")
@withStyles(styles)
@observer
export default class ContentTabs extends React.Component {
  constructor(props) {
    super(props);
    this.tabClick = this.tabClick.bind(this);
  }

  componentDidMount() {
    this.props.tabStore.routerHistory = this.props.history;
  }

  tabClick(menuObj) {
    this.props.tabStore.setCurrent(menuObj);
  }

  render() {
    const { classes } = this.props;
    const { urlHistory, currentRoute } = this.props.tabStore;
    const activeIndex = urlHistory.findIndex(
      value => value.name === currentRoute.name
    );

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={activeIndex}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            {urlHistory.map(menu => (
              <LinkTab
                key={menu.name}
                menu={menu}
                classes={classes}
                tabClick={this.tabClick}
                tabStore={this.props.tabStore}
                urlHistory={urlHistory}
              />
            ))}
          </Tabs>
        </AppBar>
      </div>
    );
  }
}
