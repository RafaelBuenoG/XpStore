import React from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from '@/components/Nav';
import BottomNav from '@/components/BottomNav';
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faCartPlus, faCreditCard, faStar, faStarHalfAlt, faTruck } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

const ProdutoPage = () => {
  return (
    <>
        <Nav />
            <main className="flex flex-col px-6 py-5 text-xl mx-auto w-100 mb-15">
                <section>
                    <div>
                        <FontAwesomeIcon color="yellow" icon={faStar} />
                        <FontAwesomeIcon color="yellow" icon={faStar} />
                        <FontAwesomeIcon color="yellow" icon={faStar} />
                        <FontAwesomeIcon color="yellow" icon={faStarHalfAlt} />
                        <FontAwesomeIcon color="yellow" icon={faStarRegular} />
                    </div>
                    <h1>Action Figure Kratos</h1>
                    <div>
                        <Image className="w-100 h-90 object-cover" src="/products/kratos.webp" width={100} height={100} />
                    </div>
                </section>
                <section className="text-base mt-5 space-y-3">
                    <div className="flex space-x-1">
                        <span>R$</span>
                        <h2 className="text-5xl font-bold">299</h2>
                        <span>90</span>
                    </div>
                    <div>
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faCreditCard} />
                            <p>Em até 12x de R$ 24,99 sem juros</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faTruck} />
                            <p>Frete grátis para todo Brasil</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex gap-3 mt-5">
                        <input type="number" defaultValue={1} className="bg-gray-800 w-30 h-12 p-2 rounded-2xl text-center" />
                        <button className="bg-gray-800 w-53 h-12 p-2 rounded-2xl text-center text-lg" >
                            <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
                            Carrinho</button>
                    </div>
                    <div className="mt-5">
                        <button className="bg-green-700 w-86 h-12 p-2 rounded-2xl text-center text-lg">
                            <FontAwesomeIcon icon={faBasketShopping} className="mr-2" />
                            Comprar</button>
                    </div>
                </section>
                <section className="flex gap-2 mt-5 p-5 w-86 rounded-2xl bg-gray-800">
                    <div className="flex flex-col gap-2">
                        <h2>Calcular Frete</h2>
                        <input className="w-50" type="text" placeholder="00000-000"/>
                    </div>
                    <button className="mt-3 py-3 px-5 text-base rounded-2xl bg-red-400">Calcular</button>
                </section>
                <section className="mt-5 space-y-4">
                    <h2 className="text-3xl font-bold">Descrição</h2>
                    <p className="text-base text-white-400">Traga o poder do Deus da Guerra para sua coleção com esta incrível action figure do Kratos! Rica em
                detalhes, com acabamento de alta qualidade e pose imponente, é o item perfeito para fãs da saga God of
                War. Ideal para exibição ou presentear quem é apaixonado por games e mitologia.</p>
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
                        <p className="text-base">Simplesmente espetacular! Os detalhes do Kratos são impressionantes e a pintura é de ótima qualidade.
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
                            <span className="text-base">Juliana Costa</span>
                        </div>
                        <p className="mt-3 mb-2">Incrível!</p>
                        <p className="text-base">Gostei bastante da action figure. A escultura é fiel ao personagem e veio exatamente como na
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
                        <p className="text-base">Simplesmente amei essa action figure do Kratos e Atreus! A escultura é extremamente detalhada, com pintura impecável e fiel aos personagens do jogo.
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
                        <p className="text-base">Achei boa, mas esperava um pouco mais. A escultura dos personagens está bonita, principalmente do Kratos,
                            porém notei que alguns detalhes na pintura vieram um pouco borrados, especialmente no rosto do Atreus. Além disso, senti falta de mais acessórios,como uma base mais elaborada ou armas extras. Ainda assim, é um item legal para fãs, mas poderia ter mais capricho pelo valor.</p>
                    </div>
                </section>
            </main>
        <BottomNav />
    </>
  )}

  export default ProdutoPage;