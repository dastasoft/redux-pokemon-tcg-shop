/* eslint-disable import/no-extraneous-dependencies */
import { Box, Flex } from '@chakra-ui/layout'
import { ReactNode } from 'react'

interface ILayout {
  children?: ReactNode
  cart?: ReactNode
}

export default function Layout({ children, cart }: ILayout) {
  return (
    <Box>
      <Flex as="header" borderBottom="2px" px="2" py="4"></Flex>
      <Flex as="main">
        <Flex flex="1" justifyContent="center">
          {children}
        </Flex>
        <Flex
          as="aside"
          borderLeft="2px"
          w="10vw"
          p="2"
          justifyContent="center"
        >
          {cart}
        </Flex>
      </Flex>
    </Box>
  )
}
