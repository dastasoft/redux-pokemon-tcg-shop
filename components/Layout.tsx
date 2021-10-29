import { ReactNode, useRef } from 'react'
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
import Header from './Header'

interface ILayout {
  children?: ReactNode
  cart?: ReactNode
}

export default function Layout({ children, cart }: ILayout) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <Header onOpen={onOpen} btnRef={btnRef} />
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
