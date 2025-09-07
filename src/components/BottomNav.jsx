import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faChartSimple, faHouse } from '@fortawesome/free-solid-svg-icons'

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full flex items-center justify-evenly text-2xl py-2 z-50 bg-gray-800 md:hidden">
        <Link href="/index" className="flex flex-col gap-1 items-center">
            <FontAwesomeIcon icon={faHouse} />
            <span className="text-xs">Home</span>
        </Link>
        <Link href="/xppoints" className="flex flex-col gap-1 items-center">
            <FontAwesomeIcon icon={faChartSimple} />
            <span className="text-xs">Meu XP</span>
        </Link>
        <Link href="#" className="flex flex-col gap-1 items-center">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="text-xs">Carrinho</span>
        </Link>
        <Link href="#" className="flex flex-col gap-1 items-center">
            <FontAwesomeIcon icon={faBars} />
            <span className="text-xs">Menu</span>
        </Link>
    </nav>
  )
}

export default BottomNav
