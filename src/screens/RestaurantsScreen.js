import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Loading from "../components/Loading";

import RestaurantCard from "../components/RestaurantCard";
import RestaurantsSearchBar from "../components/RestaurantsSearchBar";
import SafeArea from "../components/SafeArea";
import { RestaurantsContext } from "../contexts/RestaurantsProvider";

const RestaurantsContainer = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

const RestaurantsScreen = ({ navigation }) => {
    const { restaurants, loading } = useContext(RestaurantsContext);

    if (loading) {
        return <Loading />;
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
