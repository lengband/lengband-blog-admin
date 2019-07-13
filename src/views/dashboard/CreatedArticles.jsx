import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  List,
  ListItemAvatar,
  Avatar,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  IconButton
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

@withStyles(styles)
export default class CreatedArticles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <List
        subheader={<ListSubheader color="inherit">已完成</ListSubheader>}
        className={classes.root}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="avatar" src="/static/images/avatar.jpg" />
          </ListItemAvatar>
          <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
          <ListItemSecondaryAction>
            <IconButton aria-label="Settings">
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <Avatar alt="Avatar" src="/static/images/avatar.jpg" />
          <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
          <ListItemSecondaryAction>
            <IconButton aria-label="Settings">
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    );
  }
}
