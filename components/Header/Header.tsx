import { FC } from "react";
import { Navbar } from "../Navbar/Navbar";
import appStyles from "../../styles/AppPages.module.scss";
import styles from "./Header.module.scss";
import { Container } from "../Container/Container";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Navbar />
      </Container>
    </header>
  );
};
