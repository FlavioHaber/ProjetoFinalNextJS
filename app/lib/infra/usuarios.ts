'use server';

import { signIn } from '@/auth';
import { sign } from 'crypto';
import { AuthError } from 'next-auth';

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

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






