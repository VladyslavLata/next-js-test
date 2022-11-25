import { ListGridTest } from "../components/ListGridTest/ListGrid";
import { Container } from "../components/Container/Container";
import { Section } from "../components/Section/Section";
import Image from "next/image";
import dd from "../public/sprite.svg";



const Icon = () => {
  return (<svg width="30px" height="30px"  fill="#345678" >

    <use style={{
      width: "40px",
    height: "40px",}} href="../public/sprite.svg#icon" />

  </svg>)
}

const TestGrid = () => {
  return (
    <Section>
      <Container>
        <ListGridTest />
        {/* <Image src={dd} width={77} height={30} alt="d"/> */}
        <Icon />
      </Container>
    </Section>
  );
};

export default TestGrid;
