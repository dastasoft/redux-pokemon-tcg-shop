import { Dispatch, SetStateAction } from 'react'
import { Box, Heading } from '@chakra-ui/layout'
import { Select } from '@chakra-ui/select'

export const enum ORDER_BY {
  SET_RELEASE_DATE = '-set.releaseDate',
  AVERAGE_SELL_PRICE = '-cardmarket.prices.averageSellPrice',
  NATIONAL_POKEDEX_NUMBER = '-nationalPokedexNumbers',
}

export interface IOrderBy {
  value: ORDER_BY
  onChange: Dispatch<SetStateAction<ORDER_BY>>
}

export default function OrderBy({ value, onChange }: IOrderBy) {
  return (
    <Box>
      <Heading as="h2" fontSize="xl" mb="2">
        Order By
      </Heading>
      <Select value={value} onChange={(e: any) => onChange(e.target.value)}>
        <option value={ORDER_BY.SET_RELEASE_DATE}>Set Release Date</option>
        <option value={ORDER_BY.AVERAGE_SELL_PRICE}>Average Sell Price</option>
        <option value={ORDER_BY.NATIONAL_POKEDEX_NUMBER}>
          National Pokedex Number
        </option>
      </Select>
    </Box>
  )
}
