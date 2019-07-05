import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tab, Box, Zoom, Menu, MenuItem } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/CancelRounded";

const tabStyles = makeStyles(theme => ({
  cancel: {
    position: "absolute",
    right: 0,
    top: 0,
    color: theme.palette.primary.light,
    cursor: "pointer"
  }
}));

export default function LinkTab(props) {
  const { menu, classes, tabStore, tabClick, urlHistory } = props;
  const tabClasses = tabStyles();
  const [deleteEl, setDeleteEl] = React.useState(null);
  const [menuEl, setMenuEl] = React.useState(null);
  const [menuPosition, setMenuPosition] = React.useState({
    horizontal: 0,
    vertical: 0
  });
  const open = Boolean(deleteEl);
  const openMenu = Boolean(menuEl);

  const showCloseIcon = event => {
    if (tabStore.urlHistory.length > 1) {
      setDeleteEl(event.currentTarget);
    }
  };

  const hideCloseIcon = () => {
    setDeleteEl(null);
  };

  const menuClose = () => {
    setMenuEl(null);
  };

  const refresh = () => {
    menuClose();
  };

  const closeCurrent = () => {
    // 关闭当前页
    tabStore.close(menu);
    menuClose();
  };

  const closeOther = () => {
    // 关闭其他页
    tabStore.closeOther();
    menuClose();
  };

  const contextmenu = event => {
    if (openMenu) {
      menuClose();
    } else {
      setMenuPosition({
        horizontal: event.nativeEvent.offsetX,
        vertical: event.nativeEvent.offsetY
      });
      setMenuEl(event.currentTarget);
    }
    event.preventDefault();
  };

  return (
    <Box
      position="relative"
      onMouseEnter={showCloseIcon}
      onMouseLeave={hideCloseIcon}
      onContextMenu={contextmenu}
    >
      <Tab
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        className={classes.tab}
        onClick={() => tabClick(menu)}
        label={menu.label}
      />
      <Zoom in={open}>
        <CancelIcon className={tabClasses.cancel} onClick={closeCurrent} />
      </Zoom>
      <Menu
        id="simple-menu"
        anchorEl={menuEl}
        keepMounted
        getContentAnchorEl={null}
        open={Boolean(menuEl)}
        onClose={menuClose}
        anchorOrigin={menuPosition}
      >
        <MenuItem onClick={closeCurrent} disabled={urlHistory.length <= 1}>
          关闭当前标签页
        </MenuItem>
        <MenuItem onClick={closeOther} disabled={urlHistory.length <= 1}>
          关闭其他标签页
        </MenuItem>
        <MenuItem onClick={refresh}>刷新</MenuItem>
      </Menu>
    </Box>
  );
}
