'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faChartSimple, faMagnifyingGlass, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const Nav = () => {
    const [search, setSearch] = useState('');

  return (
    <nav className="flex flex-wrap items-center justify-evenly gap-4 md:gap-8 p-3 bg-gray-800">
        <Link href="#">
            <Image
            className="w-20 md:w-28 h-auto"
            src="/logo.png"
            alt="Logo XpStore"
            width={100}
            height={100}
            />
        </Link>
        

        <form className="flex items-center justify-center flex-1 space-x-3 text-sm md:max-w-xl" role="search">
            <input
                className="p-2 md:p-3 rounded-full bg-gray-700 w-full"
                type="text"
                placeholder="O que você procura?"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
            <button className="bg-red-400 p-3 md:p-4 rounded-full flex items-center justify-center hover:bg-red-400/70 hover:scale-110 duration-200  cursor-pointer" type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </form>

        <div className="hidden md:flex items-center space-x-10 text-white text-sm">
            <div className="flex space-x-5 items-center">
            <Link href="#" className="flex flex-col items-center duration-200 hover:text-red-400">
                <FontAwesomeIcon icon={faChartSimple} className="text-xl"/>
                <span>Meu XP</span>
            </Link>
            <Link href="#" className="flex flex-col items-center duration-200 hover:text-red-400" data-bs-toggle="offcanvas" role="button" aria-controls="offcanvasShopCar">
                <FontAwesomeIcon icon={faCartShopping} className="text-xl"/>
                <span>Carrinho</span>
            </Link>
            <Link href="#" className="flex flex-col items-center duration-200 hover:text-red-400">
                <FontAwesomeIcon icon={faBars} className="text-xl"/>
                <span>Menu</span>
            </Link>
            </div>
            <Link href="#" className="flex items-center p-3 gap-2 hover:scale-110 duration-200 bg-white rounded-full text-black">
                <FontAwesomeIcon icon={faUserAlt} className="text-xl"/>
                Criar Conta
            </Link>
        </div>
    </nav>
  )
}

export default Nav
