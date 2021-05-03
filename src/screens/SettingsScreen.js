import React, { useContext, useState, useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components";
import SafeArea from "../components/SafeArea";
import { colors } from "../theme/colors";
import { AuthContext } from "../contexts/AuthProvider";

const AvatarContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
    align-items: center;
`;

const Title = styled.Text`
    font-size: ${(props) => props.theme.fontSizes.title};
    margin-top: ${(props) => props.theme.space[4]};
`;

const SettingsItem = styled(List.Item)`
    padding: ${(props) => props.theme.space[3]};
    background-color: rgba(255, 255, 255, 0.4);
    margin-bottom: ${(props) => props.theme.space[2]};
`;

const Background = styled.ImageBackground.attrs({
    source: require("../../assets/home_bg.jpg"),
})`
    position: absolute;
    width: 100%;
    height: 100%;
`;

export default function SettingsScreen({ navigation }) {
    const { logout, user } = useContext(AuthContext);
    const [photo, setPhoto] = useState(null);

    const getProfilePicture = async (currentUser) => {
        const photoUri = await AsyncStorage.getItem(`photo-${currentUser.uid}`);
        setPhoto(photoUri);
    };

    useFocusEffect(
        useCallback(() => {
            getProfilePicture(user);
        }, [user])
    );

    return (
        <SafeArea>
            <Background />
            <AvatarContainer>
                <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
                    {!photo && (
                        <Avatar.Icon
                            size={120}
                            icon="human"
                            backgroundColor={colors.brand.primary}
                        />
                    )}
                    {photo && (
                        <Avatar.Image
                            size={120}
                            source={{ uri: photo }}
                            backgroundColor={colors.brand.primary}
                        />
                    )}
                </TouchableOpacity>
                <Title>{user.email}</Title>
            </AvatarContainer>

            <List.Section>
                <SettingsItem
                    title="Favorites"
                    description="View your favorites"
                    left={(props) => (
                        <List.Icon
                            {...props}
                            color={colors.ui.error}
                            icon="heart"
                        />
                    )}
                    onPress={() => navigation.navigate("Favorites")}
                />
                <SettingsItem
                    title="Logout"
                    left={(props) => (
                        <List.Icon
                            {...props}
                            color={colors.ui.secondary}
                            icon="door"
                        />
                    )}
                    onPress={logout}
                />
            </List.Section>
        </SafeArea>
    );
}
