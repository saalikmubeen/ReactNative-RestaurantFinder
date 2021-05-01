import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import {
    useFonts as useOswald,
    Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/theme";
import { AppNavigator } from "./src/navigation";

import { AuthProvider } from "./src/contexts/AuthProvider";

export default function App() {
    let [oswaldLoaded] = useOswald({ Oswald_400Regular });
    let [latoLoaded] = useLato({ Lato_400Regular });

    if (!oswaldLoaded || !latoLoaded) {
        return null;
    }

    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <AppNavigator />
            </AuthProvider>
            <StatusBar style="auto" />
        </ThemeProvider>
    );
}
