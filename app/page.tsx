import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Ticker from './components/Ticker'
import StatsBar from './components/StatsBar'
import AboutSection from './components/AboutSection'
import GallerySection from './components/GallerySection'
import EventsSection from './components/EventsSection'
import Footer from './components/Footer'
import ScrollEffects from './components/ScrollEffects'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Ticker />
      <StatsBar />
      <AboutSection />
      <GallerySection />
      <EventsSection />
      <Footer />
      <ScrollEffects />
    </>
  )
}
