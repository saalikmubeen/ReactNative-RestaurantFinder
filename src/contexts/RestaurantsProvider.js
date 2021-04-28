import React, { useEffect, useState, createContext, useContext } from "react";

import fetchRestaurants from "../mockApi/api/restaurantsApi";
import { LocationContext } from "./LocationProvider";

export const RestaurantsContext = createContext();

export const RestaurantsProvider = ({ children }) => {
    const { coords } = useContext(LocationContext);
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadRestaurants = async (location) => {
        try {
            setLoading(true);
            const data = await fetchRestaurants(location);
            setRestaurants(data);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    };

    useEffect(() => {
        if (coords) {
            loadRestaurants(coords);
        }
    }, [coords]);

    return (
        <RestaurantsContext.Provider value={{ restaurants, loading }}>
            {children}
        </RestaurantsContext.Provider>
    );
};
