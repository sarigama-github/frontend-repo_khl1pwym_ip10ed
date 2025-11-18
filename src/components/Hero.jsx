import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight">
            We Create Moments That Last Forever.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/80">
            Special effects for weddings, corporate events, and unforgettable celebrations.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-6 py-3 shadow-lg hover:shadow-xl hover:brightness-110 transition">
              Book a Meeting
            </Link>
            <a href="#popular" className="inline-flex items-center justify-center rounded-full border border-white/20 text-white px-6 py-3 hover:bg-white/10 transition">
              Explore Effects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
