export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-500 to-yellow-300" />
            <span className="text-white font-semibold">Go Go Sparkles</span>
          </div>
          <p className="text-white/60 mt-4 text-sm">Premium special effects for weddings, corporate events, and unforgettable celebrations.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Contact</h4>
          <p className="text-white/60 mt-2 text-sm">Email: hello@gogosparkles.com</p>
          <p className="text-white/60 text-sm">Phone: +1 (555) 123-4567</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Follow</h4>
          <div className="mt-2 flex gap-3 text-sm">
            <a href="#" className="text-white/70 hover:text-white">Instagram</a>
            <a href="#" className="text-white/70 hover:text-white">TikTok</a>
            <a href="#" className="text-white/70 hover:text-white">Facebook</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-white/50 text-xs">© {new Date().getFullYear()} Go Go Sparkles. All rights reserved.</div>
    </footer>
  )
}
