import React from "react";
import { observer, inject } from "mobx-react";
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

@inject("articlesStore")
@withStyles(styles)
@observer
export default class CreatedArticles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, articlesStore } = this.props;

    return (
      <List
        subheader={<ListSubheader color="inherit">已完成</ListSubheader>}
        className={classes.root}
      >
        {articlesStore.doneArtcles.map(item => (
          <ListItem key={item.id}>
            <ListItemAvatar>
              <Avatar alt="avatar" src={item.avatar} />
            </ListItemAvatar>
            <ListItemText id="switch-list-label-wifi" primary={item.title} />
            <ListItemSecondaryAction>
              <IconButton aria-label="Settings">
                <MoreVertIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
}
