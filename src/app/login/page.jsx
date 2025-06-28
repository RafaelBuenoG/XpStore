'use client'

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrar, setLembrar] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      newErrors.email = 'Digite um e-mail válido.';
    }

    if (senha.length < 8 || senha.length > 30) {
      newErrors.senha = 'A senha deve conter entre 8 e 30 caracteres.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      router.push('/');
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 px-4">
      <div className="bg-zinc-800 text-white p-6 rounded-3xl w-full max-w-md shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Entrar na sua conta</h1>
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 rounded-full bg-zinc-700 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="senha" className="block text-sm font-medium">Senha</label>
            <input
              type="password"
              id="senha"
              placeholder="Digite sua Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full mt-1 px-4 py-2 rounded-full bg-zinc-700 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            {errors.senha && <p className="text-red-400 text-sm mt-1">{errors.senha}</p>}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="lembrar"
              checked={lembrar}
              onChange={(e) => setLembrar(e.target.checked)}
              className="mr-2 cursor-pointer"
            />
            <label htmlFor="lembrar" className="text-sm cursor-pointer">Lembrar de mim</label>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-zinc-900 font-semibold py-2 rounded-full hover:bg-red-400 transition-colors cursor-pointer"
          >
            Entrar
          </button>
        </form>
        <p className="text-sm text-center mt-5">
          Não tem uma conta? <Link href="/criarconta" className="text-red-400 hover:underline">Criar Conta</Link>
        </p>
      </div>
    </main>
  );
}
