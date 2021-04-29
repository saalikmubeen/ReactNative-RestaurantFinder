import React, { useState } from "react";
import { Title } from "react-native-paper";
import {
    Background,
    Container,
    Cover,
    Spacer,
    StyledButton,
    StyledInput,
} from "../components/AuthStyles";

export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <Background>
            <Cover />
            <Title>Restaurant Finder</Title>
            <Spacer />
            <Container>
                <StyledInput
                    label="E-mail"
                    value={email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(text) => setEmail(text)}
                />
                <Spacer />
                <StyledInput
                    label="Password"
                    value={password}
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={(text) => setPassword(text)}
                />
                <Spacer />
                <StyledInput
                    label="Confirm Password"
                    value={confirmPassword}
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={(text) => setConfirmPassword(text)}
                />
                <Spacer />

                <StyledButton icon="email" mode="contained" onPress={() => {}}>
                    Register
                </StyledButton>
            </Container>
            <Spacer />
            <StyledButton mode="contained" onPress={() => navigation.goBack()}>
                Back
            </StyledButton>
        </Background>
    );
}
