import { cn } from '../../lib/utils'

export function Separator({ className }) {
  return <div className={cn('h-px w-full bg-zinc-200', className)} />
}
