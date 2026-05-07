import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { pricesData } from '../content/pricesData'

export default function PricesPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold text-zinc-100 md:text-4xl">Цены на оборудование</h1>
      {pricesData.map((block) => (
        <Card key={block.title}>
          <CardHeader>
            <CardTitle>{block.title}</CardTitle>
            <CardDescription>{block.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {block.rows.map((row) => (
                <li key={row.name} className="flex flex-wrap items-center justify-between gap-2 rounded-md border border-zinc-800 px-3 py-2">
                  <span>{row.name}</span>
                  <span className="font-semibold text-yellow-300">{row.price}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </section>
  )
}
