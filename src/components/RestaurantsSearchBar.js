import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../contexts/LocationProvider";

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

export default function RestaurantsSearchBar() {
    const { location, setLocation } = useContext(LocationContext);
    const [address, setAddress] = useState(location);
    return (
        <SearchContainer>
            <Searchbar
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
