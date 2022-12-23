import { Button, Flex, HStack, Text } from '@chakra-ui/react'
import { UseShoppingCart } from '../../../context/ShoppingCarContex'
import {
  ApiContextType,
  ApiFirebaseContext,
  ListCoffes,
} from '../../../context/CoffesItemsContex'
import { useContext } from 'react'

export const CartCountAmount = ({ id, price }: ListCoffes) => {
  const ListItens = useContext(ApiFirebaseContext) as ApiContextType
  const { getItemQuantity, decreaseCarQuantity, increaseCarQuantity } =
    UseShoppingCart()
  const itemProduct = ListItens.CoffesArray.find((i) => i.id === id)
  if (itemProduct === null) return null
  const quantityItem: number = getItemQuantity(id!)
  return (
    <>
      <HStack
        spacing="8px"
        display="flex"
        justifyContent="space-between"
        margin="0 24px 20px 24px"
      >
        <Flex alignItems="baseline" gap="4px">
          <Text
            fontWeight="400"
            fontSize="14px"
            color="#574F4D"
            textAlign="left"
          >
            R$
          </Text>
          <Text fontWeight="800" fontSize="24px" color="#574F4D">
            {price}
          </Text>
        </Flex>

        <Flex
          alignItems="center"
          padding="0"
          width="auto"
          h="32px"
          background="#E6E5E5"
          borderRadius="6px"
        >
          <Button
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding="8px"
            h="32px"
            borderRadius="6px"
            background="#E6E5E5"
            onClick={() => decreaseCarQuantity(id!)}
            color="#8047F8"
          >
            -
          </Button>
          <Text fontSize="16px" fontWeight="400" color="#272221">
            {' '}
            {quantityItem}
          </Text>
          <Button
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding="0px 8px"
            h="32px"
            onClick={() => increaseCarQuantity(id!)}
            color="#8047F8"
            background="#E6E5E5"
          >
            +
          </Button>
        </Flex>
        <img src="https://londer.w3spaces.com/smallCart.png" alt="" />
      </HStack>
    </>
  )
}
