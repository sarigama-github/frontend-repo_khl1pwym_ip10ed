import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Portfolio() {
  const sections = [
    { title: 'Weddings', tag: 'wedding' },
    { title: 'Corporate', tag: 'corporate' },
    { title: 'Birthdays', tag: 'birthday' },
    { title: 'Baptisms', tag: 'baptism' },
    { title: 'Gender Reveal', tag: 'gender%20reveal' },
  ]

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="bg-black">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Portfolio</h1>
            <p className="text-white/70 mt-4">A look at our favorite moments across celebrations.</p>

            {sections.map(s => (
              <div key={s.title} className="mt-12">
                <h2 className="text-2xl text-white font-semibold">{s.title}</h2>
                <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <div key={idx} className="aspect-[4/3] rounded-xl bg-cover bg-center border border-white/10" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)` }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
