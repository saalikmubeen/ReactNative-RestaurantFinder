import React, { useState } from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

const SearchContainer = styled.View`
    position: absolute;
    padding: ${(props) => props.theme.space[3]};
    width: 100%;
    top: ${StatusBar.currentHeight}px;
`;

export default function MapSearchBar({ location, setLocation }) {
    const [address, setAddress] = useState(location);
    return (
        <SearchContainer>
            <Searchbar
                icon="map"
                placeholder="Search for a location"
                value={address}
                onChangeText={(text) => setAddress(text)}
                onSubmitEditing={({ nativeEvent }) =>
                    setLocation(nativeEvent.text)
                }
            />
        </SearchContainer>
    );
}
