'use client'
import Link from 'next/link'
import React from 'react'
import 'flowbite';
import ThemeToggle from './ThemeToggle';
import Image from 'next/image';
import { useTheme } from 'next-themes'
import LocaleSwitcher from './LocaleSwitcher';
import logo from './../../public/photo_2024-01-02_20-00-52__2_-removebg-preview (1).png'
import logo2 from './../../public/photo_2024-01-02_20-08-51-removebg-preview (1).png'


// const {theme}  = useTheme();l
 function Header() {
    const { theme } = useTheme();
    return (
        <header className="backdrop-blur-2xl flex flex-wrap sm:justify-start sm:flex-nowrap w-full shadow-md">
            <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between" aria-label="Global">
                <Link href={"/"}>
                    {theme === "light" ? <Image src={logo} alt='logo' height={"45"} /> : <Image src={logo2} alt='logo' height={"45"} />}
                </Link>
                <div className="sm:order-3 flex items-center gap-x-2 p-3">
                    <button type="button" className="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10" data-hs-collapse="#navbar-alignment" aria-controls="navbar-alignment" aria-label="Toggle navigation">
                        <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                        <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </button>
                    <LocaleSwitcher />
                    <ThemeToggle />
                </div>
                <div id="navbar-alignment" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2">
                    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5 p-7">
                        <Link className="font-medium text-slate-950 hover:text-gray-400 dark:text-slate-50 dark:hover:text-gray-500" href="#">ABOUT US</Link>
                        <Link className="font-medium text-slate-950 hover:text-gray-400 dark:text-slate-50 dark:hover:text-gray-500" href="#">SERVICES</Link>
                        <Link className="font-medium text-slate-950 hover:text-gray-400 dark:text-slate-50 dark:hover:text-gray-500" href="#">PORTFOLIO</Link>
                        <Link className="font-medium text-slate-950 hover:text-gray-400 dark:text-slate-50 dark:hover:text-gray-500" href="#">CAREER</Link>
                        <Link className="font-medium text-slate-950 hover:text-gray-400 dark:text-slate-50 dark:hover:text-gray-500" href="#">BLOG</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header