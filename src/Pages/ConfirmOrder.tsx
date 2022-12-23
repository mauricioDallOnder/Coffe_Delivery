import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import { UseFormCartContext } from '../context/formContext'

export const ConfirmOrder = () => {
  // eslint-disable-next-line no-unused-vars
  const { onSubmit, formdata } = UseFormCartContext()
  console.log(formdata[0].cep)
  return (
    <>
      <Flex
        direction="row"
        alignItems="center"
        alignContent="center"
        backgroundColor="#FAFAFA"
        h="100vh"
        overflow="hidden"
      >
        <Flex
          alignItems="center"
          alignContent="center"
          direction="column"
          justifyContent="space-evenly"
          width="100%"
        >
          <Flex
            marginBottom="40px"
            alignItems="center"
            width="40%"
            flexWrap="wrap"
            background="#FAFAFA"
          >
            <Text fontWeight="800" fontSize="32px" color="#C47F17">
              Uhu! Pedido confirmado
            </Text>
            <Text fontWeight="400" fontSize="20px">
              Agora é só aguardar que logo o café chegará até você
            </Text>
          </Flex>
          <Flex
            direction="column"
            alignItems="flex-start"
            padding="40px"
            gap="32px"
            w="526px"
            h="270px"
            boxShadow="outline"
            borderRadius="6px 36px"
            bg="white"
          >
            <VStack spacing="32px">
              <Box
                display="flex"
                alignItems="center"
                padding="0"
                gap="12px"
                w="354px"
                h="42px"
              >
                <Image
                  src="https://londer.w3spaces.com/newlocation.png"
                  alt=""
                />
                <Flex alignItems="flex-start" width="100%">
                  <Text>
                    Entrega em {formdata[0].endereco}, {formdata[0].numero}
                    <br />
                    {formdata[0].cidade}, {formdata[0].uf}
                  </Text>
                </Flex>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                padding="0"
                gap="12px"
                w="354px"
                h="42px"
                flexWrap="wrap"
              >
                <Image src="https://londer.w3spaces.com/time.png" alt="" />
                <Flex direction="column">
                  <Text color="#574F4D" fontWeight="400" fontSize="16px">
                    Previsão de entrega
                  </Text>

                  <Text color="#574F4D" fontWeight="700" fontSize="16px">
                    20 min - 30 min{' '}
                  </Text>
                </Flex>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                padding="0"
                gap="12px"
                w="354px"
                h="42px"
              >
                <Image src="https://londer.w3spaces.com/newmoney.png" alt="" />
                <Flex direction="column">
                  <Text color="#574F4D" fontWeight="400" fontSize="16px">
                    Pagamento na entrega
                  </Text>
                  <Text color="#574F4D" fontWeight="700" fontSize="16px">
                    Cartão de Crédito
                  </Text>
                </Flex>
              </Box>
            </VStack>
          </Flex>
        </Flex>
        <Image
          marginRight="160px"
          src="https://londer.w3spaces.com/Illustration.png"
          alt=""
        />
      </Flex>
    </>
  )
}
