import React from "react";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import { TextInput } from "react-native-paper";
import styled from "styled-components/native";
import RestaurantCard from "../components/RestaurantCard";

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

const RestaurantsScreen = () => {
    const data = [
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
        { name: 12 },
        { name: 13 },
        { name: 14 },
    ];

    return (
        <SafeArea>
            <SearchContainer>
                <TextInput />
            </SearchContainer>
            <RestaurantsContainer
                data={data}
                keyExtractor={(item) => item.name.toString()}
                renderItem={() => {
                    return <RestaurantCard />;
                }}
            />
        </SafeArea>
    );
};

export default RestaurantsScreen;
