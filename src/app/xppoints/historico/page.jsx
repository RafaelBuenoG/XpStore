import React from "react";
import Link from "next/link";

const HistoricoPage = () => {
  return (
    <div className="flex flex-col px-8 mt-5 md:w-250 md:mx-auto">
        <header className="flex flex-col gap-3">
            <Link href="/xppoints" className="text-xl">&larr; Voltar</Link>
            <h2 className="font-semibold text-4xl mb-4">
            Histórico
            </h2>
        </header>
        <main>
            <div className='flex justify-between'>
                <p>Compra: GTA V</p>
                <span>+170 XP</span>
            </div>
            <div className='flex justify-between'>
                <p>Compra: The Witcher 3</p>
                <span>+200 XP</span>
            </div>
        </main>
    </div>

  )}

  export default HistoricoPage;