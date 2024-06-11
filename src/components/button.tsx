import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = ComponentProps<'button'>

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        'rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-zinc-50 transition-colors hover:bg-red-400',
        className
      )}
    />
  )
}
