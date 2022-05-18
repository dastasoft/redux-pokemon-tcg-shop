import NextImage from 'next/image'
import { Button } from '@chakra-ui/button'
import { Badge, Box, Flex, FlexProps, Heading } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { useToken } from '@chakra-ui/system'
import { motion, useAnimation } from 'framer-motion'
import { MdAddShoppingCart, MdRemoveShoppingCart } from 'react-icons/md'

import { IPokemonCard } from './types'

interface ICard extends IPokemonCard {
  flavor?: 'card' | 'item'
  onAdd?: () => void
  onRemove?: () => void
}

const MotionFlex = motion<FlexProps>(Flex)
const cardVariants = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

export default function Card({
  id,
  name,
  images,
  cardmarket,
  rarity,
  flavor = 'card',
  onAdd = () => {},
  onRemove = () => {},
}: ICard) {
  const bgColor = useColorModeValue('gray.200', 'gray.700')
  const [secondary, tertiary] = useToken('colors', ['secondary', 'tertiary'])
  const color = useColorModeValue(tertiary, secondary)
  const controls = useAnimation()

  const onRemoveHandler = async () => {
    await controls.start({
      opacity: 0,
      scale: 0,
      transition: { duration: 0.5 },
    })
    onRemove()
  }

  return (
    <MotionFlex
      key={id}
      flexDirection="column"
      bgColor={bgColor}
      borderRadius="xl"
      initial="hidden"
      variants={flavor === 'card' ? cardVariants : {}}
      animate={controls}
      whileInView="show"
      viewport={{ once: true }}
    >
      <Flex justifyContent="space-between" alignItems="center" p="2">
        <Heading as="h2" size="md">
          {name}
        </Heading>
        <Badge variant="outline" color={color}>
          {rarity}
        </Badge>
      </Flex>

      <Box minH={['md', 'xs', 'xl', 'md', 'xs']} position="relative">
        {images.small && (
          <NextImage src={images.small} alt={name} layout="fill" />
        )}
      </Box>

      <Button
        leftIcon={
          flavor === 'card' ? <MdAddShoppingCart /> : <MdRemoveShoppingCart />
        }
        colorScheme="teal"
        variant="pkmn"
        onClick={flavor === 'card' ? onAdd : onRemoveHandler}
        mt="2"
      >
        {cardmarket?.prices?.averageSellPrice}€
      </Button>
    </MotionFlex>
  )
}
