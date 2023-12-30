import Head from "next/head";
import Layout from "./components/layout";
import { useEffect } from "react";

export default function Pagina5() {

    //Client Side Rendering
    useEffect(() => {
        const collectionID = 928423;  //Beach & Coastal
        const galleryContainer = document.querySelector('.gallery-container');
        //galleryContainer.innerHTML = "";
        for (let i = 0; i < 18; i++) {
            fetch(`https://source.unsplash.com/collection/${collectionID}/480x480`)
                .then((response) => {
                    let galleryItem = document.createElement('span');
                    galleryItem.classList.add('gallery-item');
                    galleryItem.innerHTML = `<Image src="${response.url}" alt="gallery image"/>`
                    //galleryContainer.append(galleryItem);
                })
        }
    }, []);

    return (
        <Layout>
            <Head>
                <title>Página 5</title>
            </Head>
            <h1>Galeria de imagens</h1>
            <div className='gallery-container'>
            </div>
        </Layout>
    );
}
