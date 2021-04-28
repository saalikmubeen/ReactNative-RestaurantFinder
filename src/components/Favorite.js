import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FavoritesContext } from "../contexts/FavoritesProvider";

const FavoriteButton = styled(TouchableOpacity)`
    position: absolute;
    top: 25px;
    right: 25px;
    z-index: 9;
`;

export default function Favorite({ restaurant }) {
    const { favorites, addFavorite, removeFavorite } = useContext(
        FavoritesContext
    );
    const isFavorite = favorites.some(
        (favorite) => favorite.placeId === restaurant.placeId
    );

    return (
        <FavoriteButton
            onPress={() =>
                !isFavorite
                    ? addFavorite(restaurant)
                    : removeFavorite(restaurant)
            }
        >
            <AntDesign
                name={isFavorite ? "heart" : "hearto"}
                size={24}
                color={isFavorite ? "red" : "white"}
            />
        </FavoriteButton>
    );
}
