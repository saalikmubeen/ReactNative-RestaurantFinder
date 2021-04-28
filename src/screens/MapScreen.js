import React, { useContext } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import MapView from "react-native-maps";
import { LocationContext } from "../contexts/LocationProvider";
import { RestaurantsContext } from "../contexts/RestaurantsProvider";
import MapSearchBar from "../components/MapSearchBar";
import Loading from "../components/Loading";

const MapContainer = styled.View`
    flex: 1;
`;

const Map = styled(MapView)`
    width: ${Dimensions.get("window").width}px;
    height: ${Dimensions.get("window").height}px;
`;

export default function MapScreen() {
    const { region, location, setLocation } = useContext(LocationContext);
    const { restaurants, loading } = useContext(RestaurantsContext);

    if (loading) {
        return <Loading />;
    }

    return (
        <MapContainer>
            <MapSearchBar location={location} setLocation={setLocation} />
            <Map region={region}>
                {restaurants.map((restaurant) => {
                    return (
                        <MapView.Marker
                            key={restaurant.placeId}
                            title={restaurant.name}
                            coordinate={{
                                latitude: restaurant.geometry.location.lat,
                                longitude: restaurant.geometry.location.lng,
                            }}
                        />
                    );
                })}
            </Map>
        </MapContainer>
    );
}
