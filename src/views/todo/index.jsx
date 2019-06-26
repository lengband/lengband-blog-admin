import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Checkbox,
  IconButton,
  Typography,
  Box,
  Divider
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { todoList } from "@/constants";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },
  title: {
    color: theme.palette.primary.dark
  }
});

@withStyles(styles)
export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listChecked: []
    };
  }

  listItemClick(id) {
    const newChecked = [...this.state.listChecked];
    const currentIndex = this.state.listChecked.indexOf(id);
    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.setState({
      listChecked: newChecked
    });
  }

  render() {
    const { listChecked } = this.state;
    const { classes } = this.props;

    return (
      <Box>
        <List className={classes.root}>
          {todoList.map(value => {
            return (
              <Box key={value.id}>
                <ListItem
                  role={undefined}
                  dense
                  button
                  onClick={() => this.listItemClick(value.id)}
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={listChecked.includes(value.id)}
                      tabIndex={-1}
                      disableRipple
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <a
                        href={value.url}
                        className={classes.title}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {value.title}
                      </a>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          {value.description || "-"}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </Box>
            );
          })}
        </List>
      </Box>
    );
  }
}
