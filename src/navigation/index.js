import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./TabNavigator";
import { AuthStackNavigator } from "./AuthStackNavigator";
import { AuthContext } from "../contexts/AuthProvider";
import { LocationProvider } from "../contexts/LocationProvider";
import { RestaurantsProvider } from "../contexts/RestaurantsProvider";
import { FavoritesProvider } from "../contexts/FavoritesProvider";
import { CartProvider } from "../contexts/CartContext";

export const AppNavigator = () => {
    const { user, authLoading } = useContext(AuthContext);

    if (authLoading) {
        return null;
    }
    return (
        <NavigationContainer>
            {user ? (
                <LocationProvider>
                    <RestaurantsProvider>
                        <FavoritesProvider>
                            <CartProvider>
                                <TabNavigator />
                            </CartProvider>
                        </FavoritesProvider>
                    </RestaurantsProvider>
                </LocationProvider>
            ) : (
                <AuthStackNavigator />
            )}
        </NavigationContainer>
    );
};

// export default AppNavigator;
