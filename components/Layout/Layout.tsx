import { FC } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { IChildren } from "../../types/types";

export const Layout:FC<IChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  )
}
