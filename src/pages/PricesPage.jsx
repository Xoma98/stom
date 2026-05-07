import LeadForm from '../components/forms/LeadForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { pricesData } from '../content/pricesData'
import { leadFormData } from '../content/leadFormData'

export default function PricesPage() {
  return (
    <section className="space-y-8 pb-6">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">ПРАЙС-ЛИСТ</h1>
        <div className="text-zinc-600">Подбор оборудования под задачи клиники и ваш бюджет.</div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {pricesData.map((block) => (
          <Card key={block.title}>
            <CardHeader>
              <CardTitle>{block.title}</CardTitle>
              <CardDescription>{block.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {block.rows.map((row) => (
                  <li
                    key={row.name}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-md border border-zinc-200 px-3 py-2"
                  >
                    <span className="text-zinc-700">{row.name}</span>
                    <span className="font-semibold text-[#f89406]">{row.price}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="space-y-4 py-2">
          <div>
            <div className="text-sm font-semibold tracking-wide text-[#005580]">
              {leadFormData.title}
            </div>
            <div className="mt-1 text-lg font-semibold text-zinc-900">{leadFormData.subtitle}</div>
          </div>
          <LeadForm />
        </CardContent>
      </Card>
    </section>
  )
}
