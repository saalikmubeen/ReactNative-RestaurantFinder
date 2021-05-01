import React from "react";
import { Text } from "react-native";
import { Avatar } from "react-native-paper";
import styled from "styled-components";
import SafeArea from "../components/SafeArea";
import { colors } from "../theme/colors";

const CartIconContainer = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
`;

const CartIcon = styled(Avatar.Icon).attrs({
    size: 128,
})`
    background-color: ${(props) =>
        props.bg || props.theme.colors.brand.primary};
`;

export default function CheckoutSuccessScreen({ route }) {
    const { success, error } = route.params;
    return (
        <SafeArea>
            <CartIconContainer>
                <CartIcon
                    icon={success ? "check-bold" : "close"}
                    bg={colors.ui.error}
                />
                <Text>{success ? "Success!" : error}</Text>
            </CartIconContainer>
        </SafeArea>
    );
}
