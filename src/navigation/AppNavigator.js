import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import RestaurantsScreen from "../screens/RestaurantsScreen";
import MapScreen from "../screens/MapScreen";
import SettingsScreen from "../screens/SettingsScreen";
import RestaurantDetailsScreen from "../screens/RestaurantDetailsScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            headerMode="none"
            screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
        >
            <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
            <Stack.Screen
                name="Restaurant Details"
                component={RestaurantDetailsScreen}
            />
        </Stack.Navigator>
    );
};

const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
};

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        // You can return any component that you like here!
                        return (
                            <Ionicons
                                name={TAB_ICON[route.name]}
                                size={size}
                                color={color}
                            />
                        );
                    },
                })}
                tabBarOptions={{
                    activeTintColor: "tomato",
                    inactiveTintColor: "gray",
                }}
            >
                <Tab.Screen name="Restaurants" component={StackNavigator} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
