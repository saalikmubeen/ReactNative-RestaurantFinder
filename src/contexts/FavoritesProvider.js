import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

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
                const value = await AsyncStorage.getItem("favorites");
                if (value) {
                    setFavorites(JSON.parse(value));
                }
            } catch (err) {
                console.log(err);
            }
        };
        loadFavorites();
    }, []);

    useEffect(() => {
        const saveFavorites = async () => {
            try {
                await AsyncStorage.setItem(
                    "favorites",
                    JSON.stringify(favorites)
                );
            } catch (err) {
                console.log(err);
            }
        };
        saveFavorites();
    }, [favorites]);

    return (
        <FavoritesContext.Provider
            value={{ favorites, addFavorite, removeFavorite }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};
