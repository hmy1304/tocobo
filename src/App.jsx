import './styles/main.scss'
import Header from "./components/Header"
import Hero from "./sections/Hero"
import Instargram from "./sections/Instargram"
import Footer from "./components/Footer"
import Follow from "./sections/Follow"
import SkinCare from "./sections/SkinCare"
import Collection from "./sections/Collection"
import TopBanner from './components/TopBanner'
import FixedTopbtn from './components/FixedTopbtn'
import { useState, useEffect } from 'react'
import AOS from 'aos'

function App() {
  const [topBanner, setTopBanner] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
      AOS.init({
        duration:400,
        easing:"ease"
      });
      
    },[])

  const upTopBanner = () => {
    setTopBanner('up')
  }

  useEffect(()=> {
    const handleScroll = () => {
      const scrollTop=window.scrollY
      setIsScrolled(scrollTop>0)
    }

    window.addEventListener('scroll', handleScroll)
  },[])

  return (
    <div className={`app-container ${topBanner} ${isScrolled? 'scrolled':''}`}>
      <FixedTopbtn />
      <TopBanner onClick={upTopBanner}/>
      <Header />
      <main>
        <section id='hero' className='section'>
          <Hero />
        </section> 
        <section id='follow' className='section'>
          <Follow />
        </section>
        <section id='collection' className='section'>
          <Collection />
        </section>
        <section id='skincare' className='section'>
          <SkinCare />
        </section>
        <section id='instargram' className='section'>
          <Instargram />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
