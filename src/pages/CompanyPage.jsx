import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { companyData } from '../content/companyData'
import { teamData } from '../content/teamData'

export default function CompanyPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">О компании</h1>
      {companyData.map((block) => (
        <Card key={block.title}>
          <CardHeader>
            <CardTitle>{block.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {block.body.split('\n').map((line) => (
              <p key={line} className="text-zinc-600">
                {line}
              </p>
            ))}
          </CardContent>
        </Card>
      ))}

      <div className="space-y-3 pt-4">
        <h2 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Команда</h2>
        <div className="text-zinc-600">
          Проектируем комплектацию кабинетов и сопровождаем поставку до ввода в эксплуатацию.
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {teamData.map((member) => (
            <Card key={member.name}>
              <CardHeader>
                <CardTitle className="text-zinc-900">{member.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm font-semibold text-[#005580]">{member.role}</div>
                <div className="text-sm text-zinc-600">{member.experience}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
