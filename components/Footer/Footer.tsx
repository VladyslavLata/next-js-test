import { FC } from "react";
import stylesApp from "../../styles/Home.module.scss";
import styles from "./Footer.module.scss";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={stylesApp.container}>
        <p className={styles.text}> &copy; Footer info </p>
      </div>
    </footer>
  );
};
