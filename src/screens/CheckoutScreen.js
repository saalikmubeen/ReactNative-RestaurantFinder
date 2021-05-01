import React, { useContext, useState } from "react";
import { Text, ScrollView } from "react-native";
import { List, TextInput, Avatar } from "react-native-paper";
import styled from "styled-components";
import RestaurantCard from "../components/RestaurantCard";
import SafeArea from "../components/SafeArea";
import { CartContext } from "../contexts/CartContext";

const NameInput = styled(TextInput)`
    margin: ${(props) => props.theme.space[3]};
`;

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

const CartDetailsContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

export default function CheckoutScreen() {
    const { cart, restaurant, total } = useContext(CartContext);

    const [name, setName] = useState("");

    if (cart.length === 0) {
        return (
            <SafeArea>
                <CartIconContainer>
                    <CartIcon icon="cart-off" />
                    <Text>Your cart is empty!</Text>
                </CartIconContainer>
            </SafeArea>
        );
    }

    return (
        <SafeArea>
            <RestaurantCard restaurant={restaurant} />
            <ScrollView>
                <CartDetailsContainer>
                    <Text>Your Order</Text>
                    <List.Section>
                        {cart.map(({ item, price }, idx) => {
                            return (
                                <List.Item
                                    title={`${item} - ${price / 100}`}
                                    key={`item-${idx}`}
                                />
                            );
                        })}
                    </List.Section>
                    <Text>Total: {total / 100}</Text>
                </CartDetailsContainer>
                <NameInput
                    label="Name"
                    value={name}
                    onChangeText={(text) => {
                        setName(text);
                    }}
                />
            </ScrollView>
        </SafeArea>
    );
}
