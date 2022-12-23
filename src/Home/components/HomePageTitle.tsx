import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  Image,
  Button,
  Text,
  Box,
  Flex,
} from '@chakra-ui/react'
import React, { useState } from 'react'

import { RegistrationForm } from './Cart/RegistrationForm'
import { CartResumeOrder } from './Cart/CartResumeOrder'
import { UseShoppingCart } from '../../context/ShoppingCarContex'

export const HomePageTitle = () => {
  const { CartQuantity } = UseShoppingCart()
  const [size, setSize] = useState('xl')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClick = (newSize: string) => {
    setSize(newSize)
    onOpen()
  }

  return (
    <>
      <Flex
        bg="#FAFAFA"
        w="100%"
        p={4}
        color="white"
        justifyContent="space-around"
        margin="32px 0 32px 0"
      >
        <Image
          width={24}
          height="40px"
          src={'https://londer.w3spaces.com/cafe.png'}
          alt={''}
        />

        <Button
          flexWrap="nowrap"
          display="flex"
          flexDirection="row"
          width="fit-content"
          onClick={() => handleClick(size)}
          key={size}
          gap="12px"
          backgroundColor="#FAFAFA"
          border="none"
          justifyContent="right"
          padding={0}
          margin={0}
          _hover={{ backgroundColor: '#FAFAFA' }}
          _active={{ backgroundColor: '#FAFAFA' }}
        >
          <Image src={'https://londer.w3spaces.com/Location.png'} alt="" />
          <Image
            src={'https://londer.w3spaces.com/Cart.png'}
            alt="aa"
            borderRadius="6px"
          />
          <Box
            position="absolute"
            w="20px"
            h="20px"
            right="-8.35px"
            top="-8px"
            borderRadius="1000px"
            backgroundColor="#C47F17"
            zIndex="1"
          >
            <Text
              padding="2px"
              color="#FFFFFF"
              fontSize="12px"
              fontWeight="700"
              zIndex="1"
              textAlign="center"
            >
              {CartQuantity}
            </Text>
          </Box>
        </Button>

        <Drawer onClose={onClose} isOpen={isOpen} size="full">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader bg="#FAFAFA">
              <HomePageTitle />
            </DrawerHeader>
            <DrawerBody
              display="flex"
              flexDirection="row"
              justifyContent="center"
              gap="32px"
            >
              <RegistrationForm />
              <CartResumeOrder />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  )
}
