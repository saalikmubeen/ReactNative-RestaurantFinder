import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (restaurant) => {
        setFavorites([...favorites, restaurant]);
    };

    const removeFavorite = (restaurant) => {
        const updatedFavorites = favorites.map(
            (favorite) => favorite.id !== restaurant.id
        );
        setFavorites(updatedFavorites);
    };

    return (
        <FavoritesContext.Provider
            value={{ favorites, addFavorite, removeFavorite }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};
