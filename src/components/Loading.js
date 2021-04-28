import React from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";

const LoadingContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export default function Loading() {
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
