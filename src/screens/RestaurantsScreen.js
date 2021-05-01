import React, { useContext, useEffect, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { FadeAnimation } from "../animations/FadeAnimation";
import FavoritesList from "../components/FavoritesList";
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
    const [isToggled, setIsToggled] = useState(false);

    if (loading) {
        return <Loading />;
    }

    return (
        <SafeArea>
            <RestaurantsSearchBar
                toggled={isToggled}
                setToggled={() => setIsToggled(!isToggled)}
            />
            {isToggled && <FavoritesList navigate={navigation.navigate} />}

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
                            <FadeAnimation>
                                <RestaurantCard restaurant={element.item} />
                            </FadeAnimation>
                        </TouchableOpacity>
                    );
                }}
            />
        </SafeArea>
    );
};

export default RestaurantsScreen;
