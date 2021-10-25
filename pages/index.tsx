/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react'
import { Box, Text, SimpleGrid, Heading, Flex, Spacer } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { IconButton } from '@chakra-ui/button'
import { SearchIcon } from '@chakra-ui/icons'
import { Select } from '@chakra-ui/select'
import { v4 as uuidv4 } from 'uuid'

import { useAppDispatch } from 'app/hooks'
import Layout from 'components/Layout'
import Pagination from 'components/Pagination'
import Limit from 'components/Limit'
import { addItem } from 'features/cart/cart-slice'
import { useFetchCardsQuery } from 'features/pokemonTCGAPI/pokemon-tcg-api-slice'
import Cart from 'features/cart/Cart'
import Card from 'components/Card'

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
    <Layout cart={<Cart />}>
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
                colorScheme="teal"
              />
            </Flex>
          </Box>
          <Box>
            <Heading as="h2">Order By</Heading>
            <Select
              value={orderBy}
              onChange={(e: any) => setOrderBy(e.target.value)}
            >
              <option value={ORDER_BY.SET_RELEASE_DATE}>
                Set Release Date
              </option>
              <option value={ORDER_BY.AVERAGE_SELL_PRICE}>
                Average Sell Price
              </option>
              <option value={ORDER_BY.NATIONAL_POKEDEX_NUMBER}>
                National Pokedex Number
              </option>
            </Select>
          </Box>
        </Flex>
        <SimpleGrid columns={[1, 1, 2, 3, 5]} spacing="2rem" my="2">
          {data?.data.map((card) => {
            return (
              <Card
                key={card.id}
                {...card}
                onAdd={() => dispatch(addItem({ uuid: uuidv4(), ...card }))}
              />
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
    </Layout>
  )
}
