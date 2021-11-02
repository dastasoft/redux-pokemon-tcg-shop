import { Box, Flex } from '@chakra-ui/layout'
import { Skeleton } from '@chakra-ui/skeleton'

const colors = {
  startColor: 'messenger.500',
  endColor: 'teal.500',
}

export default function CardSekeleton() {
  return (
    <Box boxShadow="lg" bgColor="gray.200" borderRadius="xl">
      <Flex justifyContent="space-between" alignItems="center" p="2">
        <Skeleton height="28px" width="100px" {...colors} />
        <Skeleton height="28px" width="50px" {...colors} />
      </Flex>
      <Skeleton
        height={['md', 'xs', 'xl', 'md', 'xs']}
        mb="1"
        borderRadius="xl"
        {...colors}
      />
      <Skeleton height="40px" borderRadius="md" {...colors} />
    </Box>
  )
}
