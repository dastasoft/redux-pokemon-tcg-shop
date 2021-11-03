import { Button } from '@chakra-ui/button'
import { Flex, Heading, SimpleGrid, VStack } from '@chakra-ui/layout'

import { useAppDispatch, useAppSelector } from 'app/hooks'
import Card from 'components/Card'
import { removeItem } from './cart-slice'

export default function Cart() {
  const { cards, totalPrice } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()
  const areCards = cards.length > 0

  return (
    <Flex flexDir="column" alignItems="center">
      <VStack spacing="3" mb="8">
        <Heading as="h3" fontSize="md">
          {areCards
            ? `Total price is: $${totalPrice}`
            : `There are no cards in the cart`}
        </Heading>
        {areCards && <Button variant="pkmn">Checkout</Button>}
      </VStack>
      {areCards && (
        <>
          <Heading as="h4" fontSize="md">
            Your items
          </Heading>
          <SimpleGrid columns={1} spacing="2rem" my="2" w="full">
            {cards?.map((card) => (
              <Card
                key={card.uuid}
                {...card}
                onRemove={() => dispatch(removeItem(card.uuid!))}
              />
            ))}
          </SimpleGrid>
        </>
      )}
    </Flex>
  )
}
