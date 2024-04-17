'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { IoIosGlobe } from "react-icons/io";
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

const options = ["en", "uz", "ru"]

const LocaleSwitcher = () => {
  const dsf = useLocale()
  const router = useRouter()
  const locale = useLocale()
  
  const handleChange = (e: any) => {
    router.push(`/${e.target.value}`)
  }

  return (
    <form className="w-2 mr-8 border-none">
      <fieldset>
        <div className="relative border-none dark:bg-slate-900">
          <select onChange={handleChange} className="appearance-none w-10 py-1 px-2" name="whatever" id="frm-whatever">
            {options.map((option, indx) => (
              <option value={option} selected={locale == option ? true : false}>{option.toLocaleUpperCase()}</option>
            ))}
          </select>
        </div>
      </fieldset>
    </form>
  );
};

export default LocaleSwitcher;