'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const imagesDesktop = [
  '/slider/1-desk.png',
  '/slider/2-desk.png',
  '/slider/3-desk.png',
];

const imagesMobile = [
  '/slider/1-mob.png',
  '/slider/2-mob.png',
  '/slider/3-mob.png',
];

export default function DraggableAutoSlider() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [dragX, setDragX] = useState(0);
  const touchStartX = useRef(0);
  const containerWidth = useRef(0);
  const autoSlideInterval = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const images = isMobile ? imagesMobile : imagesDesktop;

  // Atualiza largura do container
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      containerWidth.current = containerRef.current.offsetWidth;
    }
  }, [isMobile]);

  // Auto slide com pausa ao arrastar
  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [current, images.length]);

  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideInterval.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
    }
  };

  const handleTouchStart = (e) => {
    stopAutoSlide();
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!containerWidth.current) return;
    const touchX = e.touches[0].clientX;
    const delta = touchX - touchStartX.current;
    setDragX(delta);
  };

  const handleTouchEnd = () => {
    if (!containerWidth.current) return;

    if (dragX < -containerWidth.current / 3) {
      setCurrent((prev) => Math.min(prev + 1, images.length - 1));
    } else if (dragX > containerWidth.current / 3) {
      setCurrent((prev) => Math.max(prev - 1, 0));
    }
    setDragX(0);
    startAutoSlide();
  };

  // Calcula translateX total (slide atual + arraste)
  const baseTranslate = -current * 100;
  const dragPercent = (dragX / containerWidth.current) * 100 || 0;
  const totalTranslate = baseTranslate + dragPercent;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-64 md:h-96 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-300 ease-out"
        style={{ transform: `translateX(${totalTranslate}%)` }}
      >
        {images.map((src, idx) => (
          <div key={idx} className="flex-shrink-0 w-full h-64 md:h-96 relative">
            <Image
              src={src}
              alt={`Slide ${idx + 1}`}
              fill
              className="object-cover"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>

      {/* Botões desktop */}
      {!isMobile && (
        <>
          <button
            onClick={() => {
              stopAutoSlide();
              setCurrent(current === 0 ? images.length - 1 : current - 1);
              startAutoSlide();
            }}
            className="flex items-center justify-center absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white w-12 h-12 cursor-pointer rounded-full z-10">
            <FontAwesomeIcon icon={faChevronLeft} className="text-2xl"/>
          </button>
          <button
            onClick={() => {
              stopAutoSlide();
              setCurrent((current + 1) % images.length);
              startAutoSlide();
            }}
            className="flex items-center justify-center absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white w-12 h-12 cursor-pointer rounded-full z-10">
            <FontAwesomeIcon icon={faChevronRight} className="text-2xl"/>
          </button>
        </>
      )}

      {/* Bolinhas */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              stopAutoSlide();
              setCurrent(idx);
              startAutoSlide();
            }}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              idx === current ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
