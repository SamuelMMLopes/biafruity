import { Logo } from './logo'
import { NavLink } from './nav-link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-20 items-center justify-between bg-zinc-50 px-20 shadow-lg">
      <Logo />
      <div className="flex items-center justify-center gap-5">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/fruits">Frutos</NavLink>
        <NavLink href="/products">Produtos</NavLink>
        <NavLink href="/about-us">Sobre nós</NavLink>
        <NavLink href="/contacts">Contactos</NavLink>
      </div>
    </header>
  )
}
