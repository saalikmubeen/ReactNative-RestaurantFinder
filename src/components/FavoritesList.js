import React, { useContext } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { FavoritesContext } from "../contexts/FavoritesProvider";
import RestaurantCompactCard from "./RestaurantCompactCard";

const FavoritesContainer = styled.View`
    padding: 10px;
`;

const CardWrapper = styled.View`
    padding-left: ${(props) => props.theme.space[3]};
`;

const Title = styled.Text`
    padding-left: ${(props) => props.theme.space[3]};
    font-size: ${(props) => props.theme.fontSizes.body};
    font-family: ${(props) => props.theme.fonts.heading};
`;

export default function FavoritesList({ navigate }) {
    const { favorites } = useContext(FavoritesContext);

    if (favorites.length === 0) {
        return null;
    }

    return (
        <FavoritesContainer>
            <Title>Favorites</Title>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {favorites.map((restaurant) => {
                    return (
                        <CardWrapper key={restaurant.placeId}>
                            <TouchableOpacity
                                onPress={() =>
                                    navigate("Restaurant Details", {
                                        restaurant,
                                    })
                                }
                            >
                                <RestaurantCompactCard
                                    restaurant={restaurant}
                                />
                            </TouchableOpacity>
                        </CardWrapper>
                    );
                })}
            </ScrollView>
        </FavoritesContainer>
    );
}
