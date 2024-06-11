import { AnimatedTag } from '@/components/animated-tag'
import { Button } from '@/components/button'

export function Hero() {
  return (
    <div
      style={{ '--bg-image': 'url(/hero-bg.png)' }}
      className="flex h-[calc(100vh_-_5rem)] w-screen items-start bg-[image:var(--bg-image)] bg-cover bg-no-repeat p-20"
    >
      <div className="flex h-full max-w-xl flex-col justify-center gap-4">
        <AnimatedTag startDirection="bottom">
          <span className="text-lg">
            frutos <strong className="font-bold text-red-500">frescos</strong>
          </span>
        </AnimatedTag>
        <AnimatedTag startDirection="left">
          <h1 className="text-4xl font-bold uppercase text-zinc-700">
            A melhor qualidade
          </h1>
        </AnimatedTag>
        <AnimatedTag startDirection="top">
          <p className="text-base text-zinc-500">
            Delicie-se com a essência da natureza em cada mordida! Nossos frutos
            são cultivados com paixão e colhidos com cuidado, trazendo frescor e
            saúde diretamente do campo para a sua mesa.
          </p>
        </AnimatedTag>
        <AnimatedTag startDirection="right">
          <Button className="w-fit">Saber mais</Button>
        </AnimatedTag>
      </div>
    </div>
  )
}
