import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./TabBar.module.css";
import { ROUTES } from "../constants";

const TabBar = () => {
  return (
    <div className={styles.tabBar}>
      <NavLink exact={true} to={ROUTES.chat} activeClassName={styles.active}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="61.9px"
          height="21.2px"
          viewBox="0 0 61.9 21.2"
        >
          <defs />
          <path
            className={styles.st0}
            d="M17.1,10.1L3.2,12V1L17,2.6c0.5,0.1,0.8,0.3,1,0.8c0.5,1.1,1.2,3.4,0.1,6C17.9,9.8,17.5,10.1,17.1,10.1z"
          />
          <ellipse className={styles.st1} cx="2.4" cy="6.5" rx="1.6" ry="5.7" />
          <path
            className={styles.st0}
            d="M33.8,18l13.9,1.8V8.8l-13.9,1.6c-0.5,0.1-0.8,0.3-1,0.8c-0.5,1.1-1.2,3.4-0.1,6C32.9,17.6,33.3,17.9,33.8,18z"
          />
          <ellipse class={styles.st1} cx="48.4" cy="14.3" rx="1.6" ry="5.7" />
          <path
            className={styles.st0}
            d="M18.9,6.1c0,0,5.7-0.3,5,5c-0.8,5.2,8,3,8,3"
          />
          <line className={styles.st0} x1="52.9" y1="11.1" x2="59.9" y2="7.5" />
          <line className={styles.st0} x1="53.3" y1="14.3" x2="57" y2="14.3" />
          <line
            className={styles.st0}
            x1="53.1"
            y1="17.5"
            x2="61.1"
            y2="20.4"
          />
        </svg>
      </NavLink>
      <NavLink to={ROUTES.shows} activeClassName={styles.active}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="28.6px"
          height="26.9px"
          viewBox="0 0 28.6 26.9"
        >
          <defs />
          <path
            class={styles.st2}
            d="M24.8,24h-21c-1.6,0-2.9-1.3-2.9-2.9V3.9C0.8,2.3,2.1,1,3.7,1h21c1.6,0,2.9,1.3,2.9,2.9v17.2
	C27.7,22.7,26.4,24,24.8,24z"
          />
          <path
            class={styles.st2}
            d="M6.7,4.2c0,0,1.6,4.7-2.4,10.2c-0.2,0.3-0.2,0.7-0.1,1c1.3,3.9,1,8.9,0.5,10.2C4.7,25.9,4.5,26,4.3,26h-3
	c-0.3,0-0.5-0.2-0.5-0.5l0-21.9"
          />
          <path
            class={styles.st2}
            d="M21.9,4.3c0,0-1.6,4.7,2.4,10.2c0.2,0.3,0.2,0.7,0.1,1c-1.3,3.9-1,8.9-0.5,10.2c0.1,0.2,0.3,0.3,0.5,0.3h3
	c0.3,0,0.5-0.2,0.5-0.5L27.7,3.6"
          />
          <path
            class={styles.st3}
            d="M24.4,1c0,0-18.2-0.3-20.6,0S1.3,2.8,1.3,2.8s11.5,4.4,26,0C27.3,2.8,27,1.1,24.4,1z"
          />
          <path class={styles.st2} d="M4.8,14.8c0,0-1.7,1.2-4,0.2" />
          <path class={styles.st2} d="M23.8,15.2c0,0,1.7,1.2,4,0.2" />
        </svg>
      </NavLink>
    </div>
  );
};
export default TabBar;
