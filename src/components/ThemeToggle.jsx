'use client';
import { useEffect, useState } from 'react';
import { faSun, faMoon, faHeadSideCoughSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('white');

  useEffect(() => {
    // Carrega o tema salvo no localStorage ou define como "white" por padrão
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'white' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className=" w-10 h-10 rounded-full border border-gray-600 hover:bg-gray-800 text-white transition cursor-pointer"
    >
      {theme === 'dark' ? (
        <>
          <FontAwesomeIcon icon={faSun} className="w-5 h-5" />
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={faMoon} className="w-5 h-5" />
        </>
      )}
    </button>
  );
}
