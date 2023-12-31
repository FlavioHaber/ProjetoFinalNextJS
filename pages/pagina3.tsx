import Head from 'next/head';
import Layout from '../components/layout';
import Link from 'next/link';

export async function getServerSideProps() {

  let users;
  await fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
          users = data;
      });
  return {
      props: {
          users
      }
  };
}

export default function Pagina3(props:any) {
  return (
    <Layout>
      <Head>
        <title>Lista dinâmica</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Usuários</h1>
        {props.users.map((user:any) => <p><Link href={user.id + ""}>{user.name}</Link></p>)}
      </main>
    </Layout>
  );
}
