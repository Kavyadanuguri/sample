import React from 'react'

const CartContext = React.createContext({
  cartItemsList: [],
  isLightTheme: '',
  onThemeValue: () => {},
  onIncrementList: () => {},
})

export default CartContext
