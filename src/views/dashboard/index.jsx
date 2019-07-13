import React from "react";
import { observer, inject } from "mobx-react";
import Grid from "@material-ui/core/Grid";
import Workplace from "./Workplace";
import CreatingArticles from "./CreatingArticles";
import CreatedArticles from "./CreatedArticles";

@inject("dashboardStore")
@observer
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;

    return (
      <div>
        <Workplace />
        <Grid container className="mt-4" spacing={3}>
          <Grid item xs={8}>
            <CreatingArticles history={history} />
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
