import React from "react";
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

const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.body};
`;

export default function CheckoutSuccessScreen({ route }) {
    const { success, error } = route.params;
    return (
        <SafeArea>
            <CartIconContainer>
                <CartIcon
                    icon={success ? "check-bold" : "close"}
                    bg={!success && colors.ui.error}
                />
                <Title>{success ? "Success!" : error}</Title>
            </CartIconContainer>
        </SafeArea>
    );
}
