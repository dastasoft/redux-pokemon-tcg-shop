import { SimpleGrid } from '@chakra-ui/layout'
import { v4 as uuidv4 } from 'uuid'

import { useAppDispatch, useAppSelector } from 'app/hooks'
import { addItem } from 'features/cart/cart-slice'
import Card from './Card'
import { IPokemonCard } from 'types'
import { useToast } from '@chakra-ui/toast'

export interface ICardHolder {
  data: IPokemonCard[] | undefined
}

export default function CardHolder({ data }: ICardHolder) {
  const totalCards = useAppSelector((state) => state.cart.cards).length
  const dispatch = useAppDispatch()
  const toast = useToast()

  const onAddHandler = (card: IPokemonCard) => {
    dispatch(addItem({ uuid: uuidv4(), ...card }))

    toast({
      title: 'Added to the cart.',
      description: `You have a total of ${totalCards + 1} cards`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <SimpleGrid columns={[1, 2, 2, 3, 5]} spacing="2rem" my="2">
      {data?.map((card) => {
        return <Card key={card.id} {...card} onAdd={() => onAddHandler(card)} />
      })}
    </SimpleGrid>
  )
}
