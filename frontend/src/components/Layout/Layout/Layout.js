import { Fragment } from "react";

import styles from "./Layout.module.css";
import MainNavigation from "../MainNavigation/MainNavigation";

const Layout = (props) => {
  return (
    <>
      <MainNavigation></MainNavigation>
      <main className={styles.main}>{props.children}</main>
    </>
  );
};

export default Layout;
