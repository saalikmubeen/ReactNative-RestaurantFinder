import React, { useContext, useState, useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components";
import SafeArea from "../components/SafeArea";
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
            <AvatarContainer>
                <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
                    {!photo && (
                        <Avatar.Icon
                            size={120}
                            icon="human"
                            backgroundColor="#2182BD"
                        />
                    )}
                    {photo && (
                        <Avatar.Image
                            size={120}
                            source={{ uri: photo }}
                            backgroundColor="#2182BD"
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
                        <List.Icon {...props} color="black" icon="heart" />
                    )}
                    onPress={() => navigation.navigate("Favorites")}
                />
                <SettingsItem
                    title="Logout"
                    left={(props) => (
                        <List.Icon {...props} color="black" icon="door" />
                    )}
                    onPress={logout}
                />
            </List.Section>
        </SafeArea>
    );
}
