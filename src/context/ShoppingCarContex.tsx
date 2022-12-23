import React, { createContext, useContext, useState } from 'react'

type ShoppingCartProviderProps = {
  children: React.ReactNode
}
type CartItem = {
  id: number
  quantity: number
  price?: number
}
type ShoppingCartContextType = {
  CartQuantity: number
  CartItems: CartItem[]
  getItemQuantity: (id: number) => number
  increaseCarQuantity: (id: number) => void
  decreaseCarQuantity: (id: number) => void
  RemoveFromCarQuantity: (id: number) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export const UseShoppingCart = () => {
  return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [CartItems, setCartItens] = useState<CartItem[]>([])

  const CartQuantity = CartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0,
  )

  const getItemQuantity = (id: number) => {
    return CartItems.find((item) => item.id === id)?.quantity || 0
  }

  const increaseCarQuantity = (id: number) => {
    setCartItens((current) => {
      if (current.find((item) => item.id === id) == null) {
        return [...current, { id, quantity: 1 }]
      } else {
        return current.map((item) => {
          if (item.id === id) {
            return { ...current, id, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const decreaseCarQuantity = (id: number) => {
    setCartItens((current) => {
      if (current.find((item) => item.id === id)?.quantity === 1) {
        return current.filter((item) => item.id !== id)
      } else {
        return current.map((item) => {
          if (item.id === id) {
            return { ...current, id, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const RemoveFromCarQuantity = (id: number) => {
    setCartItens((current) => {
      return current.filter((item) => item.id !== id)
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCarQuantity,
        decreaseCarQuantity,
        RemoveFromCarQuantity,
        CartItems,
        CartQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
