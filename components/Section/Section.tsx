import { FC } from "react";
import { IChildren } from "../../types/types";
import styles from "./Section.module.scss";

export const Section: FC<IChildren> = ({ children }) => (
  <section className={styles.section}>{children}</section>
);
