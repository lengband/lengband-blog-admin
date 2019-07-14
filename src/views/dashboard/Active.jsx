import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { observer, inject } from "mobx-react";
import moment from "moment";
import {
  Typography,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Link
} from "@material-ui/core";

import { activeList } from "@/constants";

import clsx from "clsx";

const styles = theme => ({
  "active-wrapper": {
    background: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
});

@inject("dashboardStore")
@withStyles(styles)
@observer
export default class Active extends React.Component {
  constructor(props) {
    super(props);
    this.pushArticle = this.pushArticle.bind(this);
  }

  pushArticle() {
    this.props.history.push("/article");
  }

  render() {
    const { classes } = this.props;

    return (
      <List className={clsx(classes["active-wrapper"], "p-3", "rounded")}>
        <ListItem className="justify-content-between">
          <Typography variant="h6" component="h6">
            动态
          </Typography>
          <Link component="button" onClick={this.pushArticle}>
            全部
          </Link>
        </ListItem>
        <Divider />
        {activeList.map((item, index) => {
          return (
            <React.Fragment key={item.id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={item.name} src={item.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Box display="flex" className="justify-content-between">
                      <Typography variant="body1">{item.content}</Typography>
                      <Typography variant="body2">
                        {moment(item.time).format("YYYY-MM-DD hh:mm:ss")}
                      </Typography>
                    </Box>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body1"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {item.author}
                      </Typography>
                      <span>
                        {" "}
                        回复 - {item.questionFrom}：{item.question}
                      </span>
                    </React.Fragment>
                  }
                />
              </ListItem>
              {index !== activeList.length - 1 ? (
                <Divider variant="inset" component="li" />
              ) : null}
            </React.Fragment>
          );
        })}
      </List>
    );
  }
}
