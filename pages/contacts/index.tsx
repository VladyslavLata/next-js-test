import { FC } from "react";
import { GetStaticProps } from "next";
import { Container } from "../../components/Container/Container";
import { Title } from "../../components/Title/Title";
import { Section } from "../../components/Section/Section";
import { IUser } from "../../types/types";

export const getStaticProps: GetStaticProps = async () => {
  const respons = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await respons.json();

  if (!users) {
    return {
      notFound: true,
    };
  }

  return {
    props: { users },
  };
};

interface IProps {
  users: IUser[];
}

const Contacts: FC<IProps> = ({ users }) => {
  return (
    <Section>
      <Container>
        <Title text="Contacts list" />
        <ul>
          {users.map(({ id, name, email }) => {
            return (
              <li key={id}>
                <b>{name}</b>
                <span> ({email})</span>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
};

export default Contacts;
