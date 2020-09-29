import React from "react";
import Home from "./sites/Home/Home";
import { Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import "./App.scss";

function App() {
  return (
    <div className="app-compontent">
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default hot(App);
