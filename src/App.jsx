import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "mobx-react";
import styled from "styled-components";
import Dashboard from "./views/dashboard";
import Users from "./views/users";
import Store from "./store/index";

const store = new Store();
const Wrapper = styled.section`
  padding: 5px;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: red;
`;

function App() {
  return (
    <Provider store={store}>
      <Wrapper>
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
      </Wrapper>
    </Provider>
  );
}

export default App;
