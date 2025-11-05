'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function CategoryCarousel({ title, categories }) {
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
    <section className="relative w-full md:px-10 py-2">
      <h2 className="text-2xl mt-4 md:mt-8 md:text-3xl">{title}</h2>
      {!isMobile && (
        <>
          <button
            onClick={() => scroll('left')}
            className="flex items-center justify-center absolute -left-6 top-[60%] -translate-y-1/2 z-10 bg-white/60 w-12 h-12 rounded-full hover:bg-gray-100 cursor-pointer duration-200"
            >
            <FontAwesomeIcon icon={faChevronLeft} className="text-2xl"/>
          </button>
          <button
            onClick={() => scroll('right')}
            className="flex items-center justify-center absolute -right-6 top-[60%] -translate-y-1/2 z-10 bg-white/60 w-12 h-12 rounded-full hover:bg-gray-100 cursor-pointer duration-200"
            >
            <FontAwesomeIcon icon={faChevronRight} className="text-2xl"/>
          </button>
        </>
      )}

      <div
        ref={scrollRef}
        className={`
          flex gap-4 scroll-smooth
          ${isMobile ? 'overflow-x-auto' : 'overflow-x-hidden'}
          md:px-2 py-2
        `}
      >
        {categories.map((cat, idx) => (
          <Link
            key={idx}
            href={`/categoria/${cat.slug}`}
            className="flex flex-col items-center justify-center w-24 flex-shrink-0 text-center group hover:scale-105 transition"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 transition">
              <Image
                src={cat.icon}
                alt={cat.name}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <span className="text-sm mt-2 font-medium">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
