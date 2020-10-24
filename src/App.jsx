import React, { useEffect } from "react";
import "./App.css";
import Header from "./comps/Header";
import Home from "./comps/Home";
import About from "./comps/About";
import Events from "./comps/Events";
import Checkout from "./comps/Checkout";
import Login from "./comps/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./context/StateProvider";
import { auth } from "./firebase/Config";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <Switch>
        <div className="app">
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/no">
            <h1>Nooooo ...</h1>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/about">
            <Header />
            <About />
          </Route>
          <Route path="/events">
            <Header />
            <Events />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
