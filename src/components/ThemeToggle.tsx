'use client'

import { useTheme } from 'next-themes'
import { LuSunMedium } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";
import { space } from 'postcss/lib/list'

export default function ThemeToggle() {
    const { resolvedTheme, theme, setTheme } = useTheme();
    return (
        <button
            onClick={() => {
                setTheme(resolvedTheme === "light" ? "dark" : "light");
            }}
            type='button'
            className='rounded-3xl p-3 hover:bg-gray-200 dark:hover:bg-gray-700'>
            {theme === "light" ? <span className='text-lg'>< FaMoon /> </span> : <span className='text-xl'><LuSunMedium /></span>}
        </button>

    )
}