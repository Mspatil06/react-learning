import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'

import About from './pages/About'

import Students from './pages/Students'

import Contact from './pages/Contact'

function App() {

  return (
<>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/students" element={<Students />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</>

  )

}

export default App
 