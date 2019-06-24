import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ErrorIcon from "@material-ui/icons/Error";
import List from "@material-ui/core/List";

@inject("menuStore")
@observer
export default class SliderMenu extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    const { locationPath } = this.props;
    this.props.menuStore.setMenuList();
    this.props.menuStore.setActiveMenu(locationPath);
  }

  listClick(currentName) {
    this.props.menuStore.setActive(currentName);
  }

  render() {
    const { active, menuList } = this.props.menuStore;

    return (
      <List>
        {menuList.map(route =>
          route.hidden ? null : (
            <Link to={route.path} key={route.name}>
              <ListItem
                button
                selected={route.name === active}
                onClick={() => this.listClick(route.name)}
              >
                <ListItemIcon>
                  {route.meta && route.meta.icon ? (
                    <route.meta.icon />
                  ) : (
                    <ErrorIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={route.label} />
              </ListItem>
            </Link>
          )
        )}
      </List>
    );
  }
}

SliderMenu.propTypes = {
  locationPath: PropTypes.string.isRequired
};
