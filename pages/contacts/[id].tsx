import { FC } from "react";
import { Section } from "../../components/Section/Section";
import { Container } from "../../components/Container/Container";
import { Title } from "../../components/Title/Title";
import { ContactInfo } from "../../components/ContactInfo/ContactInfo";
import { IUser } from "../../types/types";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
  id: string;
}

interface IProps {
  contact: IUser;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as IParams;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const contact = await response.json();

  if (!contact) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contact },
  };
};

const Contact: FC<IProps> = ({ contact }) => {
  return (
    <Section>
      <Container>
        <Title text={`Contact #${contact.id}`} />
        <ContactInfo contact={contact} />
      </Container>
    </Section>
  );
};

export default Contact;
