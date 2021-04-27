import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";
import star from "../../assets/star";
import open from "../../assets/open";

const StyledCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    margin-bottom: ${(props) => props.theme.space[3]};
`;

const CardImage = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
    /* padding: ${(props) => props.theme.space[3]}; */
    color: ${(props) =>
        props.isClosed
            ? props.theme.colors.ui.error
            : props.theme.colors.ui.primary};
`;

const Section = styled.View`
    align-items: center;
    flex-direction: row;
`;

const SectionEnd = styled.View`
    align-items: center;
    flex: 1;
    justify-content: space-around;
    flex-direction: row;
`;

const Rating = styled.View`
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[2]};
`;

const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Icon = styled.Image`
    height: 15px;
    width: 15px;
`;

export default function RestaurantCard({ restaurant = {} }) {
    const {
        name = "Some Restaurant",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
            "https://media.istockphoto.com/photos/delicious-meal-on-a-black-plate-top-view-copy-space-picture-id1165399909?s=612x612",
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
    } = restaurant;

    const ratingArray = Array(Math.floor(rating)).fill(0);

    return (
        <StyledCard elevation={5}>
            <CardImage source={{ uri: photos[0] }} />
            <Info>
                <Title>{name}</Title>
                <Section>
                    <Rating>
                        {ratingArray.map((_, idx) => (
                            <SvgXml
                                xml={star}
                                width={20}
                                height={20}
                                key={idx}
                            />
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Title isClosed>CLOSED TEMPORARILY</Title>
                        )}

                        {isOpenNow && (
                            <SvgXml xml={open} width={20} height={20} />
                        )}
                        <Icon source={{ uri: icon }} />
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </StyledCard>
    );
}
