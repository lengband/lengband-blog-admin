import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab, Box, Zoom } from "@material-ui/core";
import { observer, inject } from "mobx-react";
import CancelIcon from "@material-ui/icons/CancelRounded";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    marginTop: 64,
    height: "max-content"
  },
  tab: {
    outline: "none!important",
    "&:hover": {
      color: theme.palette.primary.light
    }
  }
});

const tabStyles = makeStyles(theme => ({
  cancel: {
    position: "absolute",
    right: 0,
    top: 0,
    color: theme.palette.primary.light,
    cursor: "pointer"
  }
}));

function LinkTab(props) {
  const tabClasses = tabStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handlePopoverOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handlePopoverClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);

  const { menu, classes, tabClick } = props;
  return (
    <Box
      position="relative"
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      <Tab
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        className={classes.tab}
        onClick={() => tabClick(menu)}
        label={menu.label}
      />
      <Zoom in={open}>
        <CancelIcon className={tabClasses.cancel} />
      </Zoom>
    </Box>
  );
}

@inject("menuStore")
@withStyles(styles)
@observer
export default class ContentTabs extends React.Component {
  constructor(props) {
    super(props);
    this.tabClick = this.tabClick.bind(this);
  }

  tabClick(menuObj) {
    this.props.menuStore.setActiveMenu(menuObj.path);
    this.props.history.push(menuObj.path);
  }

  render() {
    const { classes } = this.props;
    const { active, menuList } = this.props.menuStore;

    const activeIndex = menuList.findIndex(value => value.name === active);

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
            {menuList.map(menu => (
              <LinkTab
                key={menu.name}
                menu={menu}
                classes={classes}
                tabClick={this.tabClick}
              />
            ))}
          </Tabs>
        </AppBar>
      </div>
    );
  }
}
