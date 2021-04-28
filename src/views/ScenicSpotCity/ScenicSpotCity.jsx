import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import ScenicSpotCityReader from "./ScenicSpotCityReader.jsx";
import citys from "../../global/data/CityData";

const ScenicSpotCity = () => (
  <Switch>
    <Route sensitive exact path="/scenicSpotCity" />
    <Route
      path="/scenicSpotCity/:id"
      component={() => <ScenicSpotCityReader citys={citys} />}
    ></Route>
  </Switch>
);

export default ScenicSpotCity;
