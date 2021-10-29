import { ReactChild } from 'react'
import { Flex, Text } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'

export interface ILoader {
  isLoading: boolean
  isError: boolean
  children: ReactChild
}

export default function Loader({ isLoading, isError, children }: ILoader) {
  if (isLoading) {
    return (
      <Flex justifyContent="center" alignItems="center" w="full" my="12">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="teal"
          size="xl"
        />
      </Flex>
    )
  }

  if (isError) {
    return <Text>The search has returned nothing...</Text>
  }

  return <>{children}</>
}
