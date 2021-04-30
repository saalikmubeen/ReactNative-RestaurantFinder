import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";

export const FadeAnimation = ({ style, ...props }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    return (
        <Animated.View
            style={{
                ...style,
                opacity: fadeAnim, // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
};
