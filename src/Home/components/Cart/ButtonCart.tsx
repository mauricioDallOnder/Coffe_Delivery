import { Button, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { UseFormCartContext } from '../../../context/formContext'
import { useState } from 'react'
export const ButtonCart = () => {
  const { formdata } = UseFormCartContext()
  const history = useNavigate()
  // eslint-disable-next-line no-unused-vars
  const [isActive, setIsActive] = useState(true)
  const handleSubmit = () => {
    formdata.forEach((item) => {
      history('/ConfirmOrder')
      if (
        (item.cep || item.endereco || item.numero || item.cidade || item.uf) ===
        ''
      ) {
        setIsActive((current) => !current)
        console.log('preencha os dadps')
      }
    })
  }
  return (
    <Button
      backgroundColor="#DBAC2C"
      padding="12px 8px"
      gap="4px"
      width="368px"
      height="46px"
      _hover={{ backgroundColor: '#C47F17' }}
      _active={{ backgroundColor: '#C47F17' }}
      onClick={handleSubmit}
      disabled={!handleSubmit}
      type="submit"
    >
      <Text fontSize="14px" fontWeight="700" color="#FFFFFF">
        CONFIRMAR PEDIDO
      </Text>
    </Button>
  )
}
