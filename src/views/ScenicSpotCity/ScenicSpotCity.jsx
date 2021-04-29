import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import ScenicSpotCityReader from "./ScenicSpotCityReader.jsx";
import citys from "../../global/data/CityData";
import styles from "./index.scss";

const ScenicSpotCity = () => (
  <Switch>
    <Route sensitive exact path="/scenicSpotCity" />
    <Route
      path="/scenicSpotCity/:id"
      component={() => (
        <>
          <h1 className={` ${styles.ScenicSpot_text}`}>縣市景點列表</h1>
          <ScenicSpotCityReader citys={citys} />
        </>
      )}
    ></Route>
  </Switch>
);

export default ScenicSpotCity;
