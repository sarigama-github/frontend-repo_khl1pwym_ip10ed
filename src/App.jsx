import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Weddings from './pages/Weddings'
import Corporate from './pages/Corporate'
import Private from './pages/Private'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/weddings" element={<Weddings />} />
      <Route path="/corporate" element={<Corporate />} />
      <Route path="/private" element={<Private />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
