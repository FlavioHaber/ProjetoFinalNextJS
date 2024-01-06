'use client';

import {useFormState, useFormStatus } from 'react-dom';
import { login } from  '../infra/usuarios';
import Link from 'next/link';
import '../../styles/login.module.css';


export default function LoginForm() {
    const [errorMessage, formAction] = useFormState(login, undefined);

    return (
        <div className="flex justify-center items-center">
            <div className='w-full flex items-center justify-center mt-10'>
                <form action={formAction} className='p-10 border rounded-lg w-96'>
                    <div className='flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8'>
                        <h1 className='text-3xl font-bold mb-4'>Entrar no Sistema</h1>
                        <div className='w-full'>
                            <div>
                                <label className='mb-3 mt-5 block text-xs font-medium text-gray-900' htmlFor="email">
                                    Email
                                </label>
                                <div className="relative">
                                    <input className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                        id="email" type="email" name="email" required />
                                </div>
                            </div>
                            <br/>
                            <div className="mt-4">
                                <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="senha">
                                    Password
                                </label>
                                <div className="relative">
                                    <input className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                        id="senha" type="password" name="senha" required minLength={6} />
                                </div>
                            </div>
                        </div>
                        <div className="container py-5 px-5 mx-0 min-w-full flex flex-col items-center">
                            <button className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logar</button>
                        </div>
                        <div className="flex h-5 items-end space-x-1">
                            {errorMessage && (
                                <>
                                    <p className="text-sm text-red-500">{errorMessage}</p>
                                </>
                            )}
                        </div>
                        <div>
                            <br/>
                            <br/>
                            <button className="m-2 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-center">
                                    <Link href="/pagina0">Click aqui para voltar ao menu</Link>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

}