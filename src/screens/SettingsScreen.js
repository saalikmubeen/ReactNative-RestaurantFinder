import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { AuthContext } from "../contexts/AuthProvider";

export default function SettingsScreen() {
    const { logout } = useContext(AuthContext);
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Button icon="camera" mode="contained" onPress={logout}>
                Logout
            </Button>
        </View>
    );
}
