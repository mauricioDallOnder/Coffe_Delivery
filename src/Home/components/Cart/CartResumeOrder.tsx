import { Flex, Box, Text, VStack, Container } from '@chakra-ui/react'

import { CartItem } from './CartItem'

import { UseShoppingCart } from '../../../context/ShoppingCarContex'
import { useContext } from 'react'
import {
  ApiContextType,
  ApiFirebaseContext,
} from '../../../context/CoffesItemsContex'
import { ButtonCart } from './ButtonCart'

export const CartResumeOrder = () => {
  const { CartItems } = UseShoppingCart()

  const ListItens = useContext(ApiFirebaseContext) as ApiContextType
  return (
    <Box>
      <Text fontWeight="700" fontSize="18px" color="#403937">
        Cafés selecionados
      </Text>

      <Flex
        direction="column"
        alignItems="flex-start"
        padding="40px"
        gap="24px"
        width="448px"
        height="fit-content"
        backgroundColor="#F3F2F2"
        borderRadius="6px 44px"
      >
        {CartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}

        <Container
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          padding="0"
          gap="12px"
          width="368px"
          height="92px"
          color="#574F4D"
          fontSize="14px"
          fontWeight="400"
          marginTop="24px"
        >
          <VStack spacing="12px" align="stretch">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              padding="0"
              gap="8px"
              width="358px"
              height="21px"
            >
              <Text>Total de Itens</Text>
              <Text>
                {CartItems.reduce((total, cartItem) => {
                  const item = ListItens.CoffesArray.find(
                    (i) => i.id === cartItem.id,
                  )
                  return (
                    Math.round(
                      (total + (item?.price || 0) * cartItem.quantity) * 100,
                    ) / 100
                  )
                }, 0)}
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              padding="0"
              gap="8px"
              width="358px"
              height="21px"
            >
              <Text>Entrega</Text>
              <Text>R$ 3,50</Text>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              padding="0"
              gap="8px"
              width="358px"
              height="21px"
            >
              <Text fontSize="20px" fontWeight="700" color="#403937">
                Total de Itens
              </Text>
              <Text fontSize="20px" fontWeight="700" color="#403937">
                {CartItems.reduce((total, cartItem) => {
                  const item = ListItens.CoffesArray.find(
                    (i) => i.id === cartItem.id,
                  )
                  return (
                    Math.round(
                      (total + (item?.price || 0) * cartItem.quantity + 3.5) *
                        100,
                    ) / 100
                  )
                }, 0)}
              </Text>
            </Box>
            <ButtonCart />
          </VStack>
        </Container>
      </Flex>
    </Box>
  )
}
