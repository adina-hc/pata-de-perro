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
import CardDetails from "./../components/elements/CardDetails";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            <CardDetails
              title={currentActivity.name}
              img={`/images/${currentActivity.image}`}
              description={currentActivity.description}
              price={`$ ${currentActivity.price}.00 USD`}
            />
            <>
              <AddItem onClick={addToCart}>
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  size="sm"
                  style={{ color: "white" }}
                />{" "}
                Add to Cart
              </AddItem>
              <RemoveItem
                disabled={!cart.find((p) => p._id === currentActivity._id)}
                onClick={removeFromCart}
              >
                <FontAwesomeIcon
                  icon={faMinusCircle}
                  size="sm"
                  style={{ color: "white" }}
                />{" "}
                Remove from Cart
              </RemoveItem>
              <br />
            </>
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
`;
const AddItem = styled.button`
  display: inline;
  width: 40%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #a2ccb6;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  position: relative;
  bottom: 40px;
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

const RemoveItem = styled.button`
  display: inline;
  width: 40%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #cca2a2;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  position: relative;
  bottom: 40px;
  left: 60px;
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

const StyledContainer = styled.div`
  max-width: 400px;
  width: 100%;
  margin: auto;
  @media (max-width: 650px) {
    max-width: 200px;
  }
`;
