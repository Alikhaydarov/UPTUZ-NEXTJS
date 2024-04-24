import { useTranslations } from 'next-intl'
import Hero from '@/components/hero'
export default function Home() {
  const t = useTranslations('Index')
  return (<div className='text-black dark:text-orange-400'> <Hero/>{t('title')}</div>)
}
