'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';
import type { Usuario } from '../../lib/domain/usuarios'; 

export async function login(prevState: string | undefined, formData: FormData,) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            return 'Login Inválido.';
        }
        throw error;
    }
}


export async function getUsuarioPorEmail(email: string): Promise<Usuario | undefined> {
    try {
        const usuario = await sql<Usuario>`SELECT * FROM usuarios WHERE email=${email}`;
        return usuario.rows[0];
    } catch (erro) {
        console.error('Erro na consulta de usuario:', erro);
        throw new Error('Erro na consulta de usuario.');
    }
}

export async function getUsuarios(): Promise<Usuario | undefined> {
    try {
        const usuarios = await sql`SELECT * FROM usuarios`;
        return usuarios.rows;
    } catch (erro) {
        console.error('Erro na consulta de usuario:', erro);
        throw new Error('Erro na consulta de usuario.');
    }
}

export async function putUsuarios(nome: string, email: string, senha: string) {
    try {
        let hashedPassword = await bcrypt.hash(`${senha}`, 10);
        let result = await sql`
             INSERT INTO usuarios (nome, email, senha)
             VALUES (${nome}, ${email}, ${hashedPassword})
             ON CONFLICT (id) DO NOTHING;
         `;
    } catch (error) {
       console.error('Erro na inclusão do usuario:', error);
       throw new Error('Erro na inclusão do usuario.');
    }
}





