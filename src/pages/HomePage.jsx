import { dimaData } from '../content/dimaData'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'

const severityColors = {
  тяжкое: 'bg-red-100 text-red-800 border-red-200',
  'особо коварное': 'bg-purple-100 text-purple-800 border-purple-200',
  'бытовое злодейство': 'bg-amber-100 text-amber-800 border-amber-200',
  экономическое: 'bg-orange-100 text-orange-800 border-orange-200',
  хроническое: 'bg-blue-100 text-blue-800 border-blue-200',
  'особо циничное': 'bg-rose-100 text-rose-800 border-rose-200',
}

export default function HomePage() {
  const { hero, intro, charges, verdict } = dimaData

  return (
    <div className="space-y-16 pb-10">
      {/* Hero */}
      <section id="hero" className="grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-5">
          <div className="inline-flex items-center rounded-full border border-orange-300 bg-orange-50 px-4 py-2 text-xs font-bold tracking-wide text-orange-700">
            {hero.badge}
          </div>
          <h1 className="text-4xl font-black leading-tight text-zinc-900 md:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="text-xl font-semibold text-orange-600">{hero.subtitle}</p>
          <p className="max-w-xl text-lg text-zinc-600">{hero.description}</p>
          <div className="flex flex-wrap gap-3">
            <a href="#charges">
              <Button className="bg-orange-500 hover:bg-orange-600">Читать обвинения</Button>
            </a>
            <a href="#verdict">
              <Button variant="outline">Вынести вердикт</Button>
            </a>
          </div>
          <div className="flex flex-wrap gap-6 pt-2">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-orange-500">{stat.value}</div>
                <div className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-orange-200 to-amber-100 opacity-60 blur-2xl" />
          <img
            src={hero.image}
            alt="Дмитрий — Пёс-Да-Лис"
            className="relative w-full rounded-2xl border-4 border-orange-300 shadow-xl"
          />
        </div>
      </section>

      {/* Intro */}
      <section id="about" className="rounded-2xl border-2 border-dashed border-orange-300 bg-orange-50/50 p-6 md:p-8">
        <h2 className="mb-3 text-2xl font-bold text-zinc-900 md:text-3xl">
          Почему Дима — негодяй?
        </h2>
        <p className="text-lg leading-relaxed text-zinc-700">{intro}</p>
      </section>

      {/* Charges */}
      <section id="charges" className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-black text-zinc-900 md:text-4xl">
            Список обвинений
          </h2>
          <p className="mt-2 text-zinc-600">
            Каждый пункт проверен на практике. Смешно — да. Неправда — нет.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {charges.map((charge, index) => (
            <Card
              key={charge.id}
              className="overflow-hidden border-orange-100 transition-shadow hover:shadow-lg hover:shadow-orange-100"
            >
              <div className="relative">
                <img
                  src={charge.image}
                  alt={charge.title}
                  className={`h-48 w-full object-cover ${charge.id === 'gps' ? 'object-top' : ''}`}
                />
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg shadow">
                    {charge.emoji}
                  </span>
                  <span className="rounded-full bg-white/90 px-2 py-1 text-xs font-bold text-zinc-600 shadow">
                    #{index + 1}
                  </span>
                </div>
              </div>
              <CardHeader>
                <div className="flex flex-wrap items-center gap-2">
                  <CardTitle className="text-orange-700">{charge.title}</CardTitle>
                  <span
                    className={`rounded-full border px-2 py-0.5 text-xs font-semibold ${severityColors[charge.severity]}`}
                  >
                    {charge.severity}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-zinc-700">{charge.argument}</p>
                <blockquote className="border-l-4 border-orange-400 bg-orange-50 px-4 py-2 text-sm italic text-zinc-600">
                  {charge.evidence}
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Verdict */}
      <section id="verdict">
        <Card className="border-2 border-orange-400 bg-gradient-to-br from-orange-50 to-amber-50 text-center">
          <CardContent className="space-y-4 py-8">
            <div className="text-5xl">⚖️</div>
            <h2 className="text-3xl font-black text-zinc-900">{verdict.title}</h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-700">{verdict.text}</p>
            <Button
              className="mt-2 bg-red-600 hover:bg-red-700"
              onClick={() => alert('Петиция принята! Дима уведомлён. (нет)')}
            >
              {verdict.cta}
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
