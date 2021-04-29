import React from "react";
import styles from "./index.scss";
import { v4 } from "uuid";

const ScenicSpotList = (props) => (
  <main className={` ${styles.rwd_Container}`}>
    {props.scenicSpot.map((theScenicSpot) => (
      <section className={` ${styles.ScenicSpot}`} key={v4()}>
        <div className={`${styles.ScenicSpot_field}`}>
          <div className={` ${styles.ScenicSpot_h6}`}>景點 </div>
          <div className={`${styles.ScenicSpot_h2} `}>{theScenicSpot.Name}</div>
        </div>
        <div className={` ${styles.ScenicSpot_info}`}>
          <div className={` ${styles.ScenicSpot_h6}`}>簡單介紹 </div>
          <div className={`${styles.ScenicSpot_h2} `}>
            {theScenicSpot.Description == null
              ? "對不起這裡沒有簡單介紹"
              : theScenicSpot.Description}
          </div>
        </div>
      </section>
    ))}
  </main>
);

export default ScenicSpotList;
