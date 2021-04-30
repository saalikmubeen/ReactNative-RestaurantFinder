import { Button, TextInput, Text } from "react-native-paper";
import styled from "styled-components/native";
import { colors } from "../theme/colors";

export const Background = styled.ImageBackground.attrs({
    source: require("../../assets/home_bg.jpg"),
})`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Cover = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
`;

export const Container = styled.View`
    background-color: rgba(255, 255, 255, 0.7);
    padding: ${(props) => props.theme.space[4]};
    margin-top: ${(props) => props.theme.space[2]};
`;

export const StyledButton = styled(Button).attrs({
    color: colors.brand.primary,
})`
    padding: ${(props) => props.theme.space[2]};
`;

export const StyledInput = styled(TextInput)`
    width: 300px;
`;

export const Title = styled(Text)`
    font-size: 30px;
`;

export const ErrorContainer = styled.View`
    max-width: 300px;
    align-items: center;
    align-self: center;
    margin-top: ${(props) => props.theme.space[2]};
    margin-bottom: ${(props) => props.theme.space[2]};
`;

export const Spacer = styled.View`
    margin-bottom: ${(props) => props.theme.space[3]};
`;

export const Error = styled(Text)`
    color: ${(props) => props.theme.colors.text.error};
    font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const AnimationWrapper = styled.View`
    width: 100%;
    height: 40%;
    position: absolute;
    top: 30px;
    padding: ${(props) => props.theme.space[2]};
`;
