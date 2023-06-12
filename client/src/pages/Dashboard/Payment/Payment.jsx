import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../compoents/SectionTitle/SectionTitle";
import Checkoutform from "./Checkoutform";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [cart] = useCart()
    const total = cart.reduce(( sum, item) => sum + item.price, 0)
    const price = parseFloat(total.toFixed(2))
  return (
    <div>
      <SectionTitle subHeading="Process Your" heading="Payment"></SectionTitle>
      <h2 className="text-3xl text-center">Pay Now</h2>
      <Elements stripe={stripePromise}>
        <Checkoutform price={price}></Checkoutform>
      </Elements>
    </div>
  );
};

export default Payment;
