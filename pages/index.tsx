import { useState } from 'react'
import { Box, Text, Flex } from '@chakra-ui/layout'

import Layout from 'components/Layout'
import Pagination from 'components/Pagination'
import SearchByName from 'components/SearchByName'
import OrderBy, { ORDER_BY } from 'components/OrderBy'
import { useFetchCardsQuery } from 'features/pokemonTCGAPI/pokemon-tcg-api-slice'
import Cart from 'features/cart/Cart'
import CardHolder from 'components/CardHolder'

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
      <Box my="4">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          mb="6"
          wrap="wrap"
        >
          <SearchByName
            value={inputName}
            onChange={setInputName}
            onSearch={onSearchByNameHandler}
          />
          <OrderBy value={orderBy} onChange={setOrderBy} />
        </Flex>

        <CardHolder data={data?.data} />
        <Pagination
          page={page}
          pageSize={data!.pageSize}
          totalCount={data!.totalCount}
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(e: any) => setPageSize(e.target.value)}
          pageSizes={[20, 50, 100, 200, 250]}
        />
      </Box>
    </Layout>
  )
}
