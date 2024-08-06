import { useTranslations } from 'next-intl'
import Hero from '../../components/hero'
import Services from './services/page'
import Team from './team/page'
import Header from '../../components/header'
import Footer from '../../components/footer'
import TeamCarousel from '../../components/TeamCarousel'


// import Services  from '@/components/services';
export default function Home() {
  const t = useTranslations('Index')
  return (<div className=''><Header/>
  <Hero/>
  <Services/>
  <TeamCarousel/>
  {/* <Team/> */}
  <Footer/>
  </div>)
}