import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { observer, inject } from "mobx-react";
import { Typography, Grid, Box, Avatar } from "@material-ui/core";
import clsx from "clsx";

const styles = theme => ({
  avatar: {
    margin: theme.spacing(2, 4, 2, 2),
    width: 80,
    height: 80
  },
  "workplace-headerr-wrapper": {
    background: theme.palette.background.paper
  },
  "avatar-content-title": theme.typography.h6,
  "avatar-content-desc": theme.typography.caption,
  "header-right-title": theme.typography.subtitle1,
  "header-right-content": theme.typography.h6
});

@inject("dashboardStore")
@withStyles(styles)
@observer
class Workplace extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <Box
        className={clsx(classes["workplace-headerr-wrapper"], "p-3", "rounded")}
      >
        <Typography variant="h5" component="h4" className="mb-2">
          工作台
        </Typography>
        <Grid container>
          <Grid xs={7} item>
            <Box display="flex">
              <Avatar
                className={classes.avatar}
                alt="Remy Sharp"
                src="/static/images/avatar.jpg"
              />
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                className="w-100"
              >
                <div className={classes["avatar-content-title"]}>
                  早安，Serati Ma，祝你开心每一天！
                </div>
                <div className={classes["avatar-content-desc"]}>
                  一点寒芒先到，随后枪出如龙
                </div>
              </Box>
            </Box>
          </Grid>
          <Grid xs={5} item container>
            <Grid
              item
              xs={4}
              className="d-flex text-center my-4 justify-content-center flex-column border-right"
            >
              <div className={classes["header-right-title"]}>项目数</div>
              <div className={classes["header-right-content"]}>56</div>
            </Grid>
            <Grid
              item
              xs={4}
              className="d-flex text-center my-4 justify-content-center flex-column border-right"
            >
              <div className={classes["header-right-title"]}>本周访客占比</div>
              <div className={classes["header-right-content"]}>82 / 5611</div>
            </Grid>
            <Grid
              item
              xs={4}
              className="d-flex text-center my-4 justify-content-center flex-column"
            >
              <div className={classes["header-right-title"]}>访客总数</div>
              <div className={classes["header-right-content"]}>5611</div>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default Workplace;
