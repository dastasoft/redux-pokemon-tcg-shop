import { MutableRefObject } from 'react'
import { IconButton } from '@chakra-ui/button'
import { Box, Circle, Flex, Heading } from '@chakra-ui/layout'
import { MdShoppingCart } from 'react-icons/md'

import { useAppSelector } from 'app/hooks'

interface IHeader {
  btnRef: MutableRefObject<HTMLButtonElement>
  onOpen: () => void
}

export default function Header({ btnRef, onOpen }: IHeader) {
  const totalCards = useAppSelector((state) => state.cart.cards).length

  return (
    <Flex
      as="header"
      borderBottom="1px"
      px="2"
      py="4"
      w="full"
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      bgColor="white"
      zIndex={12}
    >
      <Heading>Pokemon TCG Shop</Heading>
      <Box>
        <IconButton
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
          aria-label="Open Cart"
          icon={<MdShoppingCart />}
        />
        {totalCards > 0 && (
          <Circle
            size="20px"
            bg="tomato"
            color="white"
            position="absolute"
            top={1}
            right={1}
          >
            {totalCards}
          </Circle>
        )}
      </Box>
    </Flex>
  )
}
