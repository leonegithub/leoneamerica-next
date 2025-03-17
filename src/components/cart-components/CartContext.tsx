import React, { createContext, useState, useEffect, useContext } from "react";

interface CartContextProps {
  id: string;
  codice: string;
  descrizioneEng: string;
  quantity: number;
}

interface CartContextType {
  cart: CartContextProps[];
  addToCart: (item: CartContextProps) => void;
  emptyCart: () => void;
  setJustEmptied: (value: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: React.ReactNode;
  products: CartContextProps[];
  searchParams: URLSearchParams;
}

export const CartProvider: React.FC<CartProviderProps> = ({
  children,
  products,
  searchParams,
}) => {
  const codice = searchParams.get("codice");

  const [cart, setCart] = useState<CartContextProps[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [justEmptied, setJustEmptied] = useState(false);

  useEffect(() => {
    if (codice && !justEmptied) {
      const product = products.find((item) => item.codice === codice);
      const isProductInCart = cart.some((item) => item.codice === codice);
      if (product && !isProductInCart) {
        setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
      }
    }
  }, [codice, products, cart, justEmptied]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartContextProps) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        return [...prevCart, item];
      }
    });
  };

  const emptyCart = () => {
    setCart([]);
    setJustEmptied(true);
    localStorage.clear();
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, emptyCart, setJustEmptied }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
