import React, { useContext } from "react";
import {
    SafeAreaView,
    StatusBar,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { TextInput, ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";
import RestaurantCard from "../components/RestaurantCard";
import { RestaurantsContext } from "../contexts/RestaurantsProvider";

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

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
            <SearchContainer>
                <TextInput />
            </SearchContainer>
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
