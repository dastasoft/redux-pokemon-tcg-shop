import { Flex, HStack } from '@chakra-ui/layout'
import { Skeleton } from '@chakra-ui/skeleton'

const colors = {
  startColor: 'messenger.500',
  endColor: 'teal.500',
}

export default function PaginationSekeleton() {
  return (
    <Flex justifyContent="center" alignItems="center" mt="8" mb="16">
      <HStack spacing="2" minW="fit-content" mr="2">
        <Skeleton height="40px" width="40px" {...colors} />
        <Skeleton height="40px" width="40px" {...colors} />
        <Skeleton height="42px" width="145px" {...colors} />
        <Skeleton height="40px" width="40px" {...colors} />
        <Skeleton height="40px" width="40px" {...colors} />
      </HStack>
      <Skeleton height="42px" width="125px" {...colors} />
    </Flex>
  )
}
