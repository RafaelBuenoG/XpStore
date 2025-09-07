'use client'

import React, { useState } from "react";
import Image from 'next/image';
import Nav from '@/components/Nav';
import BottomNav from '@/components/BottomNav';
import Link from "next/link";

const XpPage = () => {
  const [xpAtual, setXpAtual] = useState(350);
  const xpNecessario = 1000;
  const porcentagem = Math.min((xpAtual / xpNecessario) * 100, 100);

  return (
    <>
        <Nav className="hidden md:flex" />
        <main className="px-8 mt-8 md:w-250 md:mx-auto mb-20 md:mb-0">
            <header className="flex flex-col gap-6">
            <section>
                <div className="flex items-center gap-6">
                <Image src="/avatarPerfil.png" width={80} height={80} alt="Avatar" />
                <span className="text-xl md:text-2xl">Usuário</span>
                </div>
            </section>
            <section className="w-full mx-auto p-4 bg-gray-800 text-white rounded-xl shadow-lg">
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
            <section className="flex flex-col gap-8 mt-8">
            <Link href={"/xppoints/historico"} className="bg-gray-900 p-4 rounded-xl shadow-lg hover:bg-gray-800 transition-colors">
                <h2 className="font-semibold">
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
            </Link>
            <Link href={"/xppoints/recompensas"} className="bg-gray-900 p-4 rounded-xl shadow-lg hover:bg-gray-800 transition-colors">
                <h2 className="font-semibold">
                Recompensas &gt;
                </h2>
                <div className='flex justify-between items-center space-x-5'>
                    <p>10% de desconto na próxima compra</p>
                    <button className="bg-red-400 rounded-xl p-2 border-2 border-red-300 hover:scale-105 cursor-pointer transition">Resgatar</button>
                </div>
            </Link>
            <Link href={"/xppoints/conquistas"} className="bg-gray-900 p-4 rounded-xl shadow-lg hover:bg-gray-800 transition-colors">
                <h2 className="font-semibold">
                Conquistas &gt;
                </h2>
                <p className="mb-2">Você não possui conquistas</p>
                <button className="bg-red-400 rounded-xl p-2 border-2 border-red-300 hover:scale-105 cursor-pointer transition">Ver todas</button>
            </Link>
            </section>
        </main>
        <BottomNav />
    </>
  );
};

export default XpPage;
