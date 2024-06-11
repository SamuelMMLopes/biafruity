import { Slot } from '@radix-ui/react-slot'
import Image from 'next/image'
import Link from 'next/link'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type RootProps = ComponentProps<typeof Link>

function Root({ className, ...props }: RootProps) {
  return (
    <Link
      {...props}
      className={twMerge(
        'group relative flex h-[232px] w-[25%] flex-col items-center justify-center gap-8 overflow-hidden p-8',
        className
      )}
    />
  )
}

type BackgroundProps = ComponentProps<typeof Image>

function Background({ alt, className, ...props }: BackgroundProps) {
  return (
    <Image
      {...props}
      alt={alt}
      className={twMerge(
        'absolute -z-50 h-full brightness-50 transition duration-500 ease-in-out group-hover:scale-125',
        className
      )}
    />
  )
}

type IconProps = ComponentProps<'div'>

function Icon({ className, ...props }: IconProps) {
  return (
    <Slot {...props} className={twMerge('size-24 text-zinc-200', className)} />
  )
}

type TitleProps = ComponentProps<'span'>

function Title({ className, ...props }: TitleProps) {
  return (
    <span
      {...props}
      className={twMerge('text-4xl font-bold uppercase text-white', className)}
    />
  )
}

export const FruitCard = {
  Root,
  Background,
  Icon,
  Title,
}
