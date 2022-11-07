import { FC } from "react";
import { Navbar } from "../Navbar/Navbar";
import appStyles from "../../styles/Home.module.scss";
import styles from "./Header.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={appStyles.container}>
        <Navbar />
      </div>
    </header>
  );
};
