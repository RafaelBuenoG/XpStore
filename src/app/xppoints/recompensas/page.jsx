import React from "react";
import Link from "next/link";

const RecompensasPage = () => {
  return (
    <div className="flex flex-col px-8 mt-5 md:w-250 md:mx-auto">
        <header className="flex flex-col gap-3">
            <Link href="/xppoints" className="text-xl">&larr; Voltar</Link>
            <h2 className="font-semibold text-4xl mb-4">
            Recompensas
            </h2>
        </header>
        <main>
            <div className='flex justify-between items-center space-x-5'>
                <p>10% de desconto na próxima compra</p>
                <button className="bg-red-400 rounded-xl p-2 border-2 border-red-300 hover:scale-105 cursor-pointer transition">Resgatar</button>
            </div>
        </main>
    </div>

  )}

  export default RecompensasPage;