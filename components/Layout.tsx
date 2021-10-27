import { ReactNode, useRef } from 'react'
import { IconButton } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { Flex } from '@chakra-ui/layout'
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/modal'
import { BsCart4 } from 'react-icons/bs'

interface ILayout {
  children?: ReactNode
  cart?: ReactNode
}

export default function Layout({ children, cart }: ILayout) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <Flex
        as="header"
        borderBottom="2px"
        px="2"
        py="4"
        w="full"
        justifyContent="flex-end"
        position="fixed"
        bgColor="white"
        zIndex={12}
      >
        <IconButton
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
          aria-label="Open Cart"
          icon={<BsCart4 />}
        />
      </Flex>
      <Flex as="main" w="full" pt="72px" px="4">
        {children}
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart</DrawerHeader>

          <DrawerBody>{cart}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
