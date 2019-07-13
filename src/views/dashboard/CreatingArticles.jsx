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

const styles = theme => ({
  "articles-creating-wrapper": {
    background: theme.palette.background.paper
  },
  "creating-card": {
    boxShadow:
      "1px 0 0 0 #e8e8e8, 0 1px 0 0 #e8e8e8, 1px 1px 0 0 #e8e8e8, inset 1px 0 0 0 #e8e8e8, inset 0 1px 0 0 #e8e8e8"
  }
});

@inject("dashboardStore")
@withStyles(styles)
@observer
class Workplace extends React.Component {
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
      <List
        className={clsx(classes["articles-creating-wrapper"], "p-3", "rounded")}
      >
        <ListItem className="justify-content-between">
          <Typography variant="h5" component="h5">
            进行中
          </Typography>
          <Link component="button" onClick={this.pushArticle}>
            全部
          </Link>
        </ListItem>
        <Divider />
        <ListItem>
          <Box>
            <Grid container spacing={1}>
              <Grid item xs={4} className={classes["creating-card"]}>
                <Card square elevation={0}>
                  <CardHeader
                    avatar={
                      <Avatar alt="avatar" src="/static/images/avatar.jpg" />
                    }
                    title="webpack 重头再来"
                    subheader="2019-07-12"
                    action={
                      <IconButton aria-label="Settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                  >
                    <Typography variant="h5" component="h5">
                      Alipay
                    </Typography>
                  </CardHeader>
                  <CardContent>
                    <Typography>
                      那是一种内在的东西，他们到达不了，也无法触及
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4} className={classes["creating-card"]}>
                <Card square elevation={0}>
                  <CardHeader
                    avatar={
                      <Avatar alt="avatar" src="/static/images/avatar.jpg" />
                    }
                    title="webpack 重头再来"
                    subheader="2019-07-12"
                    action={
                      <IconButton aria-label="Settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                  >
                    <Typography variant="h5" component="h5">
                      Alipay
                    </Typography>
                  </CardHeader>
                  <CardContent>
                    <Typography>
                      那是一种内在的东西，他们到达不了，也无法触及
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4} className={classes["creating-card"]}>
                <Card square elevation={0}>
                  <CardHeader
                    avatar={
                      <Avatar alt="avatar" src="/static/images/avatar.jpg" />
                    }
                    title="webpack 重头再来"
                    subheader="2019-07-12"
                    action={
                      <IconButton aria-label="Settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                  >
                    <Typography variant="h5" component="h5">
                      Alipay
                    </Typography>
                  </CardHeader>
                  <CardContent>
                    <Typography>
                      那是一种内在的东西，他们到达不了，也无法触及
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={4} className={classes["creating-card"]}>
                <Card square elevation={0}>
                  <CardHeader
                    avatar={
                      <Avatar alt="avatar" src="/static/images/avatar.jpg" />
                    }
                    title="webpack 重头再来"
                    subheader="2019-07-12"
                    action={
                      <IconButton aria-label="Settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                  >
                    <Typography variant="h5" component="h5">
                      Alipay
                    </Typography>
                  </CardHeader>
                  <CardContent>
                    <Typography>
                      那是一种内在的东西，他们到达不了，也无法触及
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4} className={classes["creating-card"]}>
                <Card square elevation={0}>
                  <CardHeader
                    avatar={
                      <Avatar alt="avatar" src="/static/images/avatar.jpg" />
                    }
                    title="webpack 重头再来"
                    subheader="2019-07-12"
                    action={
                      <IconButton aria-label="Settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                  >
                    <Typography variant="h5" component="h5">
                      Alipay
                    </Typography>
                  </CardHeader>
                  <CardContent>
                    <Typography>
                      那是一种内在的东西，他们到达不了，也无法触及
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4} className={classes["creating-card"]}>
                <Card square elevation={0}>
                  <CardHeader
                    avatar={
                      <Avatar alt="avatar" src="/static/images/avatar.jpg" />
                    }
                    title="webpack 重头再来"
                    subheader="2019-07-12"
                    action={
                      <IconButton aria-label="Settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                  >
                    <Typography variant="h5" component="h5">
                      Alipay
                    </Typography>
                  </CardHeader>
                  <CardContent>
                    <Typography>
                      那是一种内在的东西，他们到达不了，也无法触及
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </ListItem>
      </List>
    );
  }
}

export default Workplace;
