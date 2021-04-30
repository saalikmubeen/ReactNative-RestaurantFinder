import React, { useState, useEffect, useRef, useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Camera } from "expo-camera";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthProvider";

const ProfileCamera = styled(Camera)`
    width: 100%;
    height: 100%;
    flex: 1;
`;

const InnerSnap = styled.View`
    width: 100%;
    height: 100%;
`;

const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`;

export default function CameraScreen({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const cameraRef = useRef(null);
    const { user } = useContext(AuthContext);

    const handlePress = async () => {
        if (cameraRef) {
            const photo = await cameraRef.current.takePictureAsync();
            await AsyncStorage.setItem(`photo-${user.uid}`, photo.uri);
            navigation.goBack();
        }
    };

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Title>No access to camera</Title>;
    }
    return (
        <ProfileCamera
            ref={(ref) => (cameraRef.current = ref)}
            type={Camera.Constants.Type.front}
        >
            <TouchableOpacity onPress={handlePress}>
                <InnerSnap />
            </TouchableOpacity>
        </ProfileCamera>
    );
}
