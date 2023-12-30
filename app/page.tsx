import Link from 'next/link';
import Layout from '../pages/components/layout'

export default function Home() {
  return (
    <Layout>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <h1>Estudos de Jamstack com Next.js</h1>
          <Link href="/protegido">Acesso a Área protegida.</Link>
      </div>
    </main>
    </Layout>
  )
}
