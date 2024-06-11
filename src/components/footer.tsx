import { Mail, Map, Phone } from 'lucide-react'

import { Logo } from './logo'

export function Footer() {
  return (
    <footer className="mt-20 flex items-center justify-between bg-zinc-100 px-20 py-8">
      <div className="flex max-w-[25%] flex-col justify-center gap-5">
        <Logo />
        <p className="text-sm text-zinc-700">
          Tudo começou em 2012 com a missão de oferecer frutos vermelhos de alta
          qualidade. Orgulhamo-nos de levar os melhores frutos vermelhos do
          campo até à sua mesa.
        </p>
      </div>
      <div className="flex flex-col items-start justify-center gap-3">
        <div className="flex items-start justify-center gap-2">
          <Mail className="size-4 text-red-500" />
          <span className="text-sm text-zinc-700">biafruity@gmail.com</span>
        </div>
        <div className="flex items-start justify-center gap-2">
          <Map className="size-4 text-red-500" />
          <span className="text-sm text-zinc-700">
            Rua dos Emigrantes n.o 800 3600-459 Moita Casar-Daire
          </span>
        </div>
        <div className="flex items-start justify-center gap-2">
          <Phone className="size-4 text-red-500" />
          <span className="text-sm text-zinc-700">+351 936300897</span>
        </div>
      </div>
    </footer>
  )
}
