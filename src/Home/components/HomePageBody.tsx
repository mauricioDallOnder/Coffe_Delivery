import { Flex, Text, Stack, Image, Heading, VStack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import {
  ApiFirebaseContext,
  ApiContextType,
} from '../../context/CoffesItemsContex'
import { CartCountAmount } from './Cart/CartCountAmount'

export const HomePageBody = () => {
  const ListItens = useContext(ApiFirebaseContext) as ApiContextType
  return (
    <Flex direction="column" alignItems="flex-start" width="100%">
      <Heading marginBottom="54px">Nossos Cafés</Heading>
      <Flex direction="row" width="100%" flexWrap="wrap" gap="32px">
        {ListItens.CoffesArray.map((item) => {
          return (
            <>
              <Stack
                display="flex"
                direction="column"
                width="256px"
                height="310px"
                backgroundColor="#F3F2F2"
                borderRadius="6px 36px"
              >
                <VStack spacing="12px" align="stretch" key={item.id}>
                  <Image
                    position="relative"
                    top="-20px"
                    left="calc(50% - 120px/2)"
                    h="120px"
                    w="120px"
                    src={item.ImageCoffe}
                    alt=""
                  />
                  <Flex width="100%" alignContent="center" alignItems="center">
                    <Image
                      src={item.ImageTypeOfCoffe}
                      margin="0 auto 0 auto"
                      w="fit-content"
                      h="fit-content"
                      alt=""
                    />
                  </Flex>
                </VStack>
                <VStack
                  spacing="8px"
                  align="stretch"
                  marginTop="16px"
                  marginBottom="33px"
                >
                  <Text
                    textAlign="center"
                    color="#403937"
                    fontWeight="700"
                    fontSize="20px"
                    marginLeft="20px"
                    marginRight="20px"
                  >
                    {item.Name}
                  </Text>
                  <Flex
                    width="100%"
                    alignContent="center"
                    alignItems="center"
                    flexWrap="wrap"
                    paddingLeft="20px"
                    paddingRight="20px"
                  >
                    <Text
                      color="#8D8686"
                      fontSize="14px"
                      fontWeight="400"
                      textAlign="center"
                    >
                      {item.description}
                    </Text>
                  </Flex>
                </VStack>
                <CartCountAmount price={item.price} id={item.id} />
              </Stack>
            </>
          )
        })}
      </Flex>
    </Flex>
  )
}
