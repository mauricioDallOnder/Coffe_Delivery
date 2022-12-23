import { Flex, Box, Image, Text, HStack } from '@chakra-ui/react'
import React from 'react'
import imageDocafe from '../../assets/logoCafe.png'
import { ShoppingCart, Timer, ArchiveBox, Coffee } from 'phosphor-react'
export const HomePageDescription = () => {
  return (
    <Box bg="#FAFAFA" w="100%" h="544px" p={4} color="white">
      <Flex justifyContent="space-around" alignItems="baseline">
        <HStack spacing="56px" margin="94px">
          <Flex direction="column" width="588px">
            <Text fontWeight="800" fontSize={48} color="#272221">
              Encontre o café perfeito para qualquer hora do dia
            </Text>
            <Text as="p" fontWeight="400" fontSize={20} color="#403937">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </Text>
            <Box
              w={567}
              h={84}
              display="flex"
              justifyContent="space-between"
              flexWrap="wrap"
              marginTop={66}
              alignItems="baseline"
            >
              <Box
                display="flex"
                w={231}
                gap="12px"
                marginBottom="20px"
                alignItems="center"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  borderRadius="1000px"
                  backgroundColor="#C47F17"
                  padding="8px"
                  w="32px"
                  h="32px"
                >
                  <ShoppingCart fontWeight="bold" size={24} />
                </Box>
                <Text color="#574F4D" fontWeight={400} fontSize="16px">
                  Compra simples e segura
                </Text>
              </Box>
              <Box display="flex" w={231} gap="12px" alignItems="center">
                <Box
                  display="flex"
                  alignItems="center"
                  borderRadius="1000px"
                  backgroundColor="#DBAC2C"
                  padding="8px"
                  w="32px"
                  h="32px"
                >
                  <Timer size={24} />
                </Box>
                <Text color="#574F4D" fontWeight={400} fontSize="16px">
                  Entrega rápida e rastreada
                </Text>
              </Box>
              <Box display="flex" w={231} gap="12px" alignItems="center">
                <Box
                  display="flex"
                  alignItems="center"
                  borderRadius="1000px"
                  backgroundColor="#574F4D"
                  padding="8px"
                  w="32px"
                  h="32px"
                >
                  <ArchiveBox size={24} />
                </Box>
                <Text color="#574F4D" fontWeight={400} fontSize="16px">
                  Embalagem mantém o café intacto
                </Text>
              </Box>
              <Box display="flex" w={231} gap="12px">
                <Box
                  display="flex"
                  alignItems="center"
                  borderRadius="1000px"
                  backgroundColor="#8047F8"
                  padding="8px"
                  w="32px"
                  h="32px"
                >
                  <Coffee size={24} />
                </Box>
                <Text color="#574F4D" fontWeight={400} fontSize="16px">
                  O café chega fresquinho até você
                </Text>
              </Box>
            </Box>
          </Flex>
          <Image src={imageDocafe} alt={''} />
        </HStack>
      </Flex>
    </Box>
  )
}
