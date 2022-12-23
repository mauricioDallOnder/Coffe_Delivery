import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/theme'

import ApiFirebaseContext from './context/CoffesItemsContex'
import { ShoppingCartProvider } from './context/ShoppingCarContex'

import { RouterPages } from './routes/Routes'
import { FormContextProvider } from './context/formContext'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ApiFirebaseContext>
        <ShoppingCartProvider>
          <FormContextProvider>
            <RouterPages />
          </FormContextProvider>
        </ShoppingCartProvider>
      </ApiFirebaseContext>
    </ChakraProvider>
  )
}

export default App
