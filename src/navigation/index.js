import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./TabNavigator";
import { AuthStackNavigator } from "./AuthStackNavigator";
import { AuthContext } from "../contexts/AuthProvider";

export const AppNavigator = () => {
    const { user } = useContext(AuthContext);
    return (
        <NavigationContainer>
            {user ? <TabNavigator /> : <AuthStackNavigator />}
        </NavigationContainer>
    );
};

// export default AppNavigator;
