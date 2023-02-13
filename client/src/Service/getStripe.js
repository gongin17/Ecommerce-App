import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe("pk_test_51HN1SDDnSY2xnLBJBLVpQ4bWKaMHt53n4RLac8i0ikSWvIZGGfjTbFpn7eAAoIwl7p8aWqYn6ER8VjvDfj5pgJxL00DEeyECfa");
  }

  return stripePromise;
}

export default getStripe;