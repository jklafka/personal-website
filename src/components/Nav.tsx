import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/resume', label: 'Resume' },
  { to: '/tools', label: 'Tools' },
  { to: '/bits', label: 'Bits' },
]

export default function Nav() {
  return (
    <nav className="border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="font-semibold text-lg tracking-tight">
          Joe Kafka
        </NavLink>
        <ul className="flex gap-6 text-sm">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 font-medium'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors'
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
