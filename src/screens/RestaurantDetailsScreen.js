import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { List, Button, Divider } from "react-native-paper";
import styled from "styled-components";
import RestaurantCard from "../components/RestaurantCard";
import SafeArea from "../components/SafeArea";
import { CartContext } from "../contexts/CartContext";
import { colors } from "../theme/colors";

export const OrderButton = styled(Button).attrs({
    color: colors.brand.primary,
})`
    padding: ${(props) => props.theme.space[2]};
    width: 80%;
    align-self: center;
    margin-bottom: ${(props) => props.theme.space[3]};
`;

export default function RestaurantDetailsScreen({ route, navigation }) {
    const { restaurant } = route.params;
    const { addToCart } = useContext(CartContext);

    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false);

    return (
        <SafeArea>
            <RestaurantCard restaurant={restaurant} />
            <ScrollView>
                <List.Accordion
                    title="Breakfast"
                    left={(props) => (
                        <List.Icon {...props} icon="bread-slice" />
                    )}
                    expanded={breakfastExpanded}
                    onPress={() => setBreakfastExpanded(!breakfastExpanded)}
                >
                    <List.Item title="Eggs Benedict" />
                    <Divider />
                    <List.Item title="Classic Breakfast" />
                </List.Accordion>

                <Divider />

                <List.Accordion
                    title="Lunch"
                    left={(props) => <List.Icon {...props} icon="hamburger" />}
                    expanded={lunchExpanded}
                    onPress={() => setLunchExpanded(!lunchExpanded)}
                >
                    <List.Item title="Burger w/ Fries" />
                    <Divider />
                    <List.Item title="Steak Sandwich" />
                    <Divider />
                    <List.Item title="Mushroom Soup" />
                </List.Accordion>

                <Divider />

                <List.Accordion
                    title="Dinner"
                    left={(props) => (
                        <List.Icon {...props} icon="food-variant" />
                    )}
                    expanded={dinnerExpanded}
                    onPress={() => setDinnerExpanded(!dinnerExpanded)}
                >
                    <List.Item title="Spaghetti Bolognese" />
                    <Divider />
                    <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
                    <Divider />
                    <List.Item title="Steak Frites" />
                </List.Accordion>

                <Divider />

                <List.Accordion
                    title="Drinks"
                    left={(props) => <List.Icon {...props} icon="cup" />}
                    expanded={drinksExpanded}
                    onPress={() => setDrinksExpanded(!drinksExpanded)}
                >
                    <List.Item title="Coffee" />
                    <Divider />
                    <List.Item title="Tea" />
                    <Divider />
                    <List.Item title="Modelo" />
                    <Divider />
                    <List.Item title="Coke" />
                    <Divider />
                    <List.Item title="Fanta" />
                </List.Accordion>
            </ScrollView>
            <OrderButton
                icon="cash-usd"
                mode="contained"
                onPress={() => {
                    addToCart(restaurant, { item: "special", price: 49900 });
                    navigation.navigate("Checkout");
                }}
            >
                Order Special Only ₹499!
            </OrderButton>
        </SafeArea>
    );
}
