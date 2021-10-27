import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ORDER_BY } from 'components/OrderBy'
import { IResponse } from 'types'

interface IQueryParams {
  name?: string
  page?: number
  pageSize?: number
  orderBy?: string
}

export const apiSlice = createApi({
  reducerPath: 'pokemon-tcg-api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.pokemontcg.io/v2',
    // prepareHeaders(headers) {
    //   headers.set('x-api-key', process.env.API_KEY)

    //   return headers
    // },
  }),
  endpoints(builder) {
    return {
      fetchCards: builder.query<IResponse, IQueryParams | void>({
        query({
          name = '',
          page = 1,
          pageSize = 20,
          orderBy = ORDER_BY.SET_RELEASE_DATE,
        }: IQueryParams) {
          const queryName = name ? `&q=name:${name}` : ''
          return `/cards?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}${queryName}`
        },
      }),
    }
  },
})

export const { useFetchCardsQuery } = apiSlice
