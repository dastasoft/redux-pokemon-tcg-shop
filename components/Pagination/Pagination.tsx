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

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

interface IPagination {
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
    scrollTop()
  }

  const onPrevHandler = () => {
    onPageChange(page - 1)
    scrollTop()
  }

  const onNextHandler = () => {
    onPageChange(page + 1)
    scrollTop()
  }

  const onLastHandler = () => {
    onPageChange(totalPages)
    scrollTop()
  }

  return (
    <Flex justifyContent="center" alignItems="center" mt="16" mb="8">
      <HStack spacing="2" minW="fit-content" mr="2">
        <IconButton
          variant="pkmn"
          aria-label="Paginate to the first page"
          disabled={!canPrev}
          icon={<MdFirstPage />}
          onClick={onFirstHandler}
        />
        <IconButton
          variant="pkmn"
          aria-label="Paginate back"
          disabled={!canPrev}
          icon={<MdChevronLeft />}
          onClick={onPrevHandler}
        />
        <Text
          border="1px"
          borderColor="tertiary"
          px="4"
          py="2"
          borderRadius="md"
        >
          {page} of {totalPages}
        </Text>
        <IconButton
          variant="pkmn"
          aria-label="Paginate forward"
          disabled={!canNext}
          icon={<MdChevronRight />}
          onClick={onNextHandler}
        />
        <IconButton
          variant="pkmn"
          aria-label="Paginate to the last page"
          disabled={!canNext}
          icon={<MdLastPage />}
          onClick={onLastHandler}
        />
      </HStack>
      <Select
        value={pageSize}
        onChange={onPageSizeChange}
        w="fit-content"
        borderColor="tertiary"
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
