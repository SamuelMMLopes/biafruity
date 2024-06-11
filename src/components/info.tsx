import { Slot } from '@radix-ui/react-slot'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { DrawnCircle } from './drawn-circle'

type RootProps = ComponentProps<'div'>

function Root({ className, ...props }: RootProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'group flex max-w-60 flex-col items-center justify-center gap-4',
        className
      )}
    />
  )
}

type IconProps = ComponentProps<'div'>

function Icon({ className, children, ...props }: IconProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'relative flex items-center justify-center text-red-500 transition-colors group-hover:text-gray-50',
        className
      )}
    >
      <Slot className="absolute size-16">{children}</Slot>
      <DrawnCircle className="size-28 rounded-full group-hover:bg-red-500" />
    </div>
  )
}

type TitleProps = ComponentProps<'strong'>

function Title({ className, ...props }: TitleProps) {
  return (
    <strong
      {...props}
      className={twMerge('text-2xl text-zinc-700', className)}
    />
  )
}

type TextProps = ComponentProps<'span'>

function Text({ className, ...props }: TextProps) {
  return (
    <span
      {...props}
      className={twMerge(
        'text-center text-sm font-medium text-zinc-500',
        className
      )}
    />
  )
}

export const Info = {
  Root,
  Icon,
  Title,
  Text,
}
