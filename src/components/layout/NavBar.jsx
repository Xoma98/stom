const navItems = [
  { href: '#hero', label: 'Главная' },
  { href: '#about', label: 'Почему негодяй?' },
  { href: '#charges', label: 'Обвинения' },
  { href: '#verdict', label: 'Вердикт' },
]

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-10 border-b border-orange-200 bg-white/90 px-2 py-2 backdrop-blur md:px-6">
      <ul className="flex flex-wrap items-center justify-center gap-1 md:gap-2">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="inline-flex rounded-md px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-orange-100 hover:text-orange-800"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
