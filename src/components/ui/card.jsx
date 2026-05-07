import { cn } from '../../lib/utils'

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        'rounded-xl border border-zinc-200 bg-white p-5 shadow-sm shadow-black/5',
        className,
      )}
      {...props}
    />
  )
}

export function CardHeader({ className, ...props }) {
  return <div className={cn('mb-4 space-y-1', className)} {...props} />
}

export function CardTitle({ className, ...props }) {
  return (
    <h2 className={cn('text-xl font-semibold text-zinc-900', className)} {...props} />
  )
}

export function CardDescription({ className, ...props }) {
  return <p className={cn('text-sm text-zinc-600', className)} {...props} />
}

export function CardContent({ className, ...props }) {
  return <div className={cn('space-y-3', className)} {...props} />
}
