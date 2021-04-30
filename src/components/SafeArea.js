import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

const StyledSafeAreaView = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

export default function SafeArea({ children }) {
    return <StyledSafeAreaView>{children}</StyledSafeAreaView>;
}
