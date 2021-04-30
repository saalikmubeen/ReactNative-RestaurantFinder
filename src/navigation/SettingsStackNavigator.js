import React from "react";
import {
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack";

import SettingsScreen from "../screens/SettingsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import CameraScreen from "../screens/CameraScreen";

const Stack = createStackNavigator();

export const SettingsStackNavigator = () => {
    return (
        <Stack.Navigator
            headerMode="none"
            screenOptions={{ ...TransitionPresets.ScaleFromCenterAndroid }}
        >
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Favorites" component={FavoritesScreen} />
            <Stack.Screen name="Camera" component={CameraScreen} />
        </Stack.Navigator>
    );
};
