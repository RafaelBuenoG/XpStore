'use client';

import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBox,
  faClock,
  faTools,
  faCheckDouble,
  faCreditCard,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

const faqs = [
  {
    id: 'duvida1',
    icon: faBox,
    question: 'Como funciona a entrega?',
    answer:
      'O prazo depende da sua localização e do tipo de frete escolhido (econômico ou expresso). Para capitais, a entrega pode ocorrer em até 3 dias úteis. Utilizamos transportadoras confiáveis e Correios. Jogos digitais são enviados por e-mail em até 1 hora após a confirmação do pagamento.',
  },
  {
    id: 'duvida2',
    icon: faClock,
    question: 'Os produtos têm garantia?',
    answer:
      'Sim. Todos os acessórios e periféricos contam com garantia mínima de 3 meses. Produtos com garantia estendida terão essa informação destacada na página.',
  },
  {
    id: 'duvida3',
    icon: faTools,
    question: 'Vocês têm suporte técnico?',
    answer:
      'Oferecemos suporte básico por e-mail e chat. Para problemas técnicos com jogos ou dispositivos, encaminhamos para o suporte oficial da marca.',
  },
  {
    id: 'duvida4',
    icon: faCheckDouble,
    question: 'Os produtos são originais?',
    answer:
      'Sim, todos os nossos produtos são 100% originais, com nota fiscal e garantia do fabricante. Trabalhamos com as principais marcas do mercado gamer, como Logitech, Razer, Corsair, HyperX e Redragon.',
  },
  {
    id: 'duvida5',
    icon: faCreditCard,
    question: 'Quais formas de pagamento vocês aceitam?',
    answer:
      'Aceitamos cartão de crédito (Visa, MasterCard, Elo, Amex), boleto bancário, Pix e carteiras digitais como Mercado Pago e PayPal. O pagamento via Pix é aprovado na hora. Parcelamentos podem ser feitos em até 12x no cartão com ou sem juros, dependendo da promoção vigente.',
  },
];

export default function FAQSection() {
  const [activeId, setActiveId] = useState(null);
  const contentRefs = useRef({});

  // Guarda alturas atualizadas para cada item
  const [heights, setHeights] = useState({});

  const calculateHeight = (id) => {
    const el = contentRefs.current[id];
    if (el) {
      return el.scrollHeight;
    }
    return 0;
  };

  // Quando abrir ou fechar, atualiza altura para animação correta
  useEffect(() => {
    if (activeId) {
      const h = calculateHeight(activeId);
      setHeights((prev) => ({ ...prev, [activeId]: h }));
    }
  }, [activeId]);

  // Recalcula altura ao redimensionar janela, para responsividade
  useEffect(() => {
    const handleResize = () => {
      if (activeId) {
        const h = calculateHeight(activeId);
        setHeights((prev) => ({ ...prev, [activeId]: h }));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeId]);

  // Toggle abrir/fechar
  const toggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-zinc-900 text-white py-6 mt-6">
      <h2 className="text-2xl text-center md:text-3xl">Perguntas Frequentes</h2>
      <div className="max-w-4xl mx-auto px-4 space-y-4">
        {faqs.map(({ id, icon, question, answer }) => {
          const isActive = activeId === id;
          return (
            <div key={id} className="border-b border-gray-700">
              <h2>
                <button
                  onClick={() => toggle(id)}
                  aria-expanded={isActive}
                  aria-controls={`${id}-content`}
                  className="w-full flex items-center justify-between py-4 text-left transition-colors duration-300 cursor-pointer hover:text-red-400"
                >
                  <span className="flex items-center gap-3">
                    <FontAwesomeIcon icon={icon} />
                    {question}
                  </span>
                  <FontAwesomeIcon icon={isActive ? faChevronUp : faChevronDown} />
                </button>
              </h2>
              <div
                id={`${id}-content`}
                ref={(el) => (contentRefs.current[id] = el)}
                style={{
                  height: isActive ? heights[id] || 'auto' : 0,
                  overflow: 'hidden',
                  transition: 'height 0.3s ease',
                }}
              >
                <div className="py-2 text-sm font-semibold text-gray-300">{answer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
