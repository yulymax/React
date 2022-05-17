import React, { useState } from "react";

export const CartContext = React.createContext({});

export const CartContextProvider = ({ defaultValue, children }) => {
  const [cart, setCart] = useState(defaultValue);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart([
        ...cart,
        {
          ...item,
          quantity,
        },
      ]);
    }
  };

  const removeItem = (itemId) =>
    setCart(cart.filter((item) => item.id !== itemId));

  const isInCart = (id) => !!cart.find((item) => item.id === id);

  const clear = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, isInCart, clear }}
    >
      {children}
    </CartContext.Provider>
  );
};
