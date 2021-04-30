import React from "react";
import { Title } from "react-native-paper";
import LottieView from "lottie-react-native";
import {
    AnimationWrapper,
    Background,
    Container,
    Cover,
    Spacer,
    StyledButton,
} from "../components/AuthStyles";

export default function HomeScreen({ navigation }) {
    return (
        <Background>
            <Cover />
            <AnimationWrapper>
                <LottieView
                    source={require("../../assets/watermelon.json")}
                    key="animation"
                    loop
                    autoPlay
                    resizeMode="cover"
                />
            </AnimationWrapper>
            <Title>Restaurants Finder</Title>
            <Spacer />
            <Container>
                <StyledButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => navigation.navigate("Login")}
                >
                    Login
                </StyledButton>
                <Spacer />
                <StyledButton
                    icon="email"
                    mode="contained"
                    onPress={() => navigation.navigate("Register")}
                >
                    Register
                </StyledButton>
            </Container>
        </Background>
    );
}
