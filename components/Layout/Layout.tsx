import { FC } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { IChildren } from "../../types/types";
import styles from "./Layout.module.scss";

export const Layout:FC<IChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}
