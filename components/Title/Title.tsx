import { FC } from "react";
import styles from "./Title.module.scss";

interface IProps {
  tag?: keyof JSX.IntrinsicElements,
  text: string,
 
}

export const Title: FC<IProps> = ({ tag, text }) => {
  const Tag = tag || "h1";
  const { title, center } = styles;
  return (
  <Tag className={Tag === "h1" ? `${title} ${center}` : title }> {text}</Tag>
)
}