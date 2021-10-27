import { SimpleGrid } from '@chakra-ui/layout'
import { v4 as uuidv4 } from 'uuid'

import { useAppDispatch } from 'app/hooks'
import { addItem } from 'features/cart/cart-slice'
import Card from './Card'
import { IPokemonCard } from 'types'

export interface ICardHolder {
  data: IPokemonCard[] | undefined
}

export default function CardHolder({ data }: ICardHolder) {
  const dispatch = useAppDispatch()

  return (
    <SimpleGrid columns={[1, 1, 2, 3, 5]} spacing="2rem" my="2">
      {data?.map((card) => {
        return (
          <Card
            key={card.id}
            {...card}
            onAdd={() => dispatch(addItem({ uuid: uuidv4(), ...card }))}
          />
        )
      })}
    </SimpleGrid>
  )
}
