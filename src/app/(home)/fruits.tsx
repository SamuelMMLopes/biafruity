import blackBerryBackground from '@/assets/black-berry.png'
import blueBerryBackground from '@/assets/blue-berry.png'
import raspBerryBackground from '@/assets/rasp-berry.png'
import redCurrantBackground from '@/assets/red-currant.png'
import { BlackBerry } from '@/components/black-berry'
import { BlueBerry } from '@/components/blue-berry'
import { FruitCard } from '@/components/fruit-card'
import { RaspBerry } from '@/components/rasp-berry'
import { RedCurrant } from '@/components/red-currant'

export function Fruits() {
  return (
    <div className="flex">
      <FruitCard.Root href="/fruits">
        <FruitCard.Background src={redCurrantBackground} alt="Groselhas" />
        <FruitCard.Icon>
          <RedCurrant />
        </FruitCard.Icon>
        <FruitCard.Title>Groselhas</FruitCard.Title>
      </FruitCard.Root>

      <FruitCard.Root href="/fruits">
        <FruitCard.Background src={blackBerryBackground} alt="Amoras" />
        <FruitCard.Icon>
          <BlackBerry />
        </FruitCard.Icon>
        <FruitCard.Title>Amoras</FruitCard.Title>
      </FruitCard.Root>

      <FruitCard.Root href="/fruits">
        <FruitCard.Background src={blueBerryBackground} alt="Mítilos" />
        <FruitCard.Icon>
          <BlueBerry />
        </FruitCard.Icon>
        <FruitCard.Title>Mítilos</FruitCard.Title>
      </FruitCard.Root>

      <FruitCard.Root href="/fruits">
        <FruitCard.Background src={raspBerryBackground} alt="Fambroesas" />
        <FruitCard.Icon>
          <RaspBerry />
        </FruitCard.Icon>
        <FruitCard.Title>Fambroesas</FruitCard.Title>
      </FruitCard.Root>
    </div>
  )
}
