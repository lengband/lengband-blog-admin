import React from "react";
import { observer, inject } from "mobx-react";
import { Grid, Box } from "@material-ui/core";
import Workplace from "./Workplace";
import CreatingArticles from "./CreatingArticles";
import CreatedArticles from "./CreatedArticles";
import Active from "./Active";

@inject("dashboardStore")
@inject("articlesStore")
@observer
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.props.articlesStore.getArticles();
  }

  render() {
    const { history } = this.props;

    return (
      <div>
        <Workplace />
        <Grid container className="mt-4" spacing={3}>
          <Grid item xs={8}>
            <CreatingArticles history={history} />
            <Box mt={3}>
              <Active />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <CreatedArticles />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
