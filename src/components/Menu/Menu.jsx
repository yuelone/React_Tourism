import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./index.scss";
import Select from "react-select";
import citys from "../../global/data/CityData";

const Menu = () => {
  const history = useHistory();
  const changeRouter = (router) => {
    history.push(router);
  };

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (theCity) => {
    setSelectedOption(theCity);
    changeRouter(`/scenicSpotCity/${theCity.id}`);
  };

  return (
    <header className={`${styles.RWD}`}>
      <nav className="navbar" className={`${styles.navbar}`}>
        <ul className="navbarItem" className={`${styles.container}`}>
          <li
            className={`${styles.navbarItem}`}
            onClick={() => changeRouter("/about")}
          >
            關於我們
          </li>
          <li
            className={`${styles.navbarItem} `}
            onClick={() => changeRouter("/scenicSpot")}
          >
            全部景點
          </li>
          <Select
            className={`${styles.selectItem}`}
            placeholder="縣市景點"
            value={selectedOption} // set selected value
            options={citys} // set list of the data
            onChange={handleChange} // assign onChange function
            isSearchable={false}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
