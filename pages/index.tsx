import { FC } from "react"
import Image from "next/image";
import logoFull from "../public/logo9.png"; 
import { Container } from "../components/Container/Container";
import { Title } from "../components/Title/Title";
import { Section } from "../components/Section/Section";

const Home:FC = () => {
  return (<Section>
    <Container>
      <Title text="Welcome!" />
      <Image  style={{ display: "block", margin: "0 auto" }} src={logoFull} width={612} height={612} alt="logo" placeholder="blur" />
    </Container>
  </Section>
)
}

export default Home;