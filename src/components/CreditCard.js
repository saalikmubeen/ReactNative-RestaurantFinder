import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { requestToken } from "../stripe";

export default function CreditCard({ name, setToken, onError }) {
    const handleChange = async (form) => {
        const status = Object.values(form.status);
        if (status.includes("incomplete")) {
            console.log("Error");
            return;
        }

        const { cvc, expiry, number } = form.values;
        const [month, year] = expiry.split("/");

        const card = {
            number: number,
            exp_month: month,
            exp_year: year,
            cvc: cvc,
            name: name,
        };

        try {
            const cardData = await requestToken(card);
            setToken(cardData.id);
        } catch (err) {
            onError();
        }
    };
    return <LiteCreditCardInput onChange={handleChange} />;
}
