import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../compoents/SectionTitle/SectionTitle";
import Checkoutform from "./Checkoutform";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  return (
    <div>
      <SectionTitle subHeading="Process Your" heading="Payment"></SectionTitle>
      <h2 className="text-3xl">Pay Now</h2>
      <Elements stripe={stripePromise}>
        <Checkoutform></Checkoutform>
      </Elements>
    </div>
  );
};

export default Payment;
