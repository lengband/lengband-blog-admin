import React from "react";
import { Link } from "react-router-dom";
import { matchRoutes } from "react-router-config";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ErrorIcon from "@material-ui/icons/Error";
import List from "@material-ui/core/List";

import routes from "../../routes/routes";
import { flattenRoutes } from "../../lib/utils";

export default class SliderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: routes[0].name,
      menuList: []
    };
  }

  componentDidMount() {
    this.setMenuList();
    this.setActiveMenu();
  }

  setMenuList() {
    let menuList = flattenRoutes(routes, "routes");
    menuList = menuList.filter(item => item.path !== "/");
    this.setState({
      menuList
    });
  }

  setActiveMenu() {
    const { locationPath } = this.props;
    const matchList = matchRoutes(routes, locationPath);
    const matched = matchList.find(
      item => item.match.isExact && item.match.path === locationPath
    );
    if (matched) {
      this.setState({
        active: matched.route.name
      });
    }
  }

  listClick(currentName) {
    this.setState({
      active: currentName
    });
  }

  render() {
    const { active, menuList } = this.state;

    return (
      <List>
        {menuList.map(route => (
          <Link to={route.path} key={route.name}>
            <ListItem
              button
              selected={route.name === active}
              onClick={() => this.listClick(route.name)}
            >
              <ListItemIcon>
                {route.meta.icon ? <route.meta.icon /> : <ErrorIcon />}
              </ListItemIcon>
              <ListItemText primary={route.label} />
            </ListItem>
          </Link>
        ))}
      </List>
    );
  }
}
