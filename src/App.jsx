import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Dashboard from "./views/dashboard";
import Users from "./views/users";

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
  );
}

export default App;
