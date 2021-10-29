import { ChangeEvent } from 'react'
import { Flex, HStack, Text } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'
import { Select } from '@chakra-ui/select'
import {
  MdFirstPage,
  MdChevronLeft,
  MdChevronRight,
  MdLastPage,
} from 'react-icons/md'

export interface IPagination {
  page: number
  pageSize?: number
  totalCount?: number
  onPageChange: (page: number) => void
  onPageSizeChange: (e: ChangeEvent<HTMLSelectElement>) => void
  pageSizes?: number[]
}

export default function Pagination({
  page = 1,
  pageSize = 1,
  totalCount = 0,
  onPageChange,
  onPageSizeChange,
  pageSizes = [20, 50, 100, 200, 250],
}: IPagination) {
  const totalPages = Math.ceil(totalCount / pageSize)
  const canPrev = page > 1
  const canNext = page < totalPages

  const onFirstHandler = () => {
    onPageChange(1)
  }

  const onPrevHandler = () => {
    onPageChange(page - 1)
  }

  const onNextHandler = () => {
    onPageChange(page + 1)
  }

  const onLastHandler = () => {
    onPageChange(totalPages)
  }

  return (
    <Flex justifyContent="center" alignItems="center" mt="8" mb="16">
      <HStack spacing="2" minW="fit-content" mr="2">
        <IconButton
          aria-label="Paginate to the first page"
          disabled={!canPrev}
          colorScheme="messenger"
          icon={<MdFirstPage />}
          onClick={onFirstHandler}
        />
        <IconButton
          aria-label="Paginate back"
          disabled={!canPrev}
          colorScheme="messenger"
          icon={<MdChevronLeft />}
          onClick={onPrevHandler}
        />
        <Text
          border="1px"
          borderColor="messenger.200"
          px="4"
          py="2"
          borderRadius="md"
        >
          Page {page} of {totalPages}
        </Text>
        <IconButton
          aria-label="Paginate forward"
          disabled={!canNext}
          colorScheme="messenger"
          icon={<MdChevronRight />}
          onClick={onNextHandler}
        />
        <IconButton
          aria-label="Paginate to the last page"
          disabled={!canNext}
          colorScheme="messenger"
          icon={<MdLastPage />}
          onClick={onLastHandler}
        />
      </HStack>
      <Select
        value={pageSize}
        onChange={onPageSizeChange}
        w="fit-content"
        borderColor="messenger.200"
      >
        {pageSizes.map((items) => (
          <option key={items} value={items}>
            {items}/page
          </option>
        ))}
      </Select>
    </Flex>
  )
}
