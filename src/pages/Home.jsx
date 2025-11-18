import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import EffectsGrid from '../components/EffectsGrid'
import { WeddingsSection, OtherEventsSection, Testimonials, FinalCTA } from '../components/Sections'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <EffectsGrid />
        <WeddingsSection />
        <OtherEventsSection />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
