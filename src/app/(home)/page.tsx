import { Fruits } from './fruits'
import { Hero } from './hero'
import { Welcome } from './welcome'

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <Welcome />
      <Fruits />
    </div>
  )
}
