import { NavLink } from 'react-router-dom'
import { cn } from '../../lib/utils'

const navItems = [
  { to: '/', label: 'Главная', end: true },
  { to: '/prices', label: 'Цены' },
  { to: '/works', label: 'Проекты' },
  { to: '/company', label: 'Компания' },
]

export default function NavBar() {
  return (
    <nav className="border-b border-zinc-800 px-2 py-2 md:px-6">
      <ul className="flex flex-wrap items-center justify-center gap-1 md:gap-2">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  'inline-flex rounded-md px-4 py-2 text-sm text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-zinc-100',
                  isActive && 'bg-zinc-800 text-yellow-400',
                )
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
