'use client'

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from '@/components/Nav';
import BottomNav from '@/components/BottomNav';
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faCartPlus, faCreditCard, faStar, faStarHalfAlt, faTruck } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import CalculadorFrete from "@/components/CalculadorFrete";


const ProdutoPage = () => {

  return (
    <>
      <Nav />
      <main className="flex flex-col px-6 py-5 text-xl mx-auto w-full mb-15 max-w-6xl">
        <section className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 space-y-4">
            <div className="flex">
              <FontAwesomeIcon color="yellow" icon={faStar} />
              <FontAwesomeIcon color="yellow" icon={faStar} />
              <FontAwesomeIcon color="yellow" icon={faStar} />
              <FontAwesomeIcon color="yellow" icon={faStarHalfAlt} />
              <FontAwesomeIcon color="yellow" icon={faStarRegular} />
            </div>
            <h1 className="text-2xl font-bold">Action Figure Kratos</h1>
            <div>
              <Image
                className="w-full h-auto object-cover rounded-lg"
                src="/products/kratos.webp"
                width={500}
                height={500}
                alt="Action Figure Kratos"
              />
            </div>
          </div>


          <div className="md:w-1/2 md:justify-center flex flex-col justify-start space-y-5">
            <div className="flex items-baseline space-x-1">
              <span>R$</span>
              <h2 className="text-5xl font-bold">299</h2>
              <span>90</span>
            </div>
            <div className="flex items-center space-x-2 text-base">
              <FontAwesomeIcon icon={faCreditCard} />
              <p>Em até 12x de R$ 24,99 sem juros</p>
            </div>
            <div className="flex items-center space-x-2 text-base">
              <FontAwesomeIcon icon={faTruck} />
              <p>Frete grátis para todo Brasil</p>
            </div>

            <div className="flex gap-3 mt-5">
              <input
                type="number"
                defaultValue={1}
                min={1}
                max={99}
                className="bg-[#a9b4c0] dark:bg-[#24292E] w-24 h-12 p-2 rounded-2xl text-center"
              />
              <button className="bg-[#a9b4c0] dark:bg-[#24292E] flex-1 h-12 p-2 rounded-2xl text-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 duration-200">
                <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
                Carrinho
              </button>
            </div>
            <div>
              <button className="bg-green-700 w-full h-12 p-2 rounded-2xl text-lg flex items-center justify-center cursor-pointer hover:bg-green-600 duration-200">
                <FontAwesomeIcon icon={faBasketShopping} className="mr-2" />
                Comprar
              </button>
            </div>
            <CalculadorFrete />
        </div>
        </section>

        {/* Descrição */}
        <section className="mt-10 space-y-4">
          <h2 className="text-3xl font-bold">Descrição</h2>
          <p className="text-base text-gray-400">
            Traga o poder do Deus da Guerra para sua coleção com esta incrível
            action figure do Kratos! Rica em detalhes, com acabamento de alta
            qualidade e pose imponente, é o item perfeito para fãs da saga God of
            War. Ideal para exibição ou presentear quem é apaixonado por games e
            mitologia.
          </p>
        </section>
        <section className="mt-5 space-y-4">
                    <h2 className="text-3xl font-bold">Avaliações</h2>
                    <div>
                        <div>
                            <FontAwesomeIcon color="yellow" icon={faStar} />
                            <FontAwesomeIcon color="yellow" icon={faStar} />
                            <FontAwesomeIcon color="yellow" icon={faStar} />
                            <FontAwesomeIcon color="yellow" icon={faStar} />
                            <FontAwesomeIcon color="yellow" icon={faStar} />
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                            <Image className="w-10" src="/avatarPerfil.png" width={100} height={100}/>
                            <span className="text-base">João Silva</span>
                        </div>
                        <p className="mt-3 mb-2">Adorei!</p>
                        <p className="text-base text-gray-400">Simplesmente espetacular! Os detalhes do Kratos são impressionantes e a pintura é de ótima qualidade.
                            Chegou rápido e muito bem embalado. Já virou destaque na minha estante!</p>
                    </div>
                    <div>
                        <div>
                            <FontAwesomeIcon color="yellow" icon={faStar} />
                            <FontAwesomeIcon color="yellow" icon={faStar} />
                            <FontAwesomeIcon color="yellow" icon={faStar} />
                            <FontAwesomeIcon color="yellow" icon={faStar} />
                            <FontAwesomeIcon color="yellow" icon={faStarHalfAlt} />
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                            <Image className="w-10" src="/avatarPerfil.png" width={100} height={100}/>
                            <span className="text-base ">Juliana Costa</span>
                        </div>
                        <p className="mt-3 mb-2">Incrível!</p>
                        <p className="text-base text-gray-400">Gostei bastante da action figure. A escultura é fiel ao personagem e veio exatamente como na
                            descrição. Só achei que poderia vir com mais um acessório, mas ainda assim vale muito a pena</p>
                    </div>
                    <div>
                        <div>
                            <FontAwesomeIcon color="yellow" icon={faStar} />
                            <FontAwesomeIcon color="yellow" icon={faStar} />
                            <FontAwesomeIcon color="yellow" icon={faStar} />
                            <FontAwesomeIcon color="yellow" icon={faStar} />
                            <FontAwesomeIcon color="yellow" icon={faStarRegular} />
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                            <Image className="w-10" src="/avatarPerfil.png" width={100} height={100}/>
                            <span className="text-base">João Silva</span>
                        </div>
                        <p className="mt-3 mb-2">Perfeito!</p>
                        <p className="text-base text-gray-400">Simplesmente amei essa action figure do Kratos e Atreus! A escultura é extremamente detalhada, com pintura impecável e fiel aos personagens do jogo.
                            O acabamento nas roupas e nas armas é incrível, e ela fica linda na prateleira. Veio super bem embalada e exatamente como na descrição. Vale cada centavo para quem é fã da franquia God of War!</p>
                    </div>
                    <div>
                        <div>
                            <FontAwesomeIcon color="yellow" icon={faStar} />
                            <FontAwesomeIcon color="yellow" icon={faStar} />
                            <FontAwesomeIcon color="yellow" icon={faStar} />
                            <FontAwesomeIcon color="yellow" icon={faStarRegular} />
                            <FontAwesomeIcon color="yellow" icon={faStarRegular} />
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                            <Image className="w-10" src="/avatarPerfil.png" width={100} height={100}/>
                            <span className="text-base">Mario de Andrade</span>
                        </div>
                        <p className="mt-3 mb-2">Satisfatório</p>
                        <p className="text-base text-gray-400">Achei boa, mas esperava um pouco mais. A escultura dos personagens está bonita, principalmente do Kratos,
                            porém notei que alguns detalhes na pintura vieram um pouco borrados, especialmente no rosto do Atreus. Além disso, senti falta de mais acessórios,como uma base mais elaborada ou armas extras. Ainda assim, é um item legal para fãs, mas poderia ter mais capricho pelo valor.</p>
                    </div>
                </section>

      </main>
      <Footer />
      <BottomNav />
    </>
  );
};

export default ProdutoPage;
