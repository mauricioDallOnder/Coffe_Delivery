import { createContext, ReactNode, useContext, useState } from 'react'

type FormContextProviderProps = {
  children: ReactNode
}

type IFormInputs = {
  cep?: string
  endereco?: string
  numero?: number
  complemento?: string
  opcional?: string
  cidade?: string
  uf?: string
  data?: string[]
}
type FormCartContextType = {
  formdata: IFormInputs[]
  onSubmit: (data: IFormInputs) => void
}
export const FormCartCartContext = createContext({} as FormCartContextType)

export const UseFormCartContext = () => {
  return useContext(FormCartCartContext)
}

export const FormContextProvider = ({ children }: FormContextProviderProps) => {
  const [formdata, setFormdata] = useState<IFormInputs[]>([])
  const onSubmit = (data: IFormInputs) => {
    setFormdata([...formdata, data])
  }
  return (
    <FormCartCartContext.Provider
      value={{
        formdata,
        onSubmit,
      }}
    >
      {children}
    </FormCartCartContext.Provider>
  )
}
