import Head from 'next/head';

type Props = {
  title: string;
};

export default function Home({ title = 'React Avançado' }: Props) {
  return (
    <>
      <Head>
        <h1>{title}</h1>
      </Head>
    </>
  );
}
