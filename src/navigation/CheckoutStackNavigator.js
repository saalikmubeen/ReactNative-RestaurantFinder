import React from "react";
import {
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack";

import CheckoutScreen from "../screens/CheckoutScreen";
import CheckoutSuccessScreen from "../screens/CheckoutResultScreen";

const Stack = createStackNavigator();

export const CheckoutStackNavigator = () => {
    return (
        <Stack.Navigator
            headerMode="none"
            screenOptions={{ ...TransitionPresets.ScaleFromCenterAndroid }}
        >
            <Stack.Screen name="Checkout" component={CheckoutScreen} />
            <Stack.Screen
                name="Checkout Result"
                component={CheckoutSuccessScreen}
            />
        </Stack.Navigator>
    );
};
