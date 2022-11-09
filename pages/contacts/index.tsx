import { FC } from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
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
          {users.map(({ id, name }) => {
            return (
              <li key={id}>
                <Link href={`/contacts/${id}`}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
};

export default Contacts;
