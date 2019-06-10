import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import "./styles/index.css";
import { Button } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "mobx-react";
import Store from "./store/index";
import Dashboard from "./views/dashboard";
import Users from "./views/users";

const store = new Store();
const Wrapper = styled.section`
  padding: 5px
  background: papayawhip
`;

const Title = styled.h1`
  font-size: 1.5em
  color: red
`;

function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <CssBaseline />
        <Title>title</Title>
        <div>Hello world</div>
        <Router>
          <Link to="/">
            <button>dashboard</button>
          </Link>
          <Link to="/users">
            <button>users</button>
          </Link>
          <Route path="/" name="Dashboard" exact component={Dashboard} />
          <Route path="/users" name="Users" component={Users} />
        </Router>
        <Button variant="outlined" color="primary">
          Primary1
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
      </Wrapper>
    </Provider>
  );
}

export default App;
