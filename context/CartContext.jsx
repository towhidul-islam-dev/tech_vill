import React, { createContext, useState } from "react";

const CartContextProvider = createContext();

export function CartContext({ children }) {
  const [cart, setCart] = useState([]);
  const [checkOutProduct, setCheckOutProduct] = useState([]);

  const addToCart = (product) => {
    const productIsExsist = cart?.find(
      (checkProduct) => checkProduct.id === product.id
    );
    if (productIsExsist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const decrementItem = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  const incrementItem = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  return (
    <CartContextProvider.Provider
      value={{
        cart,
        setCart,
        addToCart,
        setCheckOutProduct,
        incrementItem,
        decrementItem,
      }}
    >
      {children}
    </CartContextProvider.Provider>
  );
}

export default CartContextProvider;
