import Link from 'next/link'
import React from 'react'
import logo from './../../public/photo_2024-01-02_20-00-52__2_-removebg-preview (1).png'
import logo2 from './../../public/photo_2024-01-02_20-08-51-removebg-preview (1).png'
import Image from 'next/image'
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <>
            <footer className="text-gray-800">
                <div className="container px-36 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <Link href={"/"}>
                    <Image src={logo} alt='logo' className='' height={"45"} />
                </Link>
                 <p className="text-sm text-black dark:text-gray-300 font-semibold sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 dark">© 2024 UPTUZ — Barcha huquqlari himoyalangan.</p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a href='https://t.me/uptuz' className="dark:text-gray-300 flex cursor-pointer text-black">
                        <FaTelegramPlane className="text-2xl "/>  <span className="px-3">Telegram</span>
                        </a>
                        <a className="text-black dark:text-gray-300 flex cursor-pointer">
                        <FaYoutube  className="text-2xl "/>  <span className="px-3">Youtube</span>
                        </a>
                        <a  href="https://www.instagram.com/uptuz" className="text-black dark:text-gray-300 flex cursor-pointer">
                        <FaInstagram className="text-2xl "/>  <span className="px-3">Instagram</span>
                        </a>
                    </span>
                </div>
            </footer>
        </>
    )
}

export default Footer