import { extendTheme } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import { mode } from '@chakra-ui/theme-tools'
export const styles = {
  global: {
    'html, body': {
      background: '#FAFAFA',
    },
  },
}
const components = {
  Drawer: {
    // setup light/dark mode component defaults
    baseStyle: (props: StyleFunctionProps) => ({
      dialog: {
        bg: mode('white', '#141214')(props),
      },
    }),
  },
}
export const theme = extendTheme({
  components,
  styles,
})
