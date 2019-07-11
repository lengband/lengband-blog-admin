import React from "react";
import { Box, Typography, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TodoList from "./Todo";
import SearchTask from "./Search";
import CreateTask from "./Create";

const styles = theme => {
  return {
    paper: {
      padding: theme.spacing(3, 2),
      margin: theme.spacing(0, 0, 4)
    },
    title: {
      marginBottom: theme.spacing(2)
    }
  };
};

@withStyles(styles)
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <Box>
        <Paper className={classes.paper}>
          <Typography className={classes.title} variant="h5" component="h3">
            搜索任务(Task)
          </Typography>
          <SearchTask />
        </Paper>
        <TodoList />
        <CreateTask />
      </Box>
    );
  }
}
