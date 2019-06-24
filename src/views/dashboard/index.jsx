import React from "react";
import { observer, inject } from "mobx-react";

@inject("appStore")
@observer
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  addCount = () => {
    this.props.appStore.addCount();
  };

  reduceCount = () => {
    this.props.appStore.reduceCount();
  };

  render() {
    return (
      <div>
        <p>{this.props.appStore.count}</p>
        <button onClick={this.reduceCount}>minus</button>
        <button onClick={this.addCount}>add</button>
      </div>
    );
  }
}

export default Dashboard;
