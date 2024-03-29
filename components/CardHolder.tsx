import { Grid } from '@chakra-ui/layout'
import { v4 as uuidv4 } from 'uuid'
import { useToast } from '@chakra-ui/toast'

import { useAppDispatch, useAppSelector } from 'app/hooks'
import Card, { IPokemonCard } from 'components/Card'
import { addItem } from 'features/cart/cart-slice'

interface ICardHolder {
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
    <Grid
      templateColumns="repeat(auto-fill, minmax(20rem, 1fr))"
      gap={6}
      my="2"
    >
      {data?.map((card) => {
        return <Card key={card.id} {...card} onAdd={() => onAddHandler(card)} />
      })}
    </Grid>
  )
}
