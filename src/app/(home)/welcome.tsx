import { Eye, Gem, Target } from 'lucide-react'
import Image from 'next/image'

import { Info } from '@/components/info'

export function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h2 className="text-4xl font-bold text-zinc-700">
        Bem vindo a Biafruity
      </h2>
      <div className="relative flex w-full max-w-6xl items-start justify-center pt-64">
        <Image src="/fruits.png" alt="Red fruits" width={798} height={594} />
        <Info.Root className="absolute left-0 top-[24%]">
          <Info.Icon>
            <Target />
          </Info.Icon>
          <Info.Title>Missão</Info.Title>
          <Info.Text>
            Somos uma empresa que tem como premissa o sabor, frescura e
            qualidade dos seus produtos
          </Info.Text>
        </Info.Root>

        <Info.Root className="absolute left-[40%] top-0">
          <Info.Icon>
            <Eye />
          </Info.Icon>
          <Info.Title>Visão</Info.Title>
          <Info.Text>
            A Biafruity pretende estar entre os principais players do mercado
            internacional e ser referência de excelência no sector dos frutos
            silvestres.
          </Info.Text>
        </Info.Root>

        <Info.Root className="absolute right-0 top-[24%]">
          <Info.Icon>
            <Gem />
          </Info.Icon>
          <Info.Title>Valores</Info.Title>
          <Info.Text>
            Rigor e Profissionalismo Transparência Honestidade Trabalho em
            equipe Inovação e Conhecimento
          </Info.Text>
        </Info.Root>
      </div>
    </div>
  )
}
