import { signOut } from '@/auth';
import { getUsuarios } from '../../lib/infra/usuarios';
import Layout from '@/components/layout';
import Head from 'next/head';
import Link from 'next/link';

export default async function Protegido() {

  const usuarios = await getUsuarios();

  return (
    <Layout>
        <Head>
        <title>Área Protegida</title>
      </Head>
        <main className="flex  flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
                <h1>Área Protegida</h1>
                <div className="container py-5 px-5 mx-0 min-w-full flex flex-col items-center">
                    <h1>Usuários cadastrados:</h1>
                    <br/>
                    <br/>
                    <ul>
                        {usuarios &&
                        usuarios.map(usuario => <li key={usuario.id}>{usuario.nome}</li>)}
                    </ul>
                </div>
            </div>
            <div>
                <br/>
                <br/>
                <button className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <Link href="/protegido/01/">Cadastrar novo usuário</Link>
                </button>
            </div>
            <br/>
            <br/>
            <form action={async () => { 'use server'; await signOut(); }} method="post">
                  <button className="m-2 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Logout
                  </button>
            </form>
        </main>
    </Layout>
  )
}
