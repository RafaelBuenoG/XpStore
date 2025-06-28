'use client';

import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import Image from 'next/image';

export default function SobrePage() {
  return (
    <>
      <Nav />
      <main className="text-white bg-black font-sans px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Sobre nós</h1>
        <p className="max-w-3xl mx-auto text-gray-300 text-center mb-10">
          Bem-vindo à XP Store, o seu destino definitivo para tudo relacionado ao mundo dos games! Somos apaixonados por videogames e queremos oferecer a melhor experiência para gamers de todos os níveis e estilos.
        </p>

        <section className="max-w-4xl mx-auto mb-10">
          <h2 className="text-2xl font-semibold mb-2">Quem Somos?</h2>
          <p className="text-gray-400">
            Somos uma equipe de entusiastas de tecnologia e jogos que decidiu transformar essa paixão em um marketplace completo. Desde os clássicos nostálgicos até os lançamentos mais aguardados, reunimos tudo o que você precisa para elevar sua experiência gamer.
          </p>
        </section>

        <section className="max-w-4xl mx-auto mb-10">
          <h2 className="text-2xl font-semibold mb-2">Nossa Missão</h2>
          <p className="text-gray-400">
            Nossa missão é proporcionar aos jogadores os melhores produtos, preços justos e um atendimento excepcional. Trabalhamos com as principais marcas do mercado para garantir que você tenha acesso a consoles, acessórios, periféricos e jogos de qualidade.
          </p>
        </section>

        <section className="max-w-4xl mx-auto mb-10">
          <h2 className="text-2xl font-semibold mb-2">Por que escolher a gente?</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li><strong className="text-white">Variedade e Qualidade:</strong> Um catálogo extenso com produtos para todas as plataformas.</li>
            <li><strong className="text-white">Preços Competitivos:</strong> Ofertas e promoções imperdíveis para que você aproveite ao máximo sem pesar no bolso.</li>
            <li><strong className="text-white">Segurança e Confiabilidade:</strong> Transações seguras e um suporte sempre pronto para ajudar.</li>
            <li><strong className="text-white">Entrega Rápida:</strong> Enviamos para todo o Brasil com agilidade e cuidado.</li>
          </ul>
        </section>

        <section className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">Integrantes do Projeto</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
            {[
              { nome: 'Rafael Bueno Gonzales', foto: 'Rafael.jpg' },
              { nome: 'Miguel da Costa Arao', foto: 'Miguel.jpg' },
              { nome: 'João Ribeiro de Avila Corsini', foto: 'João.jpg' },
              { nome: 'Jeferson Farias Lopes Valente', foto: 'Jeferson.jpg' },
              { nome: 'Lucas Richard Domingues Da Silva', foto: 'Lucas.jpg' }
            ].map((membro, index) => (
              <div key={index}>
                <Image
                  src={`/integrantes/${membro.foto}`}
                  alt={membro.nome}
                  width={120}
                  height={120}
                  className="mx-auto object-cover w-50 h-60 rounded-2xl"
                />
                <p className="mt-2 text-sm text-gray-300">{membro.nome}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 
