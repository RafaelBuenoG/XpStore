'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function ItemCarousel({ title, items }) {
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({
      left: dir === 'left' ? -300 : 300,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative w-full py-1 md:py-6 md:px-10">
      <h2 className="text-2xl mt-4 md:mt-8 md:text-3xl">{title}</h2>
      {/* Setas no desktop */}
      {!isMobile && (
      <>
        <button
          onClick={() => scroll('left')}
          className="flex items-center justify-center absolute -left-6 top-[60%] -translate-y-1/2 z-10 bg-white/60 w-12 h-12 rounded-full hover:bg-gray-100 cursor-pointer duration-200"
          >
          <FontAwesomeIcon icon={faChevronLeft} className="text-2xl text-black"/>
        </button>
        <button
          onClick={() => scroll('right')}
          className="flex items-center justify-center absolute -right-6 top-[60%] -translate-y-1/2 z-10 bg-white/60 w-12 h-12 rounded-full hover:bg-gray-100 cursor-pointer duration-200"
          >
          <FontAwesomeIcon icon={faChevronRight} className="text-2xl text-black"/>
        </button>
      </>
      )}

      {/* Lista de itens */}
      <div
        ref={scrollRef}
        className={`
          flex gap-4 scroll-smooth
          ${isMobile ? 'overflow-x-auto' : 'overflow-x-hidden'}
          px-2 py-2
        `}
      >
        {items.map((item, idx) => (
          <Link
            key={idx}
            href={`/produto/${item.slug}`}
            className="w-45 flex-shrink-0 bg-gray-900 rounded-xl shadow p-3 hover:scale-105 transition"
          >
            <div className="w-full h-32 relative rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 40vw, 160px"
                className="object-cover"
              />
            </div>

            <div className="mt-2 space-y-1">
              <h3 className="text-sm font-medium line-clamp-2">{item.name}</h3>

              {item.oldPrice && (
                <div className="text-xs text-gray-500 line-through mt-4">
                  {item.oldPrice.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </div>
              )}

              <div className="flex items-center gap-2 mt-1">
                <span className="text-base font-semibold text-white">
                  {item.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </span>
                {item.oldPrice && (
                  <span className="text-xs text-green-600 font-semibold">
                    {getDiscount(item.oldPrice, item.price)}% OFF
                  </span>
                )}
              </div>

              {item.freeShipping && (
                <div className="text-[10px] text-white bg-green-500 w-fit px-2 py-[2px] rounded my-2">
                  Frete grátis
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function getDiscount(oldPrice, newPrice) {
  const discount = ((oldPrice - newPrice) / oldPrice) * 100;
  return Math.round(discount);
}
