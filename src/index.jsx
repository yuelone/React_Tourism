import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import About from "./views/About";
import Menu from "./components/Menu";
import ScenicSpot from "./views/ScenicSpot";
import NotFound from "./views/NotFound";
import ScenicSpotCity from "./views/ScenicSpotCity";

ReactDOM.render(
  <HashRouter>
    <Menu />
    <Switch>
      <Route exact sensitive path="/about" component={About} />
      <Route path="/scenicSpot" component={ScenicSpot} />
      <Route path="/scenicSpotCity" component={ScenicSpotCity} />
      <Route path="/" component={NotFound} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
