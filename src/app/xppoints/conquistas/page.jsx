import React from "react";
import Link from "next/link";

const HistoricoPage = () => {
  return (
    <div className="flex flex-col px-8 mt-5 md:w-250 md:mx-auto">
        <header className="flex flex-col gap-3">
            <Link href="/xppoints" className="text-xl">&larr; Voltar</Link>
            <h2 className="font-semibold text-4xl mb-4">
            Conquistas
            </h2>
        </header>
        <main>
            <p className="mb-2">Você não possui conquistas</p>
            <button className="bg-red-400 rounded-xl p-2 border-2 border-red-300 hover:scale-105 cursor-pointer transition">Ver todas</button>
        </main>
    </div>

  )}

  export default HistoricoPage;