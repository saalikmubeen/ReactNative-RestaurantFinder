import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "./AuthProvider";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const { user } = useContext(AuthContext);

    const addFavorite = (restaurant) => {
        setFavorites([...favorites, restaurant]);
    };

    const removeFavorite = (restaurant) => {
        const updatedFavorites = favorites.filter(
            (favorite) => favorite.placeId !== restaurant.placeId
        );
        setFavorites(updatedFavorites);
    };

    useEffect(() => {
        const loadFavorites = async () => {
            try {
                const value = await AsyncStorage.getItem(
                    `favorites-${user.uid}`
                );
                if (value) {
                    setFavorites(JSON.parse(value));
                }
            } catch (err) {
                console.log(err);
            }
        };
        if (user && user.uid) {
            loadFavorites();
        }
    }, [user]);

    useEffect(() => {
        const saveFavorites = async () => {
            try {
                await AsyncStorage.setItem(
                    `favorites-${user.uid}`,
                    JSON.stringify(favorites)
                );
            } catch (err) {
                console.log(err);
            }
        };
        if (favorites.length > 0 && user && user.uid) {
            saveFavorites();
        }
    }, [favorites, user]);

    return (
        <FavoritesContext.Provider
            value={{ favorites, addFavorite, removeFavorite }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};
