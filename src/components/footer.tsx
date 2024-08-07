'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { FaTelegramPlane, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import logo from './../../public/photo_2024-01-02_20-00-52__2_-removebg-preview (1).png'
import logo2 from './../../public/photo_2024-01-02_20-08-51-removebg-preview (1).png'

function Footer() {
    const { theme } = useTheme()

    return (
        <footer className="text-gray-800 bg-white dark:bg-gray-900">
            <div className="container mx-auto lg:px-16 py-8 flex flex-col sm:flex-row items-start">
                <Link href="/" className="mb-4 sm:mb-0 sm:mr-4">
                    <Image src={theme === 'dark' ? logo2 : logo} alt='logo' height={45} />
                </Link>
                <p className="text-sm text-black dark:text-gray-300 font-semibold sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 dark:sm:border-gray-700 sm:py-2 sm:mt-0 mt-4">
                    © 2024 UPTUZ — Barcha huquqlari himoyalangan.
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a href='https://t.me/uptuz' className="dark:text-gray-300 flex cursor-pointer text-black items-center mr-4">
                        <FaTelegramPlane className="text-2xl" /> <span className="px-2">Telegram</span>
                    </a>
                    <a className="text-black dark:text-gray-300 flex cursor-pointer items-center mr-4">
                        <FaYoutube className="text-2xl" /> <span className="px-2">Youtube</span>
                    </a>
                    <a href="https://www.instagram.com/uptuz" className="text-black dark:text-gray-300 flex cursor-pointer items-center">
                        <FaInstagram className="text-2xl" /> <span className="px-2">Instagram</span>
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer;
