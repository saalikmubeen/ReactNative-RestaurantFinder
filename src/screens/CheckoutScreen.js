import React, { useContext, useState } from "react";
import { Text, ScrollView } from "react-native";
import {
    List,
    TextInput,
    Avatar,
    Button,
    ActivityIndicator,
    Colors,
} from "react-native-paper";
import styled from "styled-components";
import CreditCard from "../components/CreditCard";
import RestaurantCard from "../components/RestaurantCard";
import SafeArea from "../components/SafeArea";
import { CartContext } from "../contexts/CartContext";
import { paymentRequest } from "../stripe";
import { colors } from "../theme/colors";

// styles
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

const CardContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

const PayButton = styled(Button).attrs({
    color: colors.brand.primary,
})`
    width: 80%;
    align-self: center;
    padding: ${(props) => props.theme.space[2]};
    margin: ${(props) => props.theme.space[2]} 0;
`;

const ClearButton = styled(Button).attrs({
    color: colors.ui.error,
})`
    width: 80%;
    align-self: center;
    padding: ${(props) => props.theme.space[2]};
    margin: ${(props) => props.theme.space[3]} 0;
`;

const PaymentProcessing = styled(ActivityIndicator).attrs({
    size: 128,
    animating: true,
    color: Colors.blue300,
})`
    position: absolute;
    top: 50%;
    left: 35%;
    z-index: 999;
`;

export default function CheckoutScreen({ navigation }) {
    const { cart, restaurant, total, clearCart } = useContext(CartContext);

    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [token, setToken] = useState(null);

    const onPay = () => {
        setLoading(true);
        if (!token || !name) {
            setLoading(false);
            navigation.navigate("Checkout Result", {
                error: "Please fill in a valid credit card",
                success: false,
            });
            return;
        }
        paymentRequest(token, total, name)
            .then((result) => {
                setLoading(false);
                clearCart();
                navigation.navigate("Checkout Result", { success: true });
            })
            .catch((err) => {
                setLoading(false);
                navigation.navigate("CheckoutError", {
                    error: err,
                    success: false,
                });
            });
    };

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
            {loading && <PaymentProcessing />}
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

                {name.length > 0 && (
                    <CardContainer>
                        <CreditCard
                            name={name}
                            setToken={setToken}
                            onError={() => {
                                navigation.navigate("Checkout Result", {
                                    success: false,
                                });
                            }}
                        />
                    </CardContainer>
                )}

                <PayButton
                    icon="cash-usd"
                    mode="contained"
                    disabled={loading}
                    onPress={onPay}
                >
                    Pay
                </PayButton>
                <ClearButton
                    icon="cart-off"
                    mode="contained"
                    disabled={loading}
                    onPress={clearCart}
                >
                    Clear Cart
                </ClearButton>
            </ScrollView>
        </SafeArea>
    );
}
