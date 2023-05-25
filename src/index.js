import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import Index from "views/Index.js";

import Login from "views/page/Login.js";
import Profile from "views/page/Profile.js";
import Register from "views/page/Register.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <Index {...props} />} />
      {/* <Route path="/" exact render={(props) => <Landing {...props} />} />*/}
      <Route
        path="/login-page"
        exact
        render={(props) => <Login {...props} />}
      />
      <Route
        path="/profile-page"
        exact
        render={(props) => <Profile {...props} />}
      />
      <Route
        path="/register-page"
        exact
        render={(props) => <Register {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);
