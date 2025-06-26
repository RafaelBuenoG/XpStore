import { faFacebookF, faInstagram, faTwitter, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center mb-14 md:mb-0 py-3 md:py-5 bg-gray-900 space-y-4">
        <p>&copy; 2025 Xp Games - Todos os direitos reservados</p>
        <div className="space-x-4 text-2xl">
            <Link href="https://www.facebook.com" target='_blank'>
                <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
            </Link>
            <Link href="https://www.x.com" target='_blank'>
                <FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon>
            </Link>
            <Link href="https://www.instagram.com" target='_blank'>
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </Link>
            <Link href="https://www.youtube.com" target='_blank'>
                <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
            </Link>
        </div>
    </footer>
  )
}

export default Footer
