import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Corporate() {
  const items = [
    { title: 'Corporate Parties', desc: 'High-energy visual effects to energize the room and elevate the experience.' },
    { title: 'Brand Launches', desc: 'Memorable moment design that amplifies your brand story.' },
    { title: 'Store Openings', desc: 'Grand opening spark moments and confetti reveals that draw a crowd.' },
    { title: 'Award Ceremonies & Galas', desc: 'Elegant effects that complement black-tie evenings and stage productions.' },
  ]

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="bg-black">
          <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white">Corporate Events</h1>
              <p className="text-white/70 mt-4">From product launches to gala nights, our special effects add premium production value to your event.</p>
              <div className="mt-6 flex gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-6 py-3">Talk to Our Team</Link>
                <a href="#gallery" className="inline-flex items-center justify-center rounded-full border border-white/20 text-white px-6 py-3">View Gallery</a>
              </div>
            </div>
            <div className="aspect-video rounded-2xl bg-[url('https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center border border-white/10 shadow-2xl" />
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#0b0b0b] to-black">
          <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-6">
            {items.map(i => (
              <div key={i.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-white font-semibold">{i.title}</h3>
                <p className="text-white/70 mt-2 text-sm">{i.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="gallery" className="bg-black">
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
