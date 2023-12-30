'use client';
import { useState } from 'react';

export default function MyForm() {
  const [inputNome, setInputNome] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputSenha, setInputSenha] = useState('');
  const [inputError, setInputError] = useState('');

  function handleInputChangeNome(event:any) {
    const value = event.target.value;
    setInputNome(value);

    if (value.length < 5) {
      setInputError('O nome deve ter mais que 4 caracteres');
    } else {
      setInputError('');
    }

    if (value.length > 80) {
        setInputError('O nome não deve ter mais que 80 caracteres');
      } else {
        setInputError('');
      }
  }

  function handleInputChangeEmail(event:any) {
    const value = event.target.value;
    setInputEmail(value);

    if (value.length == 0) {
      setInputError('O email deve ser preenchido');
    } else {
      setInputError('');
    }
  }

  function handleInputChangeSenha(event:any) {
    const value = event.target.value;
    setInputSenha(value);

    if (value.length < 6) {
      setInputError('A senha deve ter no mínimo 6 caracteres.');
    } else {
      setInputError('');
    }
  }

  function handleSubmit(event:any) {
    event.preventDefault();

    // Neste local deverá ser incluido a rotina de gravação no banco de dados

     alert("tudo ok até aqui!" + " -> " + inputNome + " -> " + inputEmail + ' -> ' + inputSenha)
     alert("A rotina de gravação ao Banco de Dados ainda não foi implementada.")
  }

  return (
    <form onSubmit={handleSubmit}>
        <div className='flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8'>
            <h1 className='mb-3 text-2xl'>Cadastrar Usuário</h1>
            <div className='w-full'>
                <div>
                    <label className='mb-3 mt-5 block text-xs font-medium text-gray-900' htmlFor="nome">
                        Nome do usuário
                    </label>
                    <div className="relative">
                        <input className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="nome" type="text" name="nome" required maxLength={80} onChange={handleInputChangeNome}/>
                    </div>
                </div>
                <div>
                    <label className='mb-3 mt-5 block text-xs font-medium text-gray-900' htmlFor="email">
                        Email
                    </label>
                    <div className="relative">
                        <input className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="email" type="email" name="email" required pattern='/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
                            onChange={handleInputChangeEmail}/>
                    </div>
                </div>
                <div className="mt-4">
                    <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="senha">
                        Password
                    </label>
                    <div className="relative">
                        <input className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="senha" type="password" name="senha" required minLength={6} onChange={handleInputChangeSenha}/>
                    </div>
                </div>
            </div>
            <div className="container py-5 px-5 mx-0 min-w-full flex flex-col items-center">
                <button type='submit' className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Incluir</button>
            </div>
                <div className="flex h-5 items-end space-x-1">
                    {inputError && <div style={{ color: 'red' }}>{inputError}</div>}
                </div>
       </div> 
    </form>
  );
} 