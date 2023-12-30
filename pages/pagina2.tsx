import Head from 'next/head';
import Layout from './components/layout';

export async function getStaticProps() {

  let user;
  await fetch('https://jsonplaceholder.typicode.com/users/2')
      .then((response) => response.json())
      .then((data) => {
          user = data;
      });
  return {
      props: {
          user
      },
      revalidate: 600 // time in seconds (10 minutes)
  };
}

export default function Pagina2(props:any) {
  return (
    <Layout>
      <Head>
        <title>Página 2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Página 2</h1>
        <h2>Olá {props.user.name}</h2>
      </main>
    </Layout>
  );
}
