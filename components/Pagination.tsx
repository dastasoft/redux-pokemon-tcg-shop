import { ChangeEvent } from 'react'
import { HStack, Text } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'
import { Select } from '@chakra-ui/select'

export interface IPagination {
  page: number
  pageSize: number
  totalCount: number
  onPageChange: (page: number) => void
  onPageSizeChange: (e: ChangeEvent<HTMLSelectElement>) => void
  pageSizes: number[]
}

export default function Pagination({
  page,
  pageSize,
  totalCount,
  onPageChange,
  onPageSizeChange,
  pageSizes,
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
    <HStack spacing="1">
      <IconButton
        aria-label="Paginate to the first page"
        disabled={!canPrev}
        icon={<ArrowLeftIcon />}
        onClick={onFirstHandler}
      />
      <IconButton
        aria-label="Paginate back"
        disabled={!canPrev}
        icon={<ChevronLeftIcon />}
        onClick={onPrevHandler}
      />
      <Text>
        Page {page} of {totalPages}
      </Text>
      <IconButton
        aria-label="Paginate forward"
        disabled={!canNext}
        icon={<ChevronRightIcon />}
        onClick={onNextHandler}
      />
      <IconButton
        aria-label="Paginate to the last page"
        disabled={!canNext}
        icon={<ArrowRightIcon />}
        onClick={onLastHandler}
      />
      <Select value={pageSize} onChange={onPageSizeChange}>
        {pageSizes.map((items) => (
          <option key={items} value={items}>
            {items}/page
          </option>
        ))}
      </Select>
    </HStack>
  )
}
