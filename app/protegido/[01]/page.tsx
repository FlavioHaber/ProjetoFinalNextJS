'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Layout from "@/components/layout";
import { putUsuarios } from '@/lib/infra/usuarios';
import Link from 'next/link';

export default function CadastroLogin() {

  const router = useRouter()

  const [nome, setNome] = useState('')  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    alert(nome+" "+email+" "+password)
    const result = putUsuarios(nome,email,password)

    alert("Inclusão realizada com sucesso!")
  
    router.refresh()
    router.push('/protegido')
     
  }

  return (
    <Layout>
    <div className="flex justify-center items-center">
          <div className='w-full flex items-center justify-center mt-10'>
              <form className='p-10 border rounded-lg w-96' onSubmit={handleLogin}>
                <h1 className='text-3xl font-bold mb-4'>Cadastrar Login</h1>
                <p className='text-sm text-slate-700 mb-10'>Informe login para continuar.</p>
                <div className='flex flex-col'>
                    <div className='flex flex-col gap-1 mb-6'>
                        <label htmlFor="nome">Nome</label>
                        <input
                          type="text"
                          name="nome"
                          onChange={(e) => setNome(e.target.value)}
                          className="border rounded w-full p-3"
                        />
                      </div>
                      <div className='flex flex-col gap-1 mb-6'>
                        <label htmlFor="email">E-mail</label>
                        <input
                          type="email"
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                          className="border rounded w-full p-3"
                        />
                      </div>
                      <div className='flex flex-col gap-1 mb-6'>
                        <label htmlFor="password">Senha</label>
                        <input
                          type="password"
                          name="password"
                          onChange={(e) => setPassword(e.target.value)}
                          className="border rounded w-full p-3"
                        />
                      </div>
                  {error && <span className="text-red-400 text-sm block mt-2">{error}</span>}
                  <button type='submit' className='mt-10 bg-rose-950 text-slate-50 p-3 rounded'>
                    Incluir
                  </button>
                  <button type='button' className='mt-10 bg-green-950 text-slate-50 p-3 rounded'>
                        <Link href="/protegido/">RETORNAR</Link>
                  </button>
                </div>
              </form>
        </div>
        
    </div>
    </Layout>
  )
}
 