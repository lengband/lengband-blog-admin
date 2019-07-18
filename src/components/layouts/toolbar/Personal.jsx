import React from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { IconButton, MenuItem, Menu } from "@material-ui/core";
import { withRouter } from "react-router-dom";

@withRouter
export default class Personal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showMenu: false,
      anchorEl: null,
      menuPosition: {
        horizontal: 0,
        vertical: 0
      }
    };
    this.handleClose = this.handleClose.bind(this);
    this.menuItemClick = this.menuItemClick.bind(this);
    this.openMenu = this.openMenu.bind(this);
  }

  toggleMenu(isShow) {
    this.setState({
      ...this.state,
      showMenu: isShow
    });
  }

  openMenu(e) {
    this.setState({
      ...this.state,
      showMenu: true,
      anchorEl: e.currentTarget,
      menuPosition: {
        horizontal: e.nativeEvent.offsetX,
        vertical: 42
      }
    });
  }

  handleClose() {
    this.toggleMenu(false);
  }

  menuItemClick(type) {
    if (type === "logout") {
      this.props.history.push("/login");
    }
    this.handleClose();
  }

  render() {
    const { showMenu, anchorEl, menuPosition } = this.state;

    return (
      <div>
        <IconButton
          aria-label="Account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={this.openMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          keepMounted
          getContentAnchorEl={null}
          open={showMenu}
          onClose={this.handleClose}
          anchorOrigin={menuPosition}
        >
          <MenuItem onClick={this.menuItemClick}>个人中心</MenuItem>
          <MenuItem onClick={() => this.menuItemClick("logout")}>退出</MenuItem>
        </Menu>
      </div>
    );
  }
}
