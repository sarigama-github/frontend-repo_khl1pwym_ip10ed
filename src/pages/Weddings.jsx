import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Weddings() {
  const faqs = [
    { q: 'Are cold sparks safe for indoor venues?', a: 'Yes. Our cold spark fountains are smokeless and cool-burning. We coordinate with your venue to ensure full safety compliance.' },
    { q: 'Do you work with our DJ and planner?', a: 'Absolutely. We handle cues, timing, and rehearsal coordination to make every effect seamless.' },
    { q: 'How far in advance should we book?', a: 'We recommend 4–8 weeks in advance for best availability, but we can often accommodate rush requests.' },
  ]

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="relative bg-black">
          <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white">Weddings, Perfected</h1>
              <p className="text-white/70 mt-4">We design emotional, cinematic experiences using premium special effects that elevate every milestone of your celebration.</p>
              <div className="mt-6 flex gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-6 py-3">Book a Meeting</Link>
                <a href="#gallery" className="inline-flex items-center justify-center rounded-full border border-white/20 text-white px-6 py-3">View Gallery</a>
              </div>
            </div>
            <div className="aspect-video rounded-2xl bg-[url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center border border-white/10 shadow-2xl" />
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#0b0b0b] to-black">
          <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
            {[
              { title: 'Cold Sparks', desc: 'Grand entrances and first dances with elegant spark fountains.' },
              { title: 'Low Fog', desc: 'Cloud-like ambiance for romantic dances and dramatic reveals.' },
              { title: 'Confetti Moments', desc: 'Timely confetti shots for unforgettable kiss and celebration photos.' },
            ].map(i => (
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

        <section className="bg-gradient-to-b from-[#0b0b0b] to-black">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-2xl text-white font-bold">Why Choose Go Go Sparkles?</h2>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>• Safety-first, certified technicians</li>
              <li>• Venue-approved and fully insured</li>
              <li>• Tailored packages for your timeline and budget</li>
              <li>• White-glove coordination with your vendor team</li>
            </ul>
          </div>
        </section>

        <section className="bg-black">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-2xl text-white font-bold">FAQs</h2>
            <div className="mt-6 space-y-4">
              {faqs.map(f => (
                <div key={f.q} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <p className="text-white font-medium">{f.q}</p>
                  <p className="text-white/70 mt-1 text-sm">{f.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-6 py-3">Book a Meeting</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
