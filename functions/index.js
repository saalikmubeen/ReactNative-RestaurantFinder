const functions = require("firebase-functions");
const stripeClient = require("stripe")(functions.config().stripe.key);

// firebase functions:config:get
// firebase functions:config:set someService.key="API_KEY"
// firebase functions:config:unset someService
// firebase functions:config:get > .runtimeconfig.json

exports.pay = functions.https.onRequest((request, response) => {
    // functions.logger.info("Hello logs!", { structuredData: true });
    const body = JSON.parse(request.body);
    const { token, amount } = body;

    stripeClient.paymentIntents
        .create({
            amount,
            currency: "inr",
            payment_method_types: ["card"],
            description: "Testing stripe payment!",
            payment_method_data: {
                type: "card",
                card: {
                    token,
                },
            },
            confirm: true,
        })
        .then((paymentIntent) => {
            response.json(paymentIntent);
        })
        .catch((e) => {
            console.log(e);
            response.status(400);
            response.send(e);
        });
});
