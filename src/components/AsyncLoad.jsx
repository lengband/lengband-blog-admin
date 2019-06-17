import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  progress: {
    zIndex: theme.zIndex.tooltip + 1,
    margin: "0 auto"
  },
  container: {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    alignContent: "center"
  },
  placeholder: {
    color: "#fff",
    marginTop: 16
  },
  innerBox: {
    margin: "0 auto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
}));

export default (loadComponent, placeholder = "拼命加载中...") => {
  const FullScreenLoading = ({ placeholderFrom }) => {
    const classes = useStyles();
    return (
      <Container className={classes.container}>
        <div className={classes.innerBox}>
          <CircularProgress className={classes.progress} />
          <div className={classes.placeholder}>{placeholderFrom}</div>
        </div>
      </Container>
    );
  };

  return class AsyncComponent extends Component {
    unmount = false;

    constructor() {
      super();
      this.state = {
        Child: null
      };
    }

    async componentDidMount() {
      const { default: Child } = await loadComponent();
      if (this.unmount) return;
      this.setState({
        Child
      });
    }

    componentWillUnmount() {
      this.unmount = true;
    }

    render() {
      const { Child } = this.state;
      return Child ? (
        <Child {...this.props} />
      ) : (
        <FullScreenLoading placeholder={placeholder} />
      );
    }
  };
};
