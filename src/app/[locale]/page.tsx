import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('Index')
  return (<div className='text-black dark:text-orange-400'>{t('title')}</div>)
}
