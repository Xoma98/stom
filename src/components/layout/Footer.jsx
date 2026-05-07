import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { footerData } from '../../content/footerData'
import { Separator } from '../ui/separator'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white px-4 py-6 text-sm text-zinc-600 md:px-8">
      <div className="space-y-4">
        <div className="grid gap-3 md:grid-cols-3">
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#f89406]" />
            {footerData.address}
          </p>
          <a href={`mailto:${footerData.email}`} className="flex items-center gap-2 hover:text-[#f89406]">
            <Mail className="h-4 w-4 text-[#005580]" />
            {footerData.email}
          </a>
          <a
            href={`tel:${footerData.phone.replace(/[^\d+]/g, '')}`}
            className="flex items-center gap-2 hover:text-[#f89406]"
          >
            <Phone className="h-4 w-4 text-[#005580]" />
            {footerData.phone}
          </a>
        </div>
        <Separator />
        <div className="flex flex-wrap gap-4 text-zinc-500">
          <Link to="/sitemap" className="hover:text-[#f89406]">
            Карта сайта
          </Link>
          <Link to="/privacy" className="hover:text-[#f89406]">
            Политика конфиденциальности
          </Link>
          <Link to="/legal" className="hover:text-[#f89406]">
            Правовая информация
          </Link>
        </div>
      </div>
    </footer>
  )
}
