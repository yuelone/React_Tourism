import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import styles from "./index.scss";
import axios from "axios";
import { v4 } from "uuid";

const SenicSpotCityListReader = (props) => {
  const { id: targetCityId } = useParams();

  const [senicspotCity, setSenicspotCity] = useState([]);
  const [load, setLoad] = useState(false);
  const [citypage, setcityPage] = useState([0]);
  const pageEndRef = useRef();

  const targetCity = props.citys.find(
    (theCity) => String(theCity.id) === String(targetCityId)
  );

  const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${targetCityId}?$top=30&$skip=${citypage}&$format=JSON`;

  /*axios*/
  async function loadcitydata() {
    await axios
      .get(url)
      .then((res) => {
        setSenicspotCity((scenicspotCitydata) => [
          ...scenicspotCitydata,
          ...res.data,
        ]);
        setLoad(true);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    loadcitydata(citypage);
  }, [citypage]);

  const moreCityData = () => {
    setcityPage((prepage) => prepage - 0 + 12);
  };

  useEffect(() => {
    if (load) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            moreCityData();
            setLoad(false);
          }
        },
        { threshold: 1 }
      );
      observer.observe(pageEndRef.current);
    }
  }, [load]);

  return (
    <main>
      <h1 className={` ${styles.city_text}`}>{targetCity.label}</h1>
      {senicspotCity.map((senicspotCity) => (
        <section
          className="senicspotCity"
          className={` ${styles.course}`}
          key={v4()}
        >
          <div className={`${styles.course_preview}`}>
            <div className={` ${styles.course_h6}`}>景點</div>
            <div className={`${styles.course_h2} `}> {senicspotCity.Name}</div>
          </div>
          <div className={` ${styles.course_info}`}>
            <div className={` ${styles.course_h6}`}>簡單介紹</div>
            <div className={`${styles.course_h2} `}>
              {senicspotCity.Description == null
                ? "對不起這裡沒有簡單介紹"
                : senicspotCity.Description}
            </div>
          </div>
        </section>
      ))}
      <center>
        <input
          className={`${styles.btn}`}
          type="button"
          value="load more"
          onClick={() => {
            moreCityData();
          }}
          ref={pageEndRef}
        />
      </center>
    </main>
  );
};

export default SenicSpotCityListReader;

/*fetch*/
/*async function loadcitydata(citypage){
            const res = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${targetCityId}?$top=30&$skip=${citypage}&$format=JSON`)
            const citydata = await res.json()
            setSenicspotCity(a =>[...a,...citydata])
            setLoad(true)
    }*/
