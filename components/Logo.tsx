import { Flex, Heading, useToken } from '@chakra-ui/react'
import { MdCatchingPokemon } from 'react-icons/md'

export default function Logo() {
  const [primary, tertiary] = useToken('colors', ['primary', 'tertiary'])

  return (
    <Flex alignItems="center">
      <MdCatchingPokemon fontSize="32px" fill={primary} />
      <Heading
        as="h1"
        ml="2"
        fontSize="xl"
        color="secondary"
        textShadow={`-3px 0 ${tertiary}, 0 3px ${tertiary}, 3px 0 ${tertiary}, 0 -3px ${tertiary}`}
      >
        Pokemon TCG Shop
      </Heading>
    </Flex>
  )
}
