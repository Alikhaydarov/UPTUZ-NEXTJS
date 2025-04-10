'use client';
import React from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

// Til variantlari
const options = [
  { title: 'en' },
  { title: 'uz' },
  { title: 'ru' }
];

const LocaleSwitcher = () => {
  const locale = useLocale(); 
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Tilni o'zgartirganingizda sahifani yangi tilga yo'naltirish
    router.push(`/${e.target.value}`);
  };

  return (
    <form className=" w-11 max-sm:w-auto">
      <fieldset>
        <div className="relative">
          <select
            onChange={handleChange}
            className="appearance-none w-full font-bold py-1 px-2 bg-transparent dark:bg-transparent outline-none cursor-pointer"
            name="locale"
            id="locale-select"
            value={locale}
          >
            {options.map((option, indx) => (
              <option 
                className="dark:bg-slate-900"
                key={indx}
                value={option.title}
              >
                {option.title.toLocaleUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
    </form>
  );
};

export default LocaleSwitcher;
