import { useState } from 'react'
import { Box, Grid } from '@chakra-ui/layout'

import Layout from 'components/Layout'
import Pagination from 'components/Pagination'
import CardHolder from 'components/CardHolder'
import SearchByName from 'features/pokemonTCGAPI/SearchByName'
import OrderBy, { ORDER_BY } from 'features/pokemonTCGAPI/OrderBy'
import { SkeletonLoader } from 'features/pokemonTCGAPI/Loader'
import NotFound from 'features/pokemonTCGAPI/NotFound'
import { useFetchCardsQuery } from 'features/pokemonTCGAPI/pokemon-tcg-api-slice'
import Cart from 'features/cart/Cart'

export default function Home() {
  const [inputName, setInputName] = useState('')
  const [name, setName] = useState('')
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(20)
  const [orderBy, setOrderBy] = useState(ORDER_BY.AVERAGE_SELL_PRICE)

  const { data, isFetching, isLoading, isError } = useFetchCardsQuery({
    name,
    page,
    pageSize,
    orderBy,
  })

  const resetPagination = () => {
    setPage(1)
    setPageSize(20)
  }

  const onSearch = () => {
    setName(inputName)
    resetPagination()
  }

  return (
    <Layout cart={<Cart />}>
      <Box my="4" w="full" h="full">
        <Grid
          templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
          gap={6}
          mt="2"
          mb="12"
          maxW="3xl"
          mx="auto"
        >
          <SearchByName
            value={inputName}
            onChange={setInputName}
            onSearch={onSearch}
          />
          <OrderBy value={orderBy} onChange={setOrderBy} />
        </Grid>

        <SkeletonLoader isLoading={isLoading || isFetching} isError={isError}>
          <>
            {data && data.data.length > 0 ? (
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
            ) : (
              <NotFound />
            )}
          </>
        </SkeletonLoader>
      </Box>
    </Layout>
  )
}
