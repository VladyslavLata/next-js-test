import { FC } from "react";
import Link from "next/link";
import { IPost } from "../../types/types";
import { Title } from "../../components/Title/Title";
import { Section } from "../../components/Section/Section";
import { Container } from "../../components/Container/Container";

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  if (!posts) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      posts
    }
  }
}

interface IProps {
  posts: IPost[]
}

const Posts:FC<IProps> = ({posts}) => {
  return (
    <Section>
      <Container>
        <Title text="Posts list" />
        <ul>
          {posts.map(({ id, title }) => {
            return (<li key={id}><Link href={`/posts/${id}`}>{title}</Link></li>)
          })}
        </ul>
      </Container>
  </Section>
  );
};

export default Posts;