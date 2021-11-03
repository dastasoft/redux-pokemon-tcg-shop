import { useColorModeValue } from '@chakra-ui/color-mode'
import { Box, Flex } from '@chakra-ui/layout'
import { Skeleton } from '@chakra-ui/skeleton'

const colors = {
  startColor: 'secondary',
  endColor: 'tertiary',
}

export default function CardSekeleton() {
  const bgColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box boxShadow="lg" bgColor={bgColor} borderRadius="xl">
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
