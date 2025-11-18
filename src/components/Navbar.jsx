import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function CTAButton({ children }) {
  return (
    <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-5 py-2 shadow-lg hover:shadow-xl hover:brightness-110 transition">
      {children}
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (to, label) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition hover:text-yellow-400 ${isActive ? 'text-yellow-400' : 'text-white/90'}`
      }
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-500 to-yellow-300 shadow-lg" />
            <span className="text-white font-semibold tracking-wide">Go Go Sparkles</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItem('/', 'Home')}
            {navItem('/weddings', 'Weddings')}
            {navItem('/corporate', 'Corporate Events')}
            {navItem('/private', 'Birthdays & More')}
            {navItem('/portfolio', 'Portfolio')}
            {navItem('/about', 'About')}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white text-sm">WhatsApp</a>
            <CTAButton>Book a Meeting</CTAButton>
          </div>

          <button onClick={() => setOpen(v => !v)} className="md:hidden text-white/90 p-2">{open ? '✕' : '☰'}</button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <div className="flex flex-col">
              {navItem('/', 'Home')}
              {navItem('/weddings', 'Weddings')}
              {navItem('/corporate', 'Corporate Events')}
              {navItem('/private', 'Birthdays & More')}
              {navItem('/portfolio', 'Portfolio')}
              {navItem('/about', 'About')}
              <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-5 py-2">
                Book a Meeting
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
