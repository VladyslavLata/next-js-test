import { FC } from "react";

interface IProps {
  tag?: keyof JSX.IntrinsicElements,
  text: string,
}

export const Title: FC<IProps> = ({ tag, text }) => {
  const Tag = tag || "h1";
  return (
  <Tag> {text}</Tag>
)
}