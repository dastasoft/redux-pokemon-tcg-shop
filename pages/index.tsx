import { useState } from 'react'
import { Box, Grid } from '@chakra-ui/layout'

import Layout from 'components/Layout'
import Pagination from 'components/Pagination'
import SearchByName from 'components/SearchByName'
import OrderBy, { ORDER_BY } from 'components/OrderBy'
import { useFetchCardsQuery } from 'features/pokemonTCGAPI/pokemon-tcg-api-slice'
import Cart from 'features/cart/Cart'
import CardHolder from 'components/CardHolder'
import Loader from 'components/Loader'

export default function Home() {
  const [inputName, setInputName] = useState('')
  const [name, setName] = useState('')
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(20)
  const [orderBy, setOrderBy] = useState(ORDER_BY.SET_RELEASE_DATE)

  const { data, isFetching, isLoading, isError } = useFetchCardsQuery({
    name,
    page,
    pageSize,
    orderBy,
  })

  return (
    <Layout cart={<Cart />}>
      <Box my="4" w="full" h="full">
        <Grid
          templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
          gap={6}
          mt="2"
          mb="12"
        >
          <SearchByName
            value={inputName}
            onChange={setInputName}
            onSearch={() => setName(inputName)}
          />
          <OrderBy value={orderBy} onChange={setOrderBy} />
        </Grid>

        <Loader isLoading={isLoading || isFetching} isError={isError}>
          <>
            <CardHolder data={data?.data} />
            <Pagination
              page={page}
              pageSize={data?.pageSize}
              totalCount={data?.totalCount}
              onPageChange={(newPage) => setPage(newPage)}
              onPageSizeChange={(e: any) => setPageSize(e.target.value)}
            />
          </>
        </Loader>
      </Box>
    </Layout>
  )
}
