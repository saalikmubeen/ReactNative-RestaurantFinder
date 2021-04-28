import React from "react";
import { Text, View } from "react-native";

export default function RestaurantDetailsScreen(props) {
    console.log(props.route.params);
    return (
        <View>
            <Text>Details Screen</Text>
        </View>
    );
}
