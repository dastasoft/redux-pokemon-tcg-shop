import { Flex, HStack } from '@chakra-ui/layout'
import { Skeleton } from '@chakra-ui/skeleton'

const colors = {
  startColor: 'secondary',
  endColor: 'tertiary',
}

export default function PaginationSekeleton() {
  return (
    <Flex justifyContent="center" alignItems="center" mt="16" mb="8">
      <HStack spacing="2" minW="fit-content" mr="2">
        <Skeleton height="40px" width="40px" {...colors} />
        <Skeleton height="40px" width="40px" {...colors} />
        <Skeleton height="42px" width="90px" {...colors} />
        <Skeleton height="40px" width="40px" {...colors} />
        <Skeleton height="40px" width="40px" {...colors} />
      </HStack>
      <Skeleton height="42px" width="125px" {...colors} />
    </Flex>
  )
}
