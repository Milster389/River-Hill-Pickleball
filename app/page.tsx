import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import StatsBar from './components/StatsBar'
import AboutSection from './components/AboutSection'
import EventsSection from './components/EventsSection'
import GroupMeSection from './components/GroupMeSection'
import GallerySection from './components/GallerySection'
import Footer from './components/Footer'
import ScrollEffects from './components/ScrollEffects'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <div className="divider" />
      <EventsSection />
      <div className="divider" />
      <GroupMeSection />
      <GallerySection />
      <Footer />
      <ScrollEffects />
    </>
  )
}
