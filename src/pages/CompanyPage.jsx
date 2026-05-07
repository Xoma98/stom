import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { companyData } from '../content/companyData'

export default function CompanyPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold text-zinc-100 md:text-4xl">О компании</h1>
      {companyData.map((block) => (
        <Card key={block.title}>
          <CardHeader>
            <CardTitle>{block.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {block.body.split('\n').map((line) => (
              <p key={line} className="text-zinc-300">
                {line}
              </p>
            ))}
          </CardContent>
        </Card>
      ))}
    </section>
  )
}
