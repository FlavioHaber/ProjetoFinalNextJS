import Link from 'next/link';
import '../styles/layout.css'
import '../styles/footer.module.css'
import Footer from './footer'

export default function Layout({ children }) {
    return (
        <main className='layout'>
            <div className='header'>
                <h3>Estudos de Jamstack - Next.js</h3>
                <nav className='topnav'>
                    <Link href="/pagina0">Apresentação</Link>
                    <Link href="/pagina1">Usuário 1</Link>
                    <Link href="/pagina2">Usuário 2</Link>
                    <Link href="/pagina3">Lista dinâmica</Link>
                    <Link href="/pagina4">Imagem</Link>
                    <Link href="/pagina5">Galeria de Imagens</Link>
                    <Link href="/blog/">Blog</Link>
                    <Link href="/">Login</Link>
                </nav>
            </div>
            <div className='main'>
                {children}
            </div>
            <Footer coyrightYear="2023"/>
        </main >
    )
}

