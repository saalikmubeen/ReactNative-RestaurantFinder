import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./TabNavigator";
import { AuthStackNavigator } from "./AuthStackNavigator";
import { AuthContext } from "../contexts/AuthProvider";

export const AppNavigator = () => {
    const { user, authLoading } = useContext(AuthContext);

    if (authLoading) {
        return null;
    }
    return (
        <NavigationContainer>
            {user ? <TabNavigator /> : <AuthStackNavigator />}
        </NavigationContainer>
    );
};

// export default AppNavigator;
