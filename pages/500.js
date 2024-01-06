import Layout from '../components/layout';

export default function Custom500() {
  return (
          <Layout>
              <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                    <h1>Olá, ocorreu algum erro não esperado.</h1>
                    <h3>500 - Server-side error occurred</h3>        
                </div>
              </main>
          </Layout>
    )
  }