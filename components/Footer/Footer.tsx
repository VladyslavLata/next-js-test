import { FC } from "react";
import stylesApp from "../../styles/AppPages.module.scss";
import styles from "./Footer.module.scss";
import { Container } from "../Container/Container";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <p className={styles.text}> &copy; Footer info </p>
      </Container>
    </footer>
  );
};
