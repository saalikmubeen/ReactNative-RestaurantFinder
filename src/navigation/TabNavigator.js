import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsStackNavigator } from "./RestaurantsStackNavigator";

import MapScreen from "../screens/MapScreen";
import { SettingsStackNavigator } from "./SettingsStackNavigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
};

export const TabNavigator = () => {
    return (
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
            <Tab.Screen
                name="Restaurants"
                component={RestaurantsStackNavigator}
            />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsStackNavigator} />
        </Tab.Navigator>
    );
};
