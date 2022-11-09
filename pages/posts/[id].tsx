import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Title } from "../../components/Title/Title";
import { Section } from "../../components/Section/Section";
import { Container } from "../../components/Container/Container";
import { IPost } from "../../types/types";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
  id: string;
}

interface IProps {
  post: IPost
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json() as IPost[];

  const paths = posts.map(({ id }) => {
    return {params: {id: id.toString()}}
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await response.json();

  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {post}
  }
}

const Post: FC<IProps> = ({ post }) => {
  const { title, body} =post
  return (
    <Section>
      <Container>
        <Title text="Post details" />
        <Title tag="h2" text={title} />
        <p>{ body }</p>
      </Container>
    </Section>
  )
}

export default Post;