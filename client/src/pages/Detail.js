import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Cart from "../components/Cart";
import { useStoreContext } from "../utils/GlobalState";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_ACTIVITIES,
} from "../utils/actions";
import { QUERY_ACTIVITIES } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import styled from "styled-components";
import CartDetailsSection from "./../components/Cart/CartDetails";
import spinner from "../assets/spinner.gif";

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentActivity, setCurrentActivity] = useState({});

  const { loading, data } = useQuery(QUERY_ACTIVITIES);

  const { activities, cart } = state;

  useEffect(() => {
    // already in global store
    if (activities.length) {
      setCurrentActivity(activities.find((activity) => activity._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_ACTIVITIES,
        activities: data.activities,
      });

      data.activities.forEach((activity) => {
        idbPromise("activities", "put", activity);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise("activities", "get").then((indexedactivities) => {
        dispatch({
          type: UPDATE_ACTIVITIES,
          activities: indexedactivities,
        });
      });
    }
  }, [activities, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        activity: { ...currentActivity, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...currentActivity, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentActivity._id,
    });

    idbPromise("cart", "delete", { ...currentActivity });
  };

  return (
    <>
      {currentActivity && cart ? (
        <StyledRoot>
          <Link to="/activities" style={{ width: "100%" }}>
            ← Back to Activities
          </Link>
          <StyledContainer>
            <CartDetailsSection
              title={currentActivity.name}
              img={`/images/${currentActivity.image}`}
              description={currentActivity.description}
              price={`$ ${currentActivity.price}.00 USD`}
              addToCart ={addToCart}
              removeFromCart ={removeFromCart}
              cart={cart}
              currentActivity= {currentActivity}
            />
          </StyledContainer>
        </StyledRoot>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default Detail;
const StyledRoot = styled.div`
  padding: 10px 12px;
  @media (max-width: 569px) {
    height: 170vh; 
  }
`;

const StyledContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  margin-left: 15%;
  margin-top: 5%;
  @media (max-width: 650px) {
    max-width: 200px;
  }
  @media (max-width: 769px) {
    max-width: 800px;
    margin-left: 5%;
  }
`;
