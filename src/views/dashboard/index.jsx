import React from "react";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  addCount = () => {
    this.props.store.addCount();
  };

  reduceCount = () => {
    this.props.store.reduceCount();
  };

  render() {
    return (
      <div>
        <p>{this.props.store.count}</p>
        <button onClick={this.reduceCount}>minus</button>
        <button onClick={this.addCount}>add</button>
      </div>
    );
  }
}

export default Dashboard;
