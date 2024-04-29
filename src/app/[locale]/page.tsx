import { useTranslations } from 'next-intl'
import Hero from '@/components/hero'
import Services from './services/page'
import Header from '@/components/header'
// import Services  from '@/components/services';
export default function Home() {
  const t = useTranslations('Index')
  return (<div className=''><Header/> <Hero/><Services/></div>)
}
