import React from "react";
import styles from "./index.scss";
import { v4 } from "uuid";

const ScenicSpotList = (props) => (
  <main>
    {props.scenicSpot.map((theScenicSpot) => (
      <section
        className="ScenicSpot"
        className={` ${styles.course}`}
        key={v4()}
      >
        <div className={`${styles.course_preview}`}>
          <div className={` ${styles.course_h6}`}>景點 </div>
          <div className={`${styles.course_h2} `}>{theScenicSpot.Name}</div>
        </div>
        <div className={` ${styles.course_info}`}>
          <div className={` ${styles.course_h6}`}>簡單介紹 </div>
          <div className={`${styles.course_h2} `}>
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
