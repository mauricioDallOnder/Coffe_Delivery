import { useContext } from 'react'

import {
  ApiContextType,
  ApiFirebaseContext,
} from '../../../context/CoffesItemsContex'
import { Flex, Text, StackDivider, Button, HStack } from '@chakra-ui/react'

import { Trash } from 'phosphor-react'
import { UseShoppingCart } from '../../../context/ShoppingCarContex'

export type CartItensProps = {
  id: number
  quantity: number
}
export const CartItem = ({ id, quantity }: CartItensProps) => {
  const ListItens = useContext(ApiFirebaseContext) as ApiContextType
  const {
    RemoveFromCarQuantity,
    getItemQuantity,
    decreaseCarQuantity,
    increaseCarQuantity,
  } = UseShoppingCart()
  const item = ListItens.CoffesArray.find((i) => i.id === id)
  if (item === null) return null
  const quantityItem: number = getItemQuantity(id!)

  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="Flex-start"
        padding="8px 4px"
        gap="59px"
        width="368px"
        h="80px"
        background="#F3F2F2"
      >
        <Flex
          alignItems="center"
          padding="0"
          gap="20px"
          width="255px"
          height="64px"
        >
          <img
            style={{ height: '64px', width: '64px' }}
            src={item?.ImageCoffe}
            alt=""
          />
          <Flex
            flexDirection="column"
            alignItems="flex-start"
            padding="0"
            gap="8px"
            width="171px"
            h="61px"
          >
            <Text
              width="148px"
              height="21px"
              fontWeight="400"
              fontSize="16px"
              display="flex"
              alignItems="center"
              color="#403937"
            >
              {item?.Name}
            </Text>
            <HStack spacing="8px">
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
              <Button
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding="0px 8px"
                h="32px"
                onClick={() => RemoveFromCarQuantity(id!)}
                color="#8047F8"
                background="#E6E5E5"
              >
                <Trash size={24} />
                <Text fontSize="12px" fontWeight="400" color="#574F4D">
                  REMOVER
                </Text>
              </Button>
            </HStack>
          </Flex>
        </Flex>
        <Flex height="21px" alignItems="center" textAlign="right">
          <Text fontWeight="700" fontSize="16px" color="#574F4D">
            R${item?.price}
          </Text>
        </Flex>
      </Flex>
      <StackDivider dir="row" border="1px solid #E6E5E5" width="368px" />
    </>
  )
}
