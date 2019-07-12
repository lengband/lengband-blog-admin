import React from "react";
import { observer, inject } from "mobx-react";
import Workplace from "./Workplace";

@inject("dashboardStore")
@observer
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Workplace />
      </div>
    );
  }
}

export default Dashboard;
