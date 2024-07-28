import React, { PropsWithChildren, createContext, useContext, useState } from 'react';
import { CartItem, Product } from '@/src/types';
import { randomUUID } from 'expo-crypto';

type CartType = {
  items: CartItem[];
  addItem: (product : Product, size: CartItem['size'] ) => void;
  updateQuantity: (id: string, amount: -1 | 1) => void;
  total: number;
};


// Create the context
 export const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
  total: 0,
 });

// Create the CartProvider component
 const CartProvider= ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);
  

  const addItem = (product: Product, size: CartItem['size']) => {

    const existingItems = items.find((item) => item.product === product && item.size === size);
    if (existingItems) {
      updateQuantity(existingItems.id, 1);
      return;
    }
    const newCartItem: CartItem = {
      id: randomUUID(),
      product,
      product_id: product.id,
      size,
      quantity: 1,
    };
    setItems([newCartItem, ...items]);
  };

  const updateQuantity = (id: string, amount: -1 | 1) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + amount } : item
      ).filter((item) => item.quantity > 0)
    );
  }
  const total = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  return (
    <CartContext.Provider value={{ items, addItem, updateQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);