import React from "react";
import logo from "../../asserts/img/logo.jpg";
import styles from "./index.scss";

const About = () => (
  <main>
    <section className={`${styles.container}`}>
      <div className={`${styles.about_text}`}>
        <h1>網站資訊</h1>
        <h2>資料來源</h2>
        <h3>交通部「公共運輸整合資訊流通服務平臺(PTX)」</h3>
        <h4>API資料來源&nbsp;&nbsp;&nbsp;(點選圖片)</h4>
        <a href="https://ptx.transportdata.tw/MOTC?t=Tourism&v=2#">
          <img src={logo} height="300px" width="450px" />
        </a>
      </div>
    </section>
  </main>
);

export default About;
