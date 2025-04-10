'use client'
import { useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import logo from './../../public/photo_2024-01-02_20-00-52__2_-removebg-preview (1).png'
import logo2 from './../../public/photo_2024-01-02_20-08-51-removebg-preview (1).png'
import LocaleSwitcher from './LocaleSwitcher'
import ThemeToggle from './ThemeToggle'

function Header() {
	const { scrollYProgress } = useScroll()
	const t = useTranslations('Header')
	const { theme } = useTheme()
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header className='backdrop-blur-2xl flex flex-wrap sm:justify-start sm:flex-nowrap w-full shadow-md fixed top-0 z-50'>
			<nav className='max-w-[85rem] w-full mx-auto px-6 flex flex-wrap items-center justify-between' aria-label='Global'>
				{/* Logo */}
				<Link href='/'>
					{theme === 'light' ? (
						<Image src={logo} alt='logo' height={45} className='relative lg:ml-2 sm:ml-10' />
					) : (
						<Image src={logo2} alt='logo' height={45} className='relative lg:ml-2 sm:ml-10' />
					)}
				</Link>

				{/* Toggle Button */}
				<div className='sm:hidden flex items-center gap-x-2 p-3'>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className='p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10'
					>
						{isOpen ? (
							<svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
							</svg>
						) : (
							<svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
							</svg>
						)}
					</button>
				</div>

				{/* Menyu */}
				<div className={`w-full sm:flex sm:items-center sm:space-x-8 sm:static sm:w-auto transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
					<div className='flex flex-col sm:flex-row gap-12 mt-5 sm:mt-0 sm:ps-5 p-7'>
						<Link className='font-medium text-slate-950 hover:text-gray-400 dark:text-slate-50 dark:hover:text-gray-500' href='/about'>
							{t('link1')}
						</Link>
						<Link className='font-medium text-slate-950 hover:text-gray-400 dark:text-slate-50 dark:hover:text-gray-500' href='/services'>
							{t('link2')}
						</Link>
						<Link className='font-medium text-slate-950 hover:text-gray-400 dark:text-slate-50 dark:hover:text-gray-500' href='#'>
							{t('link3')}
						</Link>
						<Link className='font-medium text-slate-950 hover:text-gray-400 dark:text-slate-50 dark:hover:text-gray-500' href='#'>
							{t('link4')}
						</Link>
						<Link className='font-medium text-slate-950 hover:text-gray-400 dark:text-slate-50 dark:hover:text-gray-500' href='#'>
							{t('link5')}
						</Link>
					</div>

					{/* Desktop version (Language and Theme toggle) */}
					<div className='sm:flex items-center gap-x-2 hidden'>
						<LocaleSwitcher />
						<ThemeToggle />
					</div>

					{/* Mobile version (Language and Theme toggle) */}
					<div className='sm:hidden flex flex-col items-start px-7 pb-5 gap-4'>
						<div className='flex gap-4'>
							<LocaleSwitcher />
							<ThemeToggle />
						</div>
					</div>
				</div>
			</nav>

			{/* Scroll indicator */}
			<motion.div className='fixed top-full w-full left-0 h-1 bg-violet-800 origin-left' style={{ scaleX: scrollYProgress }} />
		</header>
	)
}

export default Header
