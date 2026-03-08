import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Tools from './pages/Tools'
import Bits from './pages/Bits'

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/bits" element={<Bits />} />
      </Routes>
    </div>
  )
}
