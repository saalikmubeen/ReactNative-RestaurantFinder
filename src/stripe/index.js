import stripeClient from "stripe-client";

const stripe = stripeClient(
    "pk_test_51H8hlaJw1IphkJ3MAWTSFrRAGHCMouXlpV9U7KBXZDucnorqLqqpaYmcFPlzSD7CRarJTvjkKcukzuKcCoqBOM2x00gncJONo0"
);

export const requestToken = (card) => stripe.createToken({ card });

const firebaseFunctionURL =
    "http://localhost:5001/react-native-restaurant-finder/us-central1/pay";

export const paymentRequest = (token, amount, name) => {
    return fetch(firebaseFunctionURL, {
        body: JSON.stringify({
            token,
            name,
            amount,
        }),
        method: "POST",
    }).then((res) => {
        if (res.status > 200) {
            return Promise.reject(
                "something went wrong processing your payment"
            );
        }
        return res.json();
    });
};
