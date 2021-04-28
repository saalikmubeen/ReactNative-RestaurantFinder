import React, { useEffect, useState, createContext } from "react";

import fetchRestaurants from "../mockApi/api/restaurantsApi";

export const RestaurantsContext = createContext();

export const RestaurantsProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRestaurants()
            .then((data) => {
                setRestaurants(data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    }, []);

    return (
        <RestaurantsContext.Provider value={{ restaurants, loading }}>
            {children}
        </RestaurantsContext.Provider>
    );
};
