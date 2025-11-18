import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="bg-black">
          <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white">About Us</h1>
              <p className="text-white/70 mt-4">Go Go Sparkles creates premium special-effects experiences for weddings, corporate events, and private celebrations. Our mission is to deliver unforgettable moments with uncompromising safety and professionalism.</p>
              <div className="mt-6 space-y-2 text-white/80">
                <p>• Certified technicians and insured operations</p>
                <p>• Collaboration with venues, planners, DJs, and production teams</p>
                <p>• Meticulous planning, on-site rehearsal, and precise execution</p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-white font-semibold">Our Values</h2>
              <ul className="mt-3 space-y-2 text-white/80 text-sm">
                <li>• Safety first</li>
                <li>• Reliability and punctuality</li>
                <li>• Creativity with technical excellence</li>
                <li>• Respect for your vision and venue</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
