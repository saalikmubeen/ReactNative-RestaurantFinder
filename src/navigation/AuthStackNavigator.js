import React from "react";
import {
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createStackNavigator();

export const AuthStackNavigator = () => {
    return (
        <Stack.Navigator
            headerMode="none"
            screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    );
};
