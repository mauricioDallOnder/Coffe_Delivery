import { Flex, Stack } from '@chakra-ui/react'

import { HomePageDescription } from '../Home/components/HomePageDescription'
import { HomePageBody } from '../Home/components/HomePageBody'
import { HomePageTitle } from '../Home/components/HomePageTitle'

export const HomePage = () => {
  return (
    <Flex direction="column" alignItems="center" h="2293px">
      <HomePageTitle />

      <HomePageDescription />
      <Flex
        h="1360px"
        w="1120px"
        display="flex"
        flexDirection="column"
        alignItems="left"
        margin="auto"
      >
        <Stack
          direction={['column', 'row']}
          spacing="40px"
          gap="32px"
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          marginBottom="15px"
        >
          <HomePageBody />
        </Stack>
      </Flex>
    </Flex>
  )
}
