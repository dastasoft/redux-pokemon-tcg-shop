import { Flex, Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/color-mode'

import Logo from './Logo'
import SocialMediaLinks from './SocialMediaLinks'

export default function Footer() {
  return (
    <Flex
      as="footer"
      role="contentinfo"
      w="full"
      p="1em"
      align="center"
      justify="space-between"
      flexDirection={{ base: 'column', md: 'row' }}
      borderTopWidth={2}
      borderTopColor={useColorModeValue('gray.200', 'gray.900')}
    >
      <Stack alignItems={{ base: 'center', md: 'flex-start' }}>
        <Logo />
        <Text fontSize="sm">
          Is a fictional product &copy; {new Date().getFullYear()} Powered by
          dastasoft
        </Text>
      </Stack>

      <SocialMediaLinks />
    </Flex>
  )
}
