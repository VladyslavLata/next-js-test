import { FC } from "react";
import { Outlet } from "react-router-dom";

const Contact:FC = () => {
  return (<>
    <h1>Vlad</h1>
    <Outlet />
  </>
  )
}

export default Contact;