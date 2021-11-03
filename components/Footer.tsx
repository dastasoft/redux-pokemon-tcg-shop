import { Flex, Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/layout'

import Logo from 'components/Logo'
import SocialMediaLinks from 'components/SocialMediaLinks'

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
      borderTop="1px"
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
