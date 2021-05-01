import React, { useState, createContext, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "./AuthProvider";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); // { item: "special", price: 12.99 }
    const [restaurant, setRestaurant] = useState(null);
    const [total, setTotal] = useState(0);
    const { user } = useContext(AuthContext);

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
        const loadCart = async () => {
            try {
                const value = await AsyncStorage.getItem(`cartObj-${user.uid}`);
                if (value) {
                    const val = JSON.parse(value);
                    setCart(val.cart);
                    setRestaurant(val.restaurant);
                }
            } catch (err) {
                console.log(err);
            }
        };
        if (user && user.uid) {
            loadCart();
        }
    }, [user]);

    useEffect(() => {
        const saveCart = async () => {
            try {
                await AsyncStorage.setItem(
                    `cartObj-${user.uid}`,
                    JSON.stringify({ cart: cart, restaurant: restaurant })
                );
            } catch (err) {
                console.log(err);
            }
        };
        if (cart.length > 0 && user && user.uid) {
            saveCart();
        }
    }, [cart, restaurant, user]);

    useEffect(() => {
        if (cart.length > 0) {
            const sum = cart.reduce((acc, next) => (acc += next.price), 0);
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
