import styles from "./Listgrid.module.scss";

import React from "react";

export const ListGridTest: React.FC = () => {
  return (
    <ul className={styles["list-grid"]}>
      <li key="1" className={styles.itemgrid}></li>
      <li key="2" className={styles.itemgrid}></li>
      <li key="3" className={styles.itemgrid}></li>
      <li key="4" className={styles.itemgrid}></li>
      <li key="5" className={styles.itemgrid}></li>
      <li key="6" className={styles.itemgrid}></li>
      <li key="7" className={styles.itemgrid}></li>
      <li key="8" className={styles.itemgrid}></li>
      <li key="9" className={styles.itemgrid}></li>
      <li key="10" className={styles.itemgrid}></li>
      <li key="11" className={styles.itemgrid}></li>
      <li key="12" className={styles.itemgrid}></li>
      <li key="13" className={styles.itemgrid}></li>
      <li key="14" className={styles.itemgrid}></li>
      <li key="15" className={styles.itemgrid}></li>
      <li key="16" className={styles.itemgrid}></li>
      <li key="17" className={styles.itemgrid}></li>
      <li key="18" className={styles.itemgrid}></li>
      <li key="19" className={styles.itemgrid}></li>
      <li key="20" className={styles.itemgrid}></li>
    </ul>
  );
};
