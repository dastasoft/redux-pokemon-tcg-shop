/* eslint-disable import/no-extraneous-dependencies */
import { HStack, Text } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'

export interface IPagination {
  page: number
  pageSize: number
  totalCount: number
  dispatcher: (page: number) => void
}

export default function Pagination({
  page,
  pageSize,
  totalCount,
  dispatcher,
}: IPagination) {
  const totalPages = Math.ceil(totalCount / pageSize)
  const canPrev = page > 1
  const canNext = page < totalPages

  const onFirstHandler = () => {
    dispatcher(1)
  }

  const onPrevHandler = () => {
    dispatcher(page - 1)
  }

  const onNextHandler = () => {
    dispatcher(page + 1)
  }

  const onLastHandler = () => {
    dispatcher(totalPages)
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
    </HStack>
  )
}
