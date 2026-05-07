import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

const links = [
  { href: '/', label: 'Главная' },
  { href: '/prices', label: 'Цены' },
  { href: '/works', label: 'Проекты' },
  { href: '/company', label: 'Компания' },
  { href: '/privacy', label: 'Политика конфиденциальности' },
  { href: '/legal', label: 'Правовая информация' },
]

export default function SitemapPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold text-zinc-100 md:text-4xl">Карта сайта</h1>
      <Card>
        <CardHeader>
          <CardTitle>Разделы сайта</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link className="text-zinc-200 hover:text-yellow-300" to={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}
