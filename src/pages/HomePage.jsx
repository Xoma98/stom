import { Link } from 'react-router-dom'
import { homeData } from '../content/homeData'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export default function HomePage() {
  return (
    <section className="space-y-6">
      <Card className="bg-zinc-900">
        <CardContent className="space-y-4 pt-2">
          <span className="inline-flex rounded-full border border-yellow-400/40 bg-yellow-400/10 px-3 py-1 text-xs text-yellow-300">
            {homeData.hero.badge}
          </span>
          <h2 className="text-3xl font-semibold leading-tight text-zinc-100 md:text-4xl">
            {homeData.hero.title}
          </h2>
          <p className="max-w-3xl text-zinc-300">{homeData.hero.description}</p>
          <div className="flex flex-wrap gap-3">
            <Link to={homeData.hero.ctaPrimary.href} className="rounded-md bg-yellow-400 px-4 py-2 text-sm font-medium text-zinc-950">
              {homeData.hero.ctaPrimary.text}
            </Link>
            <Link to={homeData.hero.ctaSecondary.href} className="rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-zinc-800">
              {homeData.hero.ctaSecondary.text}
            </Link>
          </div>
        </CardContent>
      </Card>
      <div className="grid gap-4 md:grid-cols-3">
        {homeData.advantages.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-300">{item.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
