import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ShopCategories from './components/ShopCategories'
import NewArrivals from './components/NewArrivals'
import FeatureBanner from './components/FeatureBanner'
import CribStages from './components/CribStages'
import About from './components/About'
import Shop from './components/Shop'
import Footer from './components/Footer'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import StatsCounter from './components/StatsCounter'
import StickyOrderButton from './components/StickyOrderButton'
import PageTransition from './components/PageTransition'

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
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
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
