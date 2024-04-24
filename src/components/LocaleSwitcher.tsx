'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { IoIosGlobe } from "react-icons/io";
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import img1 from './../../public/uzbekistan-flag-png-large.png'

// const options = ["en", "uz", "ru"]
const options = [
  {
    title: 'en',
  },
  {
    title: 'uz',
  },
  {
    title: 'ru',
  }
]


const LocaleSwitcher = () => {
  const dsf = useLocale()
  const router = useRouter()
  const locale = useLocale()

  const handleChange = (e: any) => {
    router.push(`/${e.target.value}`)
  }

  return (
    <form className="w-2 mr-10 border-transparent">
      <fieldset>
        <div className="relative border-transparent bg-white dark:bg-transparent border-0 ">
          <select onChange={handleChange} className="appearance-none w-10 py-1 px-2 dark:bg-transparent outline-none cursor-pointer" name="whatever" id="frm-whatever">
            {options.map((option, indx) => (
              <option className='dark:bg-slate-900 outline-none px-12 cursor-pointer' key={indx} value={option.title} selected={locale == option.title ? true : false}><span className='px-10 cursor-pointer'>{option.title.toLocaleUpperCase()}</span></option>
            ))}
          </select>
        </div>
      </fieldset>
    </form>
  );
};

export default LocaleSwitcher;