/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/no-extraneous-dependencies */
import { Box, Text, SimpleGrid, Heading, Flex, Spacer } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { useFetchCardsQuery } from 'features/pokemonTCGAPI/pokemon-tcg-api-slice'
import { Input } from '@chakra-ui/input'
import { IconButton } from '@chakra-ui/button'
import { AddIcon, MinusIcon, SearchIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import Pagination from 'components/Pagination'
import Limit from 'components/Limit'
import { Select } from '@chakra-ui/select'
import { useAppDispatch } from 'app/hooks'
import { addItem, removeItem } from 'features/cart/cart-slice'

const enum ORDER_BY {
  SET_RELEASE_DATE = '-set.releaseDate',
  AVERAGE_SELL_PRICE = '-cardmarket.prices.averageSellPrice',
  NATIONAL_POKEDEX_NUMBER = '-nationalPokedexNumbers',
}

export default function Home() {
  const [inputName, setInputName] = useState('')
  const [name, setName] = useState('')
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(20)
  const [orderBy, setOrderBy] = useState(ORDER_BY.SET_RELEASE_DATE)

  const { data, isFetching } = useFetchCardsQuery({
    name,
    page,
    pageSize,
    orderBy,
  })
  const dispatch = useAppDispatch()

  console.log(data)

  const onSearchByNameHandler = () => {
    setName(inputName)
  }

  if (isFetching)
    return (
      <Box>
        <Text>Fetching...</Text>
      </Box>
    )

  return (
    <Box m="5">
      <Flex justifyContent="space-between" alignItems="center" my="2">
        <Box>
          <Heading>Search</Heading>
          <Flex>
            <Input
              placeholder="Name"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              mr="4"
            />
            <Spacer />
            <IconButton
              aria-label="Search database"
              icon={<SearchIcon />}
              onClick={onSearchByNameHandler}
              colorScheme="red"
            />
          </Flex>
        </Box>
        <Box>
          <Heading as="h2">Order By</Heading>
          <Select
            value={orderBy}
            onChange={(e: any) => setOrderBy(e.target.value)}
          >
            <option value={ORDER_BY.SET_RELEASE_DATE}>Set Release Date</option>
            <option value={ORDER_BY.AVERAGE_SELL_PRICE}>
              Average Sell Price
            </option>
            <option value={ORDER_BY.NATIONAL_POKEDEX_NUMBER}>
              National Pokedex Number
            </option>
          </Select>
        </Box>
      </Flex>
      <SimpleGrid columns={[1, 1, 2, 3, 5, 8]} spacing="2rem" my="2">
        {data?.data.map((card) => {
          const { id, images, cardmarket } = card
          return (
            <Box key={id}>
              <Flex justifyContent="space-between" alignItems="center">
                <Text>${cardmarket?.prices?.averageSellPrice}</Text>
                <AddIcon
                  cursor="pointer"
                  onClick={() => dispatch(addItem(card))}
                />
                <MinusIcon
                  cursor="pointer"
                  onClick={() => dispatch(removeItem(id))}
                />
              </Flex>
              {images.large && <Image src={images.large} />}
            </Box>
          )
        })}
      </SimpleGrid>
      <Flex justifyContent="space-between" alignItems="center" my="2">
        <Pagination
          page={page}
          pageSize={data!.pageSize}
          totalCount={data!.totalCount}
          dispatcher={(newPage) => setPage(newPage)}
        />

        <Limit
          onPageSizeChangeHandler={(e: any) => setPageSize(e.target.value)}
          pageSizes={[20, 50, 100, 200, 250]}
          value={pageSize}
        />
      </Flex>
    </Box>
  )
}
