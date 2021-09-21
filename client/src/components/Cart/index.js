import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from './CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import { faWindowClose,faCartPlus,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  CartCloseIcon, CartContainer, CartH2, CartH3, CartIcon, CartLink, CartWrapper, CartCheckoutButton, CartLoginButton, CartDescription, CartDescriptionStrong } from './CartElements';

const stripePromise = loadStripe('pk_test_51JNPfPLFMHcbQLphe2y9n01spBjlswS1klvGB4RtPRYt7LQiya7Uic10p9yig3jkceT2xR3JMWwDTIfFpIUTmOe3002iV7nOEc');

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, activities: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const activityIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        activityIds.push(item._id);
      }
    });

    getCheckout({
      variables: { activities: activityIds },
    });
  }

  if (!state.cartOpen) {
    return (
      <CartIcon onClick={toggleCart}>
        <FontAwesomeIcon icon={faCartPlus}  size="sm" style={{ color: "white" }}/>
      </CartIcon>
    );
  }

  return (
    <CartContainer >
      <CartCloseIcon onClick={toggleCart}>
        <FontAwesomeIcon icon={faWindowClose}  size="lg" style={{ color: "red" }}/>
      </CartCloseIcon>
      <CartH2>Activity Cart</CartH2>
      {state.cart.length ? (
        <CartWrapper>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <CartDescription>
            <CartDescriptionStrong>Total: ${calculateTotal()}</CartDescriptionStrong>

            {Auth.loggedIn() ? (
              <CartCheckoutButton onClick={submitCheckout}><FontAwesomeIcon icon={faCheckCircle}  size="lg" style={{ color: "white" }}/> Checkout</CartCheckoutButton>
            ) : (
              
            <CartLink to="/login"><CartLoginButton>Login</CartLoginButton></CartLink>
            )}
          </CartDescription>
        </CartWrapper>
      ) : (
        <CartH3 >
          <CartLink to="/activities">Add your travel activities!</CartLink>
        </CartH3>
      )}
    </CartContainer>
  );
};

export default Cart;