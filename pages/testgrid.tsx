import { ListGridTest } from "../components/ListGridTest/ListGrid";
import { Container } from "../components/Container/Container";
import { Section } from "../components/Section/Section";
import  svg  from "../public/svg.svg";
// import Image from "next/image";

const TestGrid = () => {
  return (
    <Section>
      <Container>
        <ListGridTest />
        <svg width={30} height={30}>
          <use href={svg+"#icon-mob-menu-close"}></use>
        </svg>
      </Container>
    </Section>
  );
};

export default TestGrid;
