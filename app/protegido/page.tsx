import { signOut } from '@/auth';
import LoginFormAdd from '../lib/ui/login-form-add'
import LoginFormAdd1 from '../lib/ui/login-form-add1'
import Layout from '../../pages/components/layout'

export default function Protegido() {
  return (
    <Layout>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
              <div>
                  <h1>Área Protegida</h1>
                  <form action={async () => { 'use server'; await signOut(); }} method="post">
                      <button className="m-2 bg-red-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Logout
                      </button>
                  </form>
              </div>
            <div className="container py-5 px-5 mx-0 min-w-full flex flex-col items-center">
                <LoginFormAdd1 />
            </div>
          </div>
        </main>
    </Layout>
  )
}
