'use client'

import React, { useState } from "react";
import Image from 'next/image';
import BottomNav from '@/components/BottomNav';

const XpPage = () => {
  const [xpAtual, setXpAtual] = useState(350);
  const xpNecessario = 1000;
  const porcentagem = Math.min((xpAtual / xpNecessario) * 100, 100);

  const [view, setView] = useState("main"); // controla a "página" atual

  return (
    <main className="px-8 mt-8">
      {view === "main" && (
        <>
          {/* Header principal */}
          <header className="flex flex-col gap-6">
            <section>
              <div className="flex items-center gap-6">
                <Image src="/avatarPerfil.png" width={80} height={80} alt="Avatar" />
                <span className="text-xl">Usuário</span>
              </div>
            </section>
            <section className="w-full max-w-md mx-auto p-4 bg-gray-900 text-white rounded-xl shadow-lg">
              <h2 className="text-lg font-bold mb-2">Nível 5 - Explorador</h2>
              <div className="w-full bg-gray-700 rounded-full h-6 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-6 transition-all duration-500"
                  style={{ width: `${porcentagem}%` }}
                ></div>
              </div>
              <p className="mt-2 text-sm text-gray-300">
                {xpAtual} XP / {xpNecessario} XP
              </p>
            </section>
          </header>

          {/* "atalhos" para as subpáginas */}
          <section className="flex flex-col gap-8 mt-8">
            <div onClick={() => setView("historico")}>
              <h2 className="font-semibold cursor-pointer">
                Histórico &gt;
              </h2>
                <div className='flex justify-between'>
                    <p>Compra: GTA V</p>
                    <span>+170 XP</span>
                </div>
                <div className='flex justify-between'>
                    <p>Compra: The Witcher 3</p>
                    <span>+200 XP</span>
                </div>
            </div>
            <div onClick={() => setView("recompensas")}>
              <h2 className="font-semibold cursor-pointer">
                Recompensas &gt;
              </h2>
                <div className='flex justify-between items-center space-x-5'>
                    <p>10% de desconto na próxima compra</p>
                    <button className="bg-gray-900 rounded-xl p-2 border-2 border-gray-500">Resgatar</button>
                </div>
            </div>
            <div onClick={() => setView("conquistas")}>
              <h2 className="font-semibold cursor-pointer">
                Conquistas &gt;
              </h2>
                <p className="mb-2">Você não possui conquistas</p>
                <button className="bg-gray-900 rounded-xl p-2 border-2 border-gray-500">Ver todas</button>
            </div>
          </section>

          <BottomNav />
        </>
      )}

      {/* Página de Histórico */}
      {view === "historico" && (
        <section>
          <button
            onClick={() => setView("main")}
            className="mb-4 text-gray-500 font-semibold"
          >
            ← Voltar
          </button>
          <h2 className="font-semibold mb-4 text-4xl">Histórico</h2>
          <div className="flex justify-between">
            <p>Compra: GTA V</p>
            <span>+170 XP</span>
          </div>
          <div className="flex justify-between">
            <p>Compra: The Witcher 3</p>
            <span>+200 XP</span>
          </div>
        </section>
      )}

      {/* Página de Recompensas */}
      {view === "recompensas" && (
        <section>
          <button
            onClick={() => setView("main")}
            className="mb-4 text-gray-500 font-semibold"
          >
            ← Voltar
          </button>
          <h2 className="font-semibold mb-4 text-4xl">Recompensas</h2>
          <div className="flex justify-between items-center space-x-5">
            <p>10% de desconto na próxima compra</p>
            <button className="bg-gray-900 rounded-xl p-2 border-2 border-gray-500">
              Resgatar
            </button>
          </div>
        </section>
      )}

      {/* Página de Conquistas */}
      {view === "conquistas" && (
        <section>
          <button
            onClick={() => setView("main")}
            className="mb-4 text-gray-500 font-semibold"
          >
            ← Voltar
          </button>
          <h2 className="font-semibold mb-4 text-4xl">Conquistas</h2>
          <p className="mb-2">Você não possui conquistas</p>
          <button className="bg-gray-900 rounded-xl p-2 border-2 border-gray-500">
            Ver todas
          </button>
        </section>
      )}
    </main>
  );
};

export default XpPage;
