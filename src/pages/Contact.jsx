import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const EVENT_TYPES = ['Wedding', 'Corporate', 'Birthday', 'Baptism', 'Gender Reveal', 'Other']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', event_type: 'Wedding', date: '', location: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to submit')
      const data = await res.json()
      setStatus({ loading: false, success: data.message || 'We will be in touch shortly!', error: null })
      setForm({ name: '', email: '', phone: '', event_type: 'Wedding', date: '', location: '', message: '' })
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message || 'Something went wrong' })
    }
  }

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="bg-black">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Book a Meeting</h1>
            <p className="text-white/70 mt-3">Tell us about your event and we’ll schedule a consultation.</p>

            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required name="name" value={form.name} onChange={handleChange} placeholder="Name" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50" />
              <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50" />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50" />
              <select name="event_type" value={form.event_type} onChange={handleChange} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white">
                {EVENT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <input name="date" value={form.date} onChange={handleChange} placeholder="Event Date" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50" />
              <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50" />
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us more" rows={4} className="sm:col-span-2 bg:white/5 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50" />
              <button type="submit" disabled={status.loading} className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-6 py-3">
                {status.loading ? 'Sending...' : 'Send'}
              </button>
            </form>

            {status.success && <p className="text-green-400 mt-4">{status.success}</p>}
            {status.error && <p className="text-red-400 mt-4">{status.error}</p>}

            <div className="mt-8">
              <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/20 text-white px-6 py-3">WhatsApp</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
