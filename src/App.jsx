import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

function HomePage() {
  return (
    <>
      <Hero />
      <ShopCategories />
      <NewArrivals />
      <FeatureBanner />
      <CribStages />
      <Reviews />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
