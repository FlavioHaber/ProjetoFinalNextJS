import Head from 'next/head';
import Layout from '@/components/layout';
import { useState, useEffect } from 'react';

export default function HomePublic() {

  const [usuario, setUsuario] = useState({ id: "", email: "", senha: "" });
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (usuario.id.length > 0 && usuario.email.length > 0) {
      alert("Login efetuado com sucesso!");
      setUsuario({ id: "", email: "", senha: "" });
    }
    if (erro.length > 0) {
      alert(erro);
      setErro("");
    }
  }, [usuario, erro]);

  return (
    <Layout>
      <Head>
        <title>JamStack com Next.js</title>
      </Head>
      <main>
        <h1>Olá, bem vindo ao meu projeto final de disciplina usando Front-end Jamstack com Next.js [23E4_3]</h1>
        <h2>Roteiro:</h2>
        <h3>1- O menu Usuário 1 apresenta exemplo de uso de "GetServerSideProps"</h3>
        <h3>2- O menu Usuário 2 apresenta exemplo de uso de "GetStaticProps"</h3>
        <h3>3- O menu Lista dinâmica, apresenta uma lista de usuários com a utilização de rota gerada dinâmicamente."</h3>
        <h3>4- O menu Imagem apresenta uma simples utilização do componente next/image.</h3>
        <h3>5- O menu Galeria e imagens apresenta outra forma de trabalhar imagens, renderizadas no lado cliente.</h3>
        <h3>6- O menu Blog, contem interação entre as imagens e texto, abrindo uma segunda página ao clicar no texto em destaque</h3>
        <h3>7- O menu Login, apresenta uma forma de controlar o acesso restrito a partes do site. O login está utilizando os memos apresentados em aula.</h3>
        <h3>como por exemplo "machado@abl.org.br"</h3>
      </main>
    </Layout>
  );
}
