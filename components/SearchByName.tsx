import { Dispatch, SetStateAction } from 'react'
import { IconButton } from '@chakra-ui/button'
import { SearchIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/input'
import { Box, Flex, Heading, Spacer } from '@chakra-ui/layout'

export interface ISearchByName {
  value: string
  onChange: Dispatch<SetStateAction<string>>
  onSearch: () => void
}

export default function SearchByName({
  value,
  onChange,
  onSearch,
}: ISearchByName) {
  return (
    <Box>
      <Heading fontSize="xl" mb="2">
        Search
      </Heading>
      <Flex>
        <Input
          placeholder="Name"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') onSearch()
          }}
          borderRightRadius="0"
        />
        <IconButton
          variant="pkmn"
          aria-label="Search database"
          icon={<SearchIcon />}
          onClick={onSearch}
          colorScheme="teal"
          borderLeftRadius="0"
        />
      </Flex>
    </Box>
  )
}
