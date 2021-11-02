import NextImage from 'next/image'
import { Button } from '@chakra-ui/button'
import { Badge, Box, Flex, Heading } from '@chakra-ui/layout'
import { MdAddShoppingCart, MdRemoveShoppingCart } from 'react-icons/md'

import { IPokemonCard } from 'types'

interface ICard extends IPokemonCard {
  onAdd?: () => void
  onRemove?: () => void
}

export default function Card({
  id,
  name,
  images,
  cardmarket,
  rarity,
  onAdd,
  onRemove,
}: ICard) {
  return (
    <Flex key={id} flexDirection="column" bgColor="gray.200" borderRadius="xl">
      <Flex justifyContent="space-between" alignItems="center" p="2">
        <Heading as="h2" size="md" isTruncated>
          {name}
        </Heading>
        <Badge variant="outline" colorScheme="teal">
          {rarity}
        </Badge>
      </Flex>

      <Box
        minH={['md', 'xs', 'xl', 'md', 'xs']}
        position="relative"
      >
        {images.small && (
          <NextImage src={images.small} alt={name} layout="fill" />
        )}
      </Box>

      <Button
        leftIcon={onAdd ? <MdAddShoppingCart /> : <MdRemoveShoppingCart />}
        colorScheme="teal"
        variant="solid"
        onClick={onAdd || onRemove}
        mt="2"
      >
        ${cardmarket?.prices?.averageSellPrice}
      </Button>
    </Flex>
  )
}
