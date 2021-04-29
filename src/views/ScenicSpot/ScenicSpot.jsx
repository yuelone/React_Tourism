import React, { useEffect, useState, useRef } from "react";
import { Switch, Route } from "react-router-dom";
import ScenicSpotList from "./ScenicSpotList.jsx";
import styles from "./index.scss";
import { apiScenicSpot } from "../../global/api/API";

const ScenicSpot = () => {
  const [scenicspot, setScenicSpot] = useState([]);
  const [page, setPage] = useState([0]);
  const [load, setLoad] = useState(false);
  const pageEndRef = useRef();

  /*axios*/
  async function loadData(page) {
    await apiScenicSpot(page)
      .then((res) => {
        setScenicSpot((scenicspotdata) => [...scenicspotdata, ...res.data]);
        setLoad(true);
      })
      .catch((error) => console.log(error));
  }

  const moreData = () => {
    setPage((prepage) => prepage - 0 + 30);
  };

  useEffect(() => {
    loadData(page);
  }, [page]);

  useEffect(() => {
    if (load) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            moreData();
            setLoad(false);
          }
        },
        { threshold: 1 }
      );
      observer.observe(pageEndRef.current);
    }
  }, [load]);

  return (
    <Switch>
      <Route
        sensitive
        exact
        path="/scenicSpot"
        component={() => (
          <>
            <h1 className={`${styles.ScenicSpot_text}`}>全部景點列表</h1>
            <ScenicSpotList scenicSpot={scenicspot} />
            <center>
              <input
                className={`${styles.btn}`}
                type="button"
                value="載入更多"
                onClick={() => {
                  moreData();
                }}
                ref={pageEndRef}
              />
            </center>
          </>
        )}
      />
    </Switch>
  );
};

export default ScenicSpot;

/*fetch*/
/*async function loadData(page){
            const res = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$skip=${page}&$format=JSON`)
            const data = await res.json()
            setScenicSpot(a =>[...a,...data])
            setLoad(true)
    }*/
