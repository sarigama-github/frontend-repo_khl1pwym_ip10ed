import { Link } from 'react-router-dom'

export function WeddingsSection() {
  return (
    <section className="bg-gradient-to-b from-black to-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Weddings: Our Expertise</h2>
          <p className="text-white/70 mt-4 leading-relaxed">
            From the first dance to your grand exit, we design emotional, cinematic moments using
            safe, premium special effects. Our team collaborates with your planner, venue, and DJ to
            execute with precision and elegance.
          </p>
          <ul className="mt-6 space-y-3 text-white/80">
            <li>• Cold spark fountains for magical entrances</li>
            <li>• Low fog for cloud-like first dances</li>
            <li>• Timed confetti for epic kiss and celebration photos</li>
          </ul>
          <div className="mt-8 flex gap-4">
            <Link to="/weddings" className="text-yellow-400 hover:underline">Discover Weddings</Link>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-5 py-2">Book a Meeting</Link>
          </div>
        </div>
        <div className="aspect-video rounded-2xl bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center border border-white/10 shadow-2xl" />
      </div>
    </section>
  )
}

export function OtherEventsSection() {
  const items = [
    { title: 'Corporate Events', to: '/corporate', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Birthdays', to: '/private', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Baptisms', to: '/private', img: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Gender Reveal', to: '/private', img: 'https://images.unsplash.com/photo-1560180474-e8563fd75bab?q=80&w=1600&auto=format&fit=crop' },
  ]
  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Other Event Types</h2>
          <Link to="/contact" className="hidden sm:inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-5 py-2">Talk to Our Team</Link>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(i => (
            <Link key={i.title} to={i.to} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/[0.07] transition">
              <div className="aspect-[4/3] w-full bg-cover bg-center" style={{ backgroundImage: `url(${i.img})` }} />
              <div className="p-4">
                <h3 className="text-white font-semibold group-hover:text-yellow-400">{i.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  const quotes = [
    { name: 'Sofia & Daniel', text: 'The low fog and spark fountains made our first dance absolutely magical. Our guests still talk about it!' },
    { name: 'Marina (Event Planner)', text: 'Professional, safety-first, and flawless execution. A trusted partner for premium events.' },
    { name: 'TechCorp Gala', text: 'The CO2 jets and confetti drop were the perfect finale to our awards night. Stunning visuals.' },
  ]
  return (
    <section className="bg-gradient-to-b from-[#0b0b0b] to-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Loved by Couples and Brands</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {quotes.map(q => (
            <div key={q.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-white/80 italic">“{q.text}”</p>
              <p className="text-white mt-4 font-medium">— {q.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCTA() {
  return (
    <section className="relative bg-black">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to plan unforgettable moments?</h2>
        <p className="text-white/70 mt-3">Speak with our specialists and design a show-stopping experience for your event.</p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/20 text-white px-6 py-3 hover:bg-white/10 transition">WhatsApp</a>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-6 py-3 shadow-lg">Book a Meeting</Link>
        </div>
      </div>
    </section>
  )
}
