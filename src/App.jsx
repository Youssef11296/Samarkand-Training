import React from "react";
import "./App.css";
import Header from "./comps/Header";
import Home from "./comps/Home";
import Checkout from "./comps/Checkout";
import Login from "./comps/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div className="app">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/login" component={Login} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;