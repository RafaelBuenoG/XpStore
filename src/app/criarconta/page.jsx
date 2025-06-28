'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function CreateAccount() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [aceito, setAceito] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;

    if (!emailRegex.test(email)) {
      newErrors.email = 'Digite um e-mail válido.';
    }

    if (senha.length < 8 || senha.length > 30) {
      newErrors.senha = 'A senha deve conter entre 8 e 30 caracteres.';
    }

    if (!telefoneRegex.test(telefone)) {
      newErrors.telefone = 'Digite um telefone válido no formato (XX) XXXXX-XXXX.';
    }

    if (!aceito) {
      newErrors.termos = 'Você deve aceitar os termos.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatarTelefone = (valor) => {
    valor = valor.replace(/\D/g, '');
    if (valor.length <= 10) {
      return valor.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3').trim();
    } else {
      return valor.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3').trim();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowModal(true);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 px-4">
      <div className="bg-zinc-800 text-white p-6 rounded-3xl w-full max-w-md shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Crie sua conta</h1>
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

          <div>
            <label htmlFor="telefone" className="block text-sm font-medium">Telefone</label>
            <input
              type="tel"
              id="telefone"
              placeholder="(XX) XXXXX-XXXX"
              value={telefone}
              onChange={(e) => setTelefone(formatarTelefone(e.target.value))}
              className="w-full mt-1 px-4 py-2 rounded-full bg-zinc-700 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            {errors.telefone && <p className="text-red-400 text-sm mt-1">{errors.telefone}</p>}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="termos"
              checked={aceito}
              onChange={(e) => setAceito(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="termos" className="text-sm">Aceito os termos</label>
          </div>
          {errors.termos && <p className="text-red-400 text-sm mt-1">{errors.termos}</p>}

          <button
            type="submit"
            className="w-full bg-white text-zinc-900 font-semibold py-2 rounded-full hover:bg-red-400 transition-colors"
          >
            Criar conta
          </button>
          <p className="text-sm text-center mt-2">
            Já tem uma conta? <Link href="/login" className="text-red-400 hover:underline">Entrar</Link>
          </p>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-zinc-800 text-white p-6 rounded-3xl w-full max-w-sm shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Sucesso</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-white hover:text-red-400"
              >
                &times;
              </button>
            </div>
            <p className="mb-4">Sua conta foi criada com sucesso!</p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-white text-zinc-900 font-semibold py-2 rounded-full hover:bg-red-400 transition-colors"
            >
              Concluir
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
