import { Button } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { Flex, Heading, SimpleGrid, VStack } from '@chakra-ui/layout'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal'

import { useAppDispatch, useAppSelector } from 'app/hooks'
import Card from 'components/Card'
import { removeItem } from './cart-slice'

export default function Cart() {
  const { cards, totalPrice } = useAppSelector((state) => state.cart)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useAppDispatch()
  const areCards = cards.length > 0

  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <VStack spacing="3" mb="8">
          <Heading as="h3" fontSize="md">
            {areCards
              ? `Total price is: $${totalPrice}`
              : `There are no cards in the cart`}
          </Heading>
          {areCards && (
            <Button variant="pkmn" onClick={onOpen}>
              Checkout
            </Button>
          )}
        </VStack>
        {areCards && (
          <>
            <Heading as="h4" fontSize="md">
              Your items
            </Heading>
            <SimpleGrid columns={1} spacing="2rem" my="2" w="full">
              {cards?.map((card) => (
                <Card
                  flavor="item"
                  key={card.uuid}
                  {...card}
                  onRemove={() => dispatch(removeItem(card.uuid!))}
                />
              ))}
            </SimpleGrid>
          </>
        )}
      </Flex>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Checkout</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            The store is not accepting orders at this moment.
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
