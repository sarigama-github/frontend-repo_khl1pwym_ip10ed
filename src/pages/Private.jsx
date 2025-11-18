import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Private() {
  const cards = [
    { title: 'Birthdays', desc: 'Confetti cannons, bubbles, and CO2 jets that turn birthdays into legendary parties.' },
    { title: 'Baptisms', desc: 'Elegant low fog and bubbles for warm, family-focused celebrations.' },
    { title: 'Gender Reveal', desc: 'Color bombs and confetti moments to reveal your big surprise in style.' },
  ]

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="bg-black">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Birthdays, Baptisms & Gender Reveal</h1>
            <p className="text-white/70 mt-4 max-w-3xl">Create joyful, photogenic moments with special effects selected for intimate celebrations.
              Our team recommends the best effects for your venue and audience.</p>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {cards.map(c => (
                <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-white font-semibold">{c.title}</h3>
                  <p className="text-white/70 mt-2 text-sm">{c.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-6 py-3">Book a Meeting</Link>
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-gradient-to-b from-[#0b0b0b] to-black">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-3xl text-white font-bold">Gallery</h2>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 9 }).map((_, idx) => (
                <div key={idx} className="aspect-[4/3] rounded-xl bg-cover bg-center border border-white/10" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)` }} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
