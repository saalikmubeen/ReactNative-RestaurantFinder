import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import { WebView } from "react-native-webview";

const StyledImage = styled.Image`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`;

const StyledWebView = styled(WebView)`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`;

const Card = styled.View`
    border-radius: 10px;
    padding: 10px;
    max-width: 120px;
    align-items: center;
`;

const Title = styled.Text`
    padding-top: ${(props) => props.theme.space[2]};
    font-size: ${(props) => props.theme.fontSizes.caption};
    font-family: ${(props) => props.theme.fonts.heading};
`;

export default function RestaurantCompactCard({ restaurant, map }) {
    const Image =
        Platform.OS === "android" && map ? StyledWebView : StyledImage;
    return (
        <Card>
            <Image source={{ uri: restaurant.photos[0] }} />
            <Title numberOfLines={3}>{restaurant.name}</Title>
        </Card>
    );
}
