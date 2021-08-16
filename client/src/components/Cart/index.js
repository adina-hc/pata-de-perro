import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import { faWindowClose,faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

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
      <CarClosed onClick={toggleCart}>
        <FontAwesomeIcon icon={faCartPlus}  size="sm" style={{ color: "white" }}/>
      </CarClosed>
    );
  }

  return (
    <CarContainer >
      <div className="close" onClick={toggleCart}>
        <FontAwesomeIcon icon={faWindowClose}  size="lg" style={{ color: "red" }}/>
      </div>
      <h2>Activity Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              
            <Link to="/login"><LoginButton>Login</LoginButton></Link>
            )}
          </div>
        </div>
      ) : (
        <h3 >
          <Link to="/activities">Add your travel activities!</Link>
        </h3>
      )}
    </CarContainer>
  );
};

export default Cart;

export const CarClosed = styled.div`
  
  position: fixed;
  top: 2%;
  right: 1%;
  font-size: 2rem;
  cursor: pointer;
  background-color: #03434c;
  border-radius: 50%;
  padding: .25rem;
  width: 50px;
  height: 50px;

  &:hover {
    transform: rotate(18deg);
    background-color: #9fa90c;
  }

`;
export const CarContainer = styled.div`
  position: fixed;
  top: 10%;
  right: 0;
  min-width: 20%;
  max-width: 30%;
  max-height: 60%;
  background-color: #fff4f4;
  overflow: auto;
  padding: .5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  border-bottom-left-radius: .5rem;
  border-top-left-radius: .5rem;
  border-top-right-radius: .5rem;

  h2 {
    font-family: "Permanent Marker",cursive;
    font-size: 1.5rem;
    border-bottom: 1px solid var(--dark);
    padding-bottom: .5rem;
    margin: 1rem 0;
    text-align:center;
  }
  h3 {
    width:100%;
    text-align:center;
    a{
      font-family: "Permanent Marker",cursive;
      font-size: 1.0rem;
      color: var(--dark);
      cursor:pointer;
      &:hover {
        transform: rotate(8deg);
        color: #67840e;
        text-decoration:underline;
      }
    }
  }
  
  .close {
    position: absolute;
    top: .5rem;
    right: .5rem;
    cursor: pointer;
    color: var(--tertiary);

    &:hover {
      text-decoration: underline;
    }
  }
  img {
    width: 70px;
    margin-right: 1rem;
  }

  input {
    width: 50px;
    padding: 0;
    margin: 0 .5rem 1rem 0;
  }

@media screen and (max-width: 768px) {
    position: relative;
    max-width: 100%;
    max-height: auto;
    box-shadow: none;
    background-color: white;
}
`;


export const LoginButton = styled.button`
    -webkit-appearance: none;
    background: -webkit-gradient(
      to right,
      #a2ccb6 0%,
      #fceeb5 50%,
      #ee786e 100%
    );
    background: linear-gradient(
      to right,
      #a2ccb6 0%,
      #fceeb5 50%,
      #ee786e 100%
    );

    margin: 0.2rem;
    background-size: 500%;
    border: none;
    border-radius: 5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    color: #fff;
    cursor: pointer;
    font: 1.2em Raleway, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 30px;
    letter-spacing: 0.05em;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 5rem;
    &:hover {
      animation-name: gradient;
      -webkit-animation-name: gradient;
      animation-duration: 3s;
      -webkit-animation-duration: s;
      animation-iteration-count: 1;
      -webkit-animation-iteration-count: 1;
      animation-fill-mode: forwards;
      -webkit-animation-fill-mode: forwards;
    }

@media screen and (max-width: 768px) {  
  width: 10rem;
  height: 40px;

}
`;