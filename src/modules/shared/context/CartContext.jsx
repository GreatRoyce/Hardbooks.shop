import React from "react";

const CartContext = React.createContext(null);
const CART_STORAGE_KEY = "hardbooks_cart_v1";

const loadCart = () => {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const saveCart = (items) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Ignore write failures (private mode, storage full, etc.).
  }
};

export const CartProvider = ({ children }) => {
  const [items, setItems] = React.useState(loadCart);

  React.useEffect(() => {
    saveCart(items);
  }, [items]);

  const addItem = (book, quantity = 1) => {
    if (!book) return;
    const maxCopies =
      typeof book.copies === "number" ? book.copies : Number.POSITIVE_INFINITY;
    setItems((prev) => {
      const existing = prev.find((item) => item.id === book.id);
      if (existing) {
        return prev.map((item) => {
          if (item.id !== book.id) return item;
          const nextQuantity = Math.min(item.quantity + quantity, maxCopies);
          return { ...item, quantity: nextQuantity };
        });
      }

      const initialQuantity = Math.min(quantity, maxCopies);
      return [
        ...prev,
        {
          id: book.id,
          title: book.title,
          author: book.author,
          price: book.price,
          image: book.image,
          format: book.format,
          copies: book.copies,
          quantity: initialQuantity,
        },
      ];
    });
  };

  const updateItemQuantity = (id, quantity) => {
    setItems((prev) => {
      return prev.flatMap((item) => {
        if (item.id !== id) return [item];
        const maxCopies =
          typeof item.copies === "number"
            ? item.copies
            : Number.POSITIVE_INFINITY;
        const nextQuantity = Math.min(quantity, maxCopies);
        if (nextQuantity <= 0) return [];
        return [{ ...item, quantity: nextQuantity }];
      });
    });
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const itemsCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const value = {
    items,
    addItem,
    updateItemQuantity,
    removeItem,
    clearCart,
    itemsCount,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
