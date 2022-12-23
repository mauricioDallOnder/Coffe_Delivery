// import { collection, onSnapshot } from 'firebase/firestore'
import React, { createContext, useState, useEffect } from 'react'
// import { db } from '../config/config'
import { dataItems } from './dataItems'
export interface ListCoffes {
  ImageCoffe?: string
  ImageTypeOfCoffe?: string
  Name?: string
  description?: string
  price?: number
  id?: number
}
type ApiContextProviderProps = {
  children: React.ReactNode
}
export type ApiContextType = {
  CoffesArray: ListCoffes[]
}

export const ApiFirebaseContext = createContext<ApiContextType | null>(null)
const AppProvider = ({ children }: ApiContextProviderProps) => {
  const [DataApiItens, setDataApiItens] = useState<ListCoffes[]>([])

  useEffect(() => {
    setDataApiItens(
      dataItems.map((item) => {
        return {
          ...item,
        }
      }),
    )
  }, [])

  return (
    <ApiFirebaseContext.Provider value={{ CoffesArray: DataApiItens }}>
      {children}
    </ApiFirebaseContext.Provider>
  )
}

export default AppProvider

/*
Fetch data with googleFirebase:

const CollectionData = collection(db, 'db-cafe')
export const ApiFirebaseContext = createContext<ApiContextType | null>(null)

const AppProvider = ({ children }: ApiContextProviderProps) => {
  const [DataApiItens, setDataApiItens] = useState<ListCoffes[]>([])
  useEffect(() => {
    const getAllData = async (): Promise<ListCoffes[]> => {
      onSnapshot(CollectionData, (snapshot) => {
        setDataApiItens(
          snapshot.docs.map((item) => {
            return {
              id: item.id,
              ...item.data(),
            }
          }),
        )
      })

      return DataApiItens as Array<ListCoffes>
    }
    getAllData()
  }, [DataApiItens])
*/
