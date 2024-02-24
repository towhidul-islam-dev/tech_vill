import React,{createContext,useState} from 'react'

const CartContextProvider = createContext();

export function CartContext({children}) {
    const [cart, setCart] = useState([]);
  return (
    <CartContextProvider.Provider value={{cart,setCart}}>
        {children}
    </CartContextProvider.Provider>
  )
}

export default CartContextProvider;