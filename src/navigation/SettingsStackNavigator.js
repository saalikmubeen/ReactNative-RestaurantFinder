import React from "react";
import {
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack";

import SettingsScreen from "../screens/SettingsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const Stack = createStackNavigator();

export const SettingsStackNavigator = () => {
    return (
        <Stack.Navigator
            headerMode="none"
            screenOptions={{ ...TransitionPresets.ScaleFromCenterAndroid }}
        >
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Favorites" component={FavoritesScreen} />
        </Stack.Navigator>
    );
};
