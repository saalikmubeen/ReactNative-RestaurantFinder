import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); // { item: "special", price: 12.99 }
    const [restaurant, setRestaurant] = useState(null);
    const [total, setTotal] = useState(0);

    const addToCart = (rest, item) => {
        if (restaurant && restaurant.placeId === rest.placeId) {
            setCart([...cart, item]);
        } else {
            setCart([item]);
            setRestaurant(rest);
        }
    };

    const clearCart = () => {
        setCart([]);
        setRestaurant(null);
    };

    useEffect(() => {
        if (cart.length > 0) {
            const sum = cart.reduce((acc, next) => (acc += next), 0);
            setTotal(sum);
        }
    }, [cart]);

    return (
        <CartContext.Provider
            value={{ cart, restaurant, addToCart, clearCart, total }}
        >
            {children}
        </CartContext.Provider>
    );
};
