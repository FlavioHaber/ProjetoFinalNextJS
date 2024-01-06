import Link from 'next/link';
import '../styles/layout.css'
import '../styles/footer.css'
import Footer from '../components/footer'
import React, { ReactNode } from "react";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface Props {
    children?: ReactNode
    // any props that come into the component
}

export default function Layout({ children, ...Props }:Props) {
    return (
        <main className='layout'>
            <div className='header'>
                <h3>Estudos de Jamstack com NextJS</h3>
                <nav className='topnav'>
                    <Link href='/pagina0'>Apresentação</Link>
                    <Link href='/pagina1'>Usuário 1</Link>
                    <Link href='/pagina2'>Usuário 2</Link>
                    <Link href='/pagina3'>Lista dinâmica</Link>
                    <Link href='/pagina4'>Imagem</Link>
                    <Link href='/pagina5'>Galeria</Link>
                    <Link href='/blog/'>Blog</Link>
                    <Link href='/login'>Login</Link>
                </nav>
            </div>
            <div className={inter.className}>
                {children}
            </div>
            <Footer copyrightYear="2023"/>
        </main >
    )
}

