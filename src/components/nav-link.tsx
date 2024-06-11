'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps } from 'react'

type NavLinkProps = ComponentProps<typeof Link>

export function NavLink(props: NavLinkProps) {
  const actualPathname = usePathname()
  return (
    <Link
      data-active={actualPathname === props.href}
      {...props}
      className="text-sm transition-colors data-[active=true]:font-semibold data-[active=true]:text-red-500 hover:text-red-500"
    />
  )
}
