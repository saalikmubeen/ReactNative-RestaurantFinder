import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import RestaurantCard from "../components/RestaurantCard";
import SafeArea from "../components/SafeArea";
import { FavoritesContext } from "../contexts/FavoritesProvider";

const FavoritesContainer = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

const NoFavoritesArea = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Title = styled.Text`
    font-size: ${(props) => props.theme.fontSizes.title};
`;

const FavoritesScreen = ({ navigation }) => {
    const { favorites } = useContext(FavoritesContext);

    if (favorites.length === 0) {
        return (
            <NoFavoritesArea>
                <Title>No favorites yet!</Title>
            </NoFavoritesArea>
        );
    }

    return (
        <SafeArea>
            <FavoritesContainer
                data={favorites}
                keyExtractor={(item) => item.placeId}
                renderItem={(element) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("Restaurant Details", {
                                    restaurant: element.item,
                                })
                            }
                        >
                            <RestaurantCard restaurant={element.item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </SafeArea>
    );
};

export default FavoritesScreen;
