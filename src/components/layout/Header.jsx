import { PhoneCall } from 'lucide-react'
import { footerData } from '../../content/footerData'

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white px-4 py-4 md:px-8">
      <div className="grid items-start gap-3 md:grid-cols-3 md:items-center">
        <div className="text-sm text-zinc-600">
          <div className="font-medium text-zinc-900">{footerData.address}</div>
          <div>{footerData.workHours}</div>
        </div>

        <div className="text-center">
          <div className="text-base font-semibold text-[#005580] md:text-lg">
            {footerData.brand}
          </div>
          <div className="text-xs text-zinc-600">Оборудование для современной стоматологии</div>
        </div>

        <div className="flex items-center justify-end gap-3">
          <a
            href={`tel:${footerData.phone.replace(/[^\d+]/g, '')}`}
            className="flex items-center gap-2 text-sm font-semibold text-[#f89406] hover:text-[#c67605]"
          >
            <PhoneCall className="h-4 w-4" />
            {footerData.phone}
          </a>
        </div>
      </div>
    </header>
  )
}
