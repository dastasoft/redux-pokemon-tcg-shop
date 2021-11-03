import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({
  config,
  colors: {
    primary: '#FF0000',
    secondary: '#FFDE00',
    tertiary: '#3B4CCA',
  },
  components: {
    Button: {
      variants: {
        pkmn: () => ({
          color: 'white',
          bg: 'tertiary',
        }),
      },
    },
  },
  fonts: {
    heading: 'Aclonica',
    body: 'Raleway',
  },
})

export default theme
