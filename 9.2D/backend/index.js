import express from "express";
import Stripe from "stripe";
import cors from "cors";

const app = express();
const stripe = new Stripe("sk_test_51SJscYBNiAboMYUIBHr04ThvwUoOYwBTPum76AJGRWkem9NDBgI7bAC7PcHxo4BtaaoMDIUCcnXTmCaeKKnfVsyc00sA8j6MzA");

app.use(cors());
app.use(express.json());

// Create payment intent endpoint
app.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body; // amount in cents
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(4242, () => console.log("Stripe backend running on http://localhost:4242"));
