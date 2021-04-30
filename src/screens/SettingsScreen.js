import React, { useContext } from "react";
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
    return (
        <SafeArea>
            <AvatarContainer>
                <Avatar.Icon
                    size={120}
                    icon="human"
                    backgroundColor="#2182BD"
                />
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
