import { MinusIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/layout'

import { useAppDispatch, useAppSelector } from 'app/hooks'
import { removeItem } from './cart-slice'

export default function Cart() {
  const { cards, totalPrice } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  return (
    <Box>
      <SimpleGrid columns={[1, 2]} spacing="2rem" my="2">
        {cards?.map((card) => {
          const { uuid, images, cardmarket } = card
          return (
            <Box key={uuid}>
              <Flex justifyContent="space-between" alignItems="center">
                <Text>${cardmarket?.prices?.averageSellPrice}</Text>
                <MinusIcon
                  cursor="pointer"
                  onClick={() => dispatch(removeItem(uuid!))}
                />
              </Flex>
              {images.large && <Image src={images.large} />}
            </Box>
          )
        })}
      </SimpleGrid>
      <Text>Total price is: {totalPrice}</Text>
    </Box>
  )
}
