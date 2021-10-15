import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Welcome To My Website</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/connect" activeClassName={styles.active}>
              Connect
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" activeClassName={styles.active}>
              Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
