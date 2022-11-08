import { FC } from "react";
import styles from "./Container.module.scss";
import { IChildren } from "../../types/types";

export const Container:FC<IChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}