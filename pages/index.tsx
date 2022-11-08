import { FC } from "react"
import Image from "next/image";
import logoFull from "../public/logo9.png"; 

const Home:FC = () => {
  return (<>
    <h1>Hello world!</h1>
    <Image src={logoFull} width={612} height={612} alt="logo" placeholder="blur" />
  </>
)
}

export default Home;