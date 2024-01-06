import Layout from "../components/layout";
import Head from "next/head";
import Image from "next/image";

export default function Pagina3(props:any) {
    return (
        <Layout>
            <Head>
                <title>Imagem</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>Imagens 1</h1>
                <div style={{ width: 500, height: 200, position: 'relative' }}>
                    <Image
                        src='https://images.unsplash.com/photo-1605460375648-278bcbd579a6'
                        alt='A beautiful English Setter'
                        layout='fill'
                        objectFit='cover'
                    />
                    
                </div>
            </main>
        </Layout>
    );
}