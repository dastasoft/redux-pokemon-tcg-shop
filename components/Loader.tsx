import { ReactChild } from 'react'
import { Flex, SimpleGrid } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'

import CardSekeleton from './CardSekeleton'
import PaginationSekeleton from './PaginationSekeleton'
import NotFound from './NotFound'

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

  if (isError) return <NotFound />

  return <>{children}</>
}

export const SkeletonLoader = ({ isLoading, isError, children }: ILoader) => {
  if (isLoading) {
    return (
      <>
        <SimpleGrid columns={[1, 2, 2, 3, 5]} spacing="2rem" my="2">
          {Array.from({ length: 20 }, (_e, i) => i).map((_el, index) => (
            <CardSekeleton key={index} />
          ))}
        </SimpleGrid>
        <PaginationSekeleton />
      </>
    )
  }

  if (isError) return <NotFound />

  return <>{children}</>
}
