import { PhoneCall, Stethoscope } from 'lucide-react'
import { footerData } from '../../content/footerData'

export default function Header() {
  return (
    <header className="border-b border-zinc-800 px-4 py-5 md:px-8">
      <div className="grid items-center gap-4 md:grid-cols-3">
        <div className="hidden md:block" />
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-yellow-400">
            <Stethoscope className="h-5 w-5" />
            <span className="text-lg font-semibold">{footerData.brand}</span>
          </div>
          <p className="text-sm text-zinc-400">Оборудование для современной стоматологии</p>
        </div>
        <a
          href={`tel:${footerData.phone.replace(/[^\d+]/g, '')}`}
          className="flex items-center justify-center gap-2 text-sm font-medium text-zinc-100 hover:text-yellow-300 md:justify-end"
        >
          <PhoneCall className="h-4 w-4 text-yellow-400" />
          {footerData.phone}
        </a>
      </div>
    </header>
  )
}
