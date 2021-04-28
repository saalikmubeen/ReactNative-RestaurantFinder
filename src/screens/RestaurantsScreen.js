import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";

import RestaurantCard from "../components/RestaurantCard";
import RestaurantsSearchBar from "../components/RestaurantsSearchBar";
import SafeArea from "../components/SafeArea";
import { RestaurantsContext } from "../contexts/RestaurantsProvider";

const RestaurantsContainer = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

const LoadingContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const RestaurantsScreen = ({ navigation }) => {
    const { restaurants, loading } = useContext(RestaurantsContext);

    if (loading) {
        return (
            <LoadingContainer>
                <ActivityIndicator
                    size={50}
                    animating={true}
                    color={Colors.blue300}
                />
            </LoadingContainer>
        );
    }

    return (
        <SafeArea>
            <RestaurantsSearchBar />
            <RestaurantsContainer
                data={restaurants}
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

export default RestaurantsScreen;
