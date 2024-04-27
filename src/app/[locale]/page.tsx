import { useTranslations } from 'next-intl'
import Hero from '@/components/hero'
export default function Home() {
  const t = useTranslations('Index')
  return (<div className=''> <Hero/></div>)
}
