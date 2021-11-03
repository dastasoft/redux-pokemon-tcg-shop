import { MutableRefObject } from 'react'
import { IconButton } from '@chakra-ui/button'
import { Box, Circle, Flex } from '@chakra-ui/layout'
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode'
import { MdShoppingCart } from 'react-icons/md'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

import { useAppSelector } from 'app/hooks'
import Logo from 'components/Logo'

interface IHeader {
  btnRef: MutableRefObject<HTMLButtonElement>
  onOpen: () => void
}

export default function Header({ btnRef, onOpen }: IHeader) {
  const totalCards = useAppSelector((state) => state.cart.cards).length
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue('white', 'gray.800')

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
      bgColor={bgColor}
      zIndex={12}
    >
      <Logo />
      <IconButton
        onClick={toggleColorMode}
        aria-label="Toggle theme"
        icon={colorMode === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
        variant="ghost"
      />
      <Box>
        <IconButton
          ref={btnRef}
          variant="pkmn"
          onClick={onOpen}
          aria-label="Open Cart"
          icon={<MdShoppingCart />}
        />
        {totalCards > 0 && (
          <Circle
            size="20px"
            bg="primary"
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
