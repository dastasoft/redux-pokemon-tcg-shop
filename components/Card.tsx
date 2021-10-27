import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Flex, Heading } from '@chakra-ui/layout'
import { BsCartPlusFill } from 'react-icons/bs'

import { IPokemonCard } from 'types'

interface ICard extends IPokemonCard {
  onAdd: () => void
}

export default function Card({ id, name, images, cardmarket, onAdd }: ICard) {
  return (
    <Flex key={id} flexDirection="column" bgColor="gray.200" borderRadius="xl">
      <Heading as="h2" size="md" p="2" isTruncated>
        {name}
      </Heading>
      {images.large && <Image src={images.large} />}

      <Button
        leftIcon={<BsCartPlusFill />}
        colorScheme="teal"
        variant="solid"
        onClick={onAdd}
        mt="2"
      >
        ${cardmarket?.prices?.averageSellPrice}
      </Button>
    </Flex>
  )
}
