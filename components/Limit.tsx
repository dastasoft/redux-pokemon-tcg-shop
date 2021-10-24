/* eslint-disable import/no-extraneous-dependencies */
import { HStack, Text } from '@chakra-ui/layout'
import { Select } from '@chakra-ui/select'
import { ChangeEvent } from 'react'

interface IFilter {
  isDisabled?: boolean
  onPageSizeChangeHandler: (e: ChangeEvent<HTMLSelectElement>) => void
  pageSizes: number[]
  value: number
}

export default function Limit({
  isDisabled,
  onPageSizeChangeHandler,
  pageSizes,
  value,
}: IFilter) {
  return (
    <HStack spacing="1">
      <Text>Displaying</Text>
      <Select
        value={value}
        onChange={onPageSizeChangeHandler}
        isDisabled={isDisabled}
      >
        {pageSizes.map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            {pageSize}
          </option>
        ))}
      </Select>
      <Text>items</Text>
    </HStack>
  )
}
