import { X } from 'lucide-react'
import { useEffect } from 'react'

export function Dialog({ open, onOpenChange, children }) {
  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onOpenChange(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onOpenChange, open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <button
        type="button"
        aria-label="Закрыть"
        onClick={() => onOpenChange(false)}
        className="absolute right-4 top-4 rounded-md p-2 text-zinc-200 hover:bg-zinc-800"
      >
        <X className="h-6 w-6" />
      </button>
      {children}
    </div>
  )
}
