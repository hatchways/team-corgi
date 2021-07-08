const express = require("express");
const app = express();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const bodyParser = require("body-parser");
const cors = require("cors");
const { json, urlencoded } = express;
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.post("/payment", cors(), async (req, res) => {
    let {amount, id} = req.body
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "CAD",
            description: "pay for your sitter",
            payment_method: id,
            confirm: true
        })
        console.log("payment", payment)
        res.json({
            message: "payment successful",
            success: true
        })
    } catch (error) {
        console.log("Error", error)
        res.json({
            message: "payment unsuccessful",
            success: false
        })
    }
})