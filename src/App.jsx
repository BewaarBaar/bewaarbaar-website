import { useEffect, useRef } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ShopCategories from './components/ShopCategories'
import NewArrivals from './components/NewArrivals'
import FeatureBanner from './components/FeatureBanner'
import CribStages from './components/CribStages'
import About from './components/About'
import Shop from './components/Shop'
import Footer from './components/Footer'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import StatsCounter from './components/StatsCounter'
import Reviews from './components/Reviews'
import StickyOrderButton from './components/StickyOrderButton'
import PageTransition from './components/PageTransition'
import NotFound from './components/NotFound'

function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <ShopCategories />
      <NewArrivals />
      <FeatureBanner />
      <StatsCounter />
      <CribStages />
      <Reviews />
    </PageTransition>
  )
}

function ScrollToTop() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<PageTransition><Shop /></PageTransition>} />
        <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll />
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
      <StickyOrderButton />
    </BrowserRouter>
  )
}

export default App
