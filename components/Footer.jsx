import React from 'react'
import Image from 'next/image'
import FooterLogo from '../images/ll_logo.png'
import Link from 'next/link'
import { FaMoon, FaSun, FaGithub, FaTwitter } from 'react-icons/fa'


const Footer = () => {
  return (
    <>
        <div className="main_footer-logo">
            <Image src={FooterLogo} />
        </div>
        {/*<div className="main_footer-theme-buttons">
            <button><FaSun /></button>
            <button><FaMoon /></button>
        </div>*/}
        <div className="main_footer-text">
            <div className="main_footer-links">
                <Link href="https://github.com/lkl03/Que-Comemos">
                    <a><FaGithub /></a>
                </Link>
                <Link href="https://twitter.com/LucaLago_">
                    <a><FaTwitter /></a>
                </Link>
            </div>
            <div className="main_footer-copy">
                <p>&copy; 2022</p>
            </div>
        </div>
    </>
  )
}

export default Footer