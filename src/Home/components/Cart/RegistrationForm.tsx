import {
  Box,
  Text,
  Flex,
  VStack,
  Input,
  HStack,
  Image,
  Button,
} from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { UseFormCartContext } from '../../../context/formContext'
interface IFormInputs {
  cep?: string
  endereco?: string
  numero?: number
  complemento?: string
  opcional?: string
  cidade?: string
  uf?: string
  data?: string[]
}

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>()
  const { onSubmit } = UseFormCartContext()

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Text fontWeight="700" fontSize="18px" color="#403937">
        Complete seu Pedido
      </Text>
      <Flex
        backgroundColor="#F3F2F2"
        direction="column"
        alignItems="flex-start"
        padding="40px"
        gap="32px"
        width="640px"
        height="372px"
        borderRadius="6px"
        alignSelf="stretch"
      >
        <Flex
          as="form"
          alignItems="flex-start"
          padding="0"
          gap="8px"
          width="560px"
          height="44px"
          alignSelf="stretch"
          flexGrow="0"
          flexWrap="wrap"
        >
          <VStack spacing={4} align="stretch">
            <Box display="flex" alignItems="center">
              <Image src="https://londer.w3spaces.com/endereco.png" alt="" />
              <Text fontSize="16px" fontWeight="400">
                Endereço de Entrega
              </Text>
            </Box>
            <Box display="flex" alignItems="center">
              <Text>Informe o endereço onde deseja receber seu pedido</Text>
            </Box>
          </VStack>

          <VStack spacing="16px" align="stretch">
            <Flex
              direction="column"
              alignItems="flex-start"
              gap="16px"
              height="216px"
            >
              <Input
                backgroundColor="#EEEDED"
                padding="12px"
                width="200px"
                height="42px"
                border="1px solid #E6E5E5"
                borderRadius="4px"
                placeholder="CEP"
                type="text"
                {...register('cep', {
                  required: 'Digite seu cep.',
                })}
              />
              <ErrorMessage errors={errors} name="cep" as="p" />

              <Input
                backgroundColor="#EEEDED"
                padding="12px"
                width="560px"
                height="42px"
                border="1px solid #E6E5E5"
                borderRadius="4px"
                placeholder="Endereco"
                {...register('endereco')}
              />

              <Flex justifyContent="space-evenly" gap="12px">
                <Input
                  backgroundColor="#EEEDED"
                  padding="12px"
                  width="200px"
                  height="42px"
                  border="1px solid #E6E5E5"
                  borderRadius="4px"
                  placeholder="Nº"
                  {...register('numero', {
                    required: 'digite o número de seu endereço.',
                  })}
                />
                <ErrorMessage errors={errors} name="numero" as="p" />
                <Input
                  backgroundColor="#EEEDED"
                  padding="12px"
                  width="348px"
                  height="42px"
                  border="1px solid #E6E5E5"
                  borderRadius="4px"
                  placeholder="Complemento"
                  {...register('complemento')}
                />
              </Flex>
              <Flex justifyContent="space-evenly" gap="12px">
                <Input
                  backgroundColor="#EEEDED"
                  padding="12px"
                  width="200px"
                  height="42px"
                  border="1px solid #E6E5E5"
                  borderRadius="4px"
                  placeholder="Opcional"
                  {...register('opcional')}
                />
                <Input
                  backgroundColor="#EEEDED"
                  padding="12px"
                  width="276px"
                  height="42px"
                  border="1px solid #E6E5E5"
                  borderRadius="4px"
                  placeholder="Cidade"
                  {...register('cidade', {
                    required: 'informe a sua cidade.',
                  })}
                />
                <ErrorMessage errors={errors} name="cidade" as="p" />
                <Input
                  backgroundColor="#EEEDED"
                  padding="12px"
                  width="60px"
                  height="42px"
                  border="1px solid #E6E5E5"
                  borderRadius="4px"
                  placeholder="UF"
                  {...register('uf', {
                    required: 'informe o seu estado.',
                  })}
                />
                <ErrorMessage errors={errors} name="uf" as="p" />
              </Flex>
            </Flex>
          </VStack>
        </Flex>
      </Flex>

      <Flex
        direction="column"
        alignItems="flex-start"
        width="640px"
        height="207px"
        padding="40px"
        gap="32px"
        backgroundColor="#F3F2F2"
        borderRadius="6px"
        marginTop="12px"
      >
        <Flex flexWrap="wrap">
          <VStack spacing={4} align="stretch">
            <Box display="flex" alignItems="center">
              <Image src="https://londer.w3spaces.com/money.png" alt="" />
              <Text fontSize="16px" fontWeight="400">
                Pagamento
              </Text>
            </Box>
            <Box display="flex" alignItems="center">
              <Text>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </Text>
            </Box>
          </VStack>
          <Flex
            width="100%"
            marginTop="32px"
            justifyContent="center"
            alignItems="center"
            gap="12px"
            height="51px"
          >
            <HStack spacing="12px" fontSize="12px" borderRadius="6px">
              <Box
                as="button"
                w="178.67px"
                h="51px"
                backgroundColor="#EBE5F9"
                display="flex"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                gap="12px"
                cursor="pointer"
                _hover={{
                  backgroundColor: '#D7D5D5',
                  border: '1px solid #8047F8',
                }}
                borderRadius="6px"
              >
                <Image
                  marginLeft="16px"
                  src="https://londer.w3spaces.com/Cartao.png"
                  alt=""
                />
                <Text textAlign="center" padding="16px 0px 16px 0px">
                  Cartão de Credito
                </Text>
              </Box>
              <Box
                as="button"
                w="178.67px"
                h="51px"
                backgroundColor="#EBE5F9"
                display="flex"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                gap="12px"
                cursor="pointer"
                _hover={{
                  backgroundColor: '#D7D5D5',
                  border: '1px solid #8047F8',
                }}
                borderRadius="6px"
              >
                <Image
                  marginLeft="16px"
                  src="https://londer.w3spaces.com/banco.png"
                  alt=""
                />
                <Text textAlign="center" padding="16px 0px 16px 0px">
                  Cartão de Débito
                </Text>
              </Box>
              <Box
                as="button"
                w="178.67px"
                h="51px"
                backgroundColor="#EBE5F9"
                display="flex"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                gap="12px"
                cursor="pointer"
                _hover={{
                  backgroundColor: '#D7D5D5',
                  border: '1px solid #8047F8',
                }}
                borderRadius="6px"
              >
                <Image
                  marginLeft="16px"
                  src="https://londer.w3spaces.com/dinheiro.png"
                  alt=""
                />
                <Text textAlign="center" padding="16px 0px 16px 0px">
                  Dinheiro
                </Text>
              </Box>
            </HStack>
          </Flex>
        </Flex>
      </Flex>
      <Button
        backgroundColor="#DBAC2C"
        padding="12px 8px"
        gap="4px"
        width="368px"
        height="46px"
        _hover={{ backgroundColor: '#C47F17' }}
        _active={{ backgroundColor: '#C47F17' }}
        type="submit"
      >
        <Text fontSize="14px" fontWeight="700" color="#FFFFFF">
          SALVAR DADOS
        </Text>
      </Button>
    </Box>
  )
}
