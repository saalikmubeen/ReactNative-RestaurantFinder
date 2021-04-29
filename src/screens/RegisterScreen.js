import React, { useContext, useState } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import {
    Background,
    Container,
    Cover,
    Error,
    ErrorContainer,
    Spacer,
    StyledButton,
    StyledInput,
    Title,
} from "../components/AuthStyles";
import { AuthContext } from "../contexts/AuthProvider";

export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { error, loading, register } = useContext(AuthContext);

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
                {error && (
                    <ErrorContainer>
                        <Error>{error}</Error>
                    </ErrorContainer>
                )}
                <Spacer />

                {loading ? (
                    <ActivityIndicator
                        animating={true}
                        color={Colors.blue300}
                    />
                ) : (
                    <StyledButton
                        icon="email"
                        mode="contained"
                        onPress={() => {
                            register(email, password, confirmPassword);
                        }}
                    >
                        Register
                    </StyledButton>
                )}
            </Container>
            <Spacer />
            <StyledButton mode="contained" onPress={() => navigation.goBack()}>
                Back
            </StyledButton>
        </Background>
    );
}
