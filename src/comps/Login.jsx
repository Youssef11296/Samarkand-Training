import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase/Config";
import { useStateValue } from "../context/StateProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };
  const createAccount = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <Link className="login__link" to="/">
        <img src="./images/logo.jpg" />
      </Link>
      <div className="login__top">
        <h3>Sign In</h3>
        <form>
          <div className="login__formInput">
            <label>E-mail</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login__formInput">
            <label>Password</label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" onClick={signIn}>
            Sign in
          </button>
        </form>
      </div>
      <div className="login__bottom">
        <h3>Or</h3>
        <button onClick={createAccount}>Create a Samarkand Account</button>
      </div>
    </div>
  );
};

export default Login;
