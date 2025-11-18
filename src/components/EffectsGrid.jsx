const effects = [
  { title: 'Cold Sparks', desc: 'Dramatic, safe indoor pyrotechnic-style sparkles perfect for first dances and grand entrances.' },
  { title: 'Spark Fountains', desc: 'Towering spark effects that light up the moment with elegance and wow-factor.' },
  { title: 'CO2 Guns & Jets', desc: 'High-energy blasts for dance floors, drops, and unforgettable stage moments.' },
  { title: 'Low Fog', desc: 'A dreamy cloud effect that makes your first dance feel like a fairytale.' },
  { title: 'Bubble Machines', desc: 'Whimsical layers of bubbles that delight guests of all ages.' },
  { title: 'Confetti & Color Bombs', desc: 'Vibrant confetti showers and color moments for epic photo finishes.' },
]

export default function EffectsGrid() {
  return (
    <section id="popular" className="relative bg-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Most Popular Effects</h2>
        <p className="text-white/70 mt-2">Curated experiences trusted by couples and event planners.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {effects.map((e) => (
            <div key={e.title} className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.07] transition p-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-500 to-yellow-300 mb-4 opacity-90 group-hover:opacity-100" />
              <h3 className="text-xl font-semibold text-white">{e.title}</h3>
              <p className="text-white/70 mt-2 text-sm leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
