import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import "./Authentication.css";

const stripePromise = loadStripe("pk_test_51SJscYBNiAboMYUIEhecayyZAaL1rTp7l8eyk8t1HKy8xTHIixd7VM15FeSuwAsVKRhaRHmOD4iCRtynAh7FDLM0008rUBEQDb");

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    // Ask backend to create PaymentIntent
    const res = await fetch("http://localhost:4242/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 999 }), // $9.99 → 999 cents
    });
    const { clientSecret } = await res.json();

    // Confirm payment on client side
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (error) {
      console.error(error);
      alert("Payment failed!");
    } else if (paymentIntent.status === "succeeded") {
      alert("Payment successful! 🎉 You are now Premium!");
      navigate("/home");
    }
  };


  return (
    <div className="auth-container">
      <header className="navbar">
        <h1>DEV@Deakin</h1>
        <div className="nav-links">
          <span onClick={() => navigate("/home")}>Home</span>
          <span onClick={() => navigate("/post")}>Post</span>
          <span onClick={() => navigate("/plans")}>Plans</span>
          <span onClick={() => navigate("/login")}>Logout</span>
        </div>
      </header>

      <div className="form-box">
        <h2>Premium Payment</h2>
        <form onSubmit={handleSubmit}>
          <label>Card Information</label>
          <div className="card-element-box">
            <CardElement />
          </div>
          <button type="submit" disabled={!stripe} className="btn-primary">
            Pay $9.99
          </button>
        </form>
      </div>
    </div>
  );
}

function Payment() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
}

export default Payment;
