import { useState } from 'react'
import { Button } from '../ui/button'
import { leadFormData } from '../../content/leadFormData'
import { Link } from 'react-router-dom'

export default function LeadForm({
  title = leadFormData.title,
  subtitle = leadFormData.subtitle,
  compact = false,
  showConsent = true,
}) {
  const [consent, setConsent] = useState(true)

  return (
    <div className="space-y-4">
      <div>
        <div className="text-sm font-semibold tracking-wide text-[#005580]">{title}</div>
        <div className="mt-1 text-base font-semibold text-zinc-900">{subtitle}</div>
      </div>

      <form
        className="space-y-3"
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <div className={compact ? 'grid gap-3 sm:grid-cols-2' : 'grid gap-3 sm:grid-cols-2'}>
          <label className="space-y-1 text-sm text-zinc-700">
            <span>{leadFormData.fields.nameLabel}</span>
            <input
              required
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-[#f89406] focus:ring-2 focus:ring-[#f89406]/20"
              type="text"
              name="name"
              autoComplete="name"
            />
          </label>

          <label className="space-y-1 text-sm text-zinc-700">
            <span>{leadFormData.fields.phoneLabel}</span>
            <input
              required
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-[#f89406] focus:ring-2 focus:ring-[#f89406]/20"
              type="tel"
              name="phone"
              placeholder={leadFormData.fields.phonePlaceholder}
              autoComplete="tel"
            />
          </label>
        </div>

        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-600">
            <span>{compact ? 'Оставьте контакт:' : leadFormData.consentPrefix}</span>
            <span className="font-medium text-zinc-700">Телефон</span>
          </div>

          {showConsent && (
            <label className="flex items-start gap-2 text-xs leading-4 text-zinc-600">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                required
                className="mt-0.5 h-4 w-4 accent-[#f89406]"
              />
              <span>
                {leadFormData.consentPrefix}{' '}
                {leadFormData.consentLinks[0] ? (
                  <>
                    <Link className="text-[#005580] hover:text-[#f89406]" to={leadFormData.consentLinks[0].href}>
                      {leadFormData.consentLinks[0].label}
                    </Link>{' '}
                    и{' '}
                    <Link className="text-[#005580] hover:text-[#f89406]" to={leadFormData.consentLinks[1].href}>
                      {leadFormData.consentLinks[1].label}
                    </Link>
                  </>
                ) : null}
              </span>
            </label>
          )}
        </div>

        <div className="flex items-center gap-3">
          <Button type="submit" className="min-w-[160px]">
            {leadFormData.submitText}
          </Button>
        </div>
      </form>
    </div>
  )
}

