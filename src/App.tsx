import { useState, useEffect, createContext, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import ThemeBackground from './components/ThemeBackground'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Tools from './pages/Tools'
import Bits from './pages/Bits'
import PomodoroTimer from './pages/PomodoroTimer'

type Theme = 'dark' | 'light'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  toggleTheme: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

export default function App() {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  function toggleTheme() {
    setTheme(t => (t === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeBackground />
      <div className="min-h-screen text-neutral-900 dark:text-neutral-100">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/bits" element={<Bits />} />
          <Route path="/tools/pomodoro" element={<PomodoroTimer />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  )
}
