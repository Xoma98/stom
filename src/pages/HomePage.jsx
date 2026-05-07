import { Link } from 'react-router-dom'
import { badgesData } from '../content/badgesData'
import { homeData } from '../content/homeData'
import { leadFormData } from '../content/leadFormData'
import { reviewsData } from '../content/reviewsData'
import { servicesHomeData } from '../content/servicesHomeData'
import { teamData } from '../content/teamData'
import LeadForm from '../components/forms/LeadForm'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'

export default function HomePage() {
  return (
    <section className="space-y-10 pb-6">
      {/* Hero */}
      <div className="grid gap-6 md:grid-cols-2 md:items-start">
        <div className="space-y-4">
          <div className="inline-flex items-center rounded-full border border-[#005580]/20 bg-[#005580]/5 px-4 py-2 text-xs font-semibold text-[#005580]">
            {homeData.hero.badge}
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-zinc-900 md:text-5xl">
            {homeData.hero.title}
          </h1>
          <p className="max-w-xl text-lg text-zinc-700">{homeData.hero.description}</p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to={homeData.hero.ctaPrimary.href}
              className="inline-flex items-center justify-center rounded-md bg-[#f89406] px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-[#c67605]"
            >
              {homeData.hero.ctaPrimary.text}
            </Link>
            <Link
              to={homeData.hero.ctaSecondary.href}
              className="inline-flex items-center justify-center rounded-md border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-50"
            >
              {homeData.hero.ctaSecondary.text}
            </Link>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-[#005580]">Бесплатная консультация</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-zinc-700">
              Оставьте контакт — мы перезвоним и подберем решение под ваши задачи.
            </div>
            <div className="mt-5">
              <LeadForm
                title={leadFormData.title}
                subtitle="Консультация специалиста бесплатно"
                compact
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Services */}
      <div className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Наши услуги</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {servicesHomeData.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-zinc-700">{service.description}</p>
                <div className="text-sm text-zinc-600">
                  Цена: <span className="font-semibold text-[#f89406]">{service.priceFrom}</span>
                </div>
                <ul className="space-y-1 text-sm text-zinc-600">
                  {service.highlights.map((h) => (
                    <li key={h}>• {h}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-1">
                  <Button variant="outline" className="flex-1 min-w-[140px] sm:flex-none">
                    Узнать подробнее
                  </Button>
                  <Button className="flex-1 min-w-[140px] sm:flex-none">Записаться</Button>
                </div>

                <div className="pt-1 text-sm font-medium text-zinc-900">
                  Оставьте свой контакт — свяжемся в ближайшее рабочее время
                </div>
                <LeadForm title="Оставьте контакт" subtitle="" compact showConsent />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Price list / consultation */}
      <Card>
        <CardContent className="space-y-4 py-2">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-semibold tracking-wide text-[#005580]">
                {leadFormData.title}
              </div>
              <div className="mt-1 text-lg font-semibold text-zinc-900">
                {leadFormData.subtitle}
              </div>
            </div>
            <div className="hidden md:block text-zinc-600">
              Прайс-лист + подбор оборудования под ваш бюджет
            </div>
          </div>
          <LeadForm title="Прайс-лист" subtitle="Консультация специалиста бесплатно" compact={false} />
        </CardContent>
      </Card>

      {/* Team */}
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Врачи клиники</h2>
        <div className="text-zinc-700">
          Все наши специалисты проходят обучение и поддерживают уровень компетенций, чтобы проекты
          выполнялись точно в срок и с правильной комплектацией.
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {teamData.map((member) => (
            <Card key={member.name}>
              <CardHeader>
                <CardTitle className="text-zinc-900">{member.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-[#005580] text-sm font-semibold">{member.role}</div>
                <div className="text-zinc-600 text-sm">{member.experience}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Badges */}
      <div className="grid gap-4 md:grid-cols-3">
        {badgesData.map((b) => (
          <Card key={b.title}>
            <CardHeader>
              <CardTitle>{b.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-700">{b.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Reviews */}
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-zinc-900 md:text-4xl">{reviewsData.title}</h2>
        <Card>
          <CardContent className="space-y-3 py-2">
            <div className="text-zinc-700">
              Почитать отзывы и посмотреть расположение — перейдите на карту.
            </div>
            <a
              className="inline-flex items-center gap-2 text-[#005580] hover:text-[#f89406]"
              href={reviewsData.mapHref}
              target="_blank"
              rel="noreferrer"
            >
              {reviewsData.mapLabel}
              <span className="text-zinc-400">↗</span>
            </a>
          </CardContent>
        </Card>
      </div>

      {/* Questions */}
      <div className="grid gap-4 md:grid-cols-2 md:items-start">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Остались вопросы?</h2>
          <div className="text-zinc-700">
            Найти нас на карте и получить ответы на вопросы можно прямо сейчас.
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={reviewsData.mapHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-zinc-300 bg-transparent px-4 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-50"
            >
              {reviewsData.mapLabel}
            </a>
            <Link
              to="/prices"
              className="inline-flex items-center justify-center rounded-md bg-[#f89406] px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-[#c67605]"
            >
              Узнать цены
            </Link>
          </div>
        </div>
        <Card>
          <CardContent className="pt-2">
            <LeadForm title="Быстрая связь" subtitle="Оставьте контакт — перезвоним" compact />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
