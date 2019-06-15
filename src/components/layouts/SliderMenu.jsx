import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import List from "@material-ui/core/List";
import routes from "../../routes/routes";

export default class SliderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: routes[0].name
    };
  }

  listClick(currentName) {
    this.setState({
      active: currentName
    });
  }

  render() {
    const { active } = this.state;
    return (
      <List>
        {routes.map((item, index) => (
          <Link to={item.path} key={item.name}>
            <ListItem
              button
              selected={item.name === active}
              onClick={() => this.listClick(item.name)}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          </Link>
        ))}
      </List>
    );
  }
}
