import { MutableRefObject, ReactNode, useRef } from 'react'
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

import Header from 'components/Header'
import Footer from 'components/Footer'

interface ILayout {
  children?: ReactNode
  cart?: ReactNode
}

export default function Layout({ children, cart }: ILayout) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement>(null)

  return (
    <Flex flexDir="column" h="100vh">
      <Header
        onOpen={onOpen}
        btnRef={btnRef as MutableRefObject<HTMLButtonElement>}
      />
      <Flex as="main" w="full" pt="72px" px="4" flex="1">
        {children}
      </Flex>
      <Footer />
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
    </Flex>
  )
}
