import Head from 'next/head';
import Layout from '@/components/layout';

export async function getServerSideProps() {

  let user;
  await fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((data) => {
          user = data;
      });
  return {
      props: {
          user
      }
  };
}


export default function Pagina1(props:{user:any}) {
  return (
    <Layout>
      <Head>
        <title>Usuário 1</title>
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <main>
        <h1>Usuário 1</h1>
        <h2>Olá {props.user.name}</h2>
      </main>
    </Layout>
 );

}

