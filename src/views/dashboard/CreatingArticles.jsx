import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { observer, inject } from "mobx-react";
import {
  Typography,
  Grid,
  Box,
  Avatar,
  List,
  ListItem,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Link
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import clsx from "clsx";
import moment from "moment";

const styles = theme => ({
  "articles-creating-wrapper": {
    background: theme.palette.background.paper
  },
  "creating-card": {
    boxShadow:
      "1px 0 0 0 #e8e8e8, 0 1px 0 0 #e8e8e8, 1px 1px 0 0 #e8e8e8, inset 1px 0 0 0 #e8e8e8, inset 0 1px 0 0 #e8e8e8"
  }
});

const COLUNMS = 3;

const setRow = doingArtcles => {
  const arr = [];
  doingArtcles.forEach((item, index) => {
    const columnIndex = index % COLUNMS; // 第几列
    const rowIndex = Math.floor(index / COLUNMS);
    if (columnIndex === 0) {
      arr.push([item]);
    } else {
      arr[rowIndex].push(item);
    }
  });
  return arr;
};

@inject("articlesStore")
@withStyles(styles)
@observer
class Workplace extends React.Component {
  constructor(props) {
    super(props);
    this.pushArticle = this.pushArticle.bind(this);
    this.setRow = this.setRow.bind(this);
  }

  pushArticle() {
    this.props.history.push("/article");
  }

  render() {
    const { classes, articlesStore } = this.props;
    const rows = setRow(articlesStore.doingArtcles);

    return (
      <List
        className={clsx(classes["articles-creating-wrapper"], "p-3", "rounded")}
      >
        <ListItem className="justify-content-between">
          <Typography variant="h6" component="h6">
            进行中
          </Typography>
          <Link component="button" onClick={this.pushArticle}>
            全部
          </Link>
        </ListItem>
        <Divider />
        <ListItem>
          <Box className="w-100">
            {rows.map((columns, index) => (
              <Grid key={index} container spacing={1}>
                {columns.map(column => (
                  <Grid
                    key={column.id}
                    item
                    xs={4}
                    className={classes["creating-card"]}
                  >
                    <Card square elevation={0}>
                      <CardHeader
                        avatar={
                          <Avatar
                            alt="avatar"
                            src="/static/images/avatar.jpg"
                          />
                        }
                        title={column.title}
                        subheader={moment(column.time).format("YYYY-MM-DD")}
                        action={
                          <IconButton aria-label="Settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                      />
                      <CardContent>
                        <Typography>{column.content}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            ))}
          </Box>
        </ListItem>
      </List>
    );
  }
}

export default Workplace;
