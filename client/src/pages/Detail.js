import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_ACTIVITIES,
} from '../utils/actions';
import { QUERY_ACTIVITIES } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';

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
        idbPromise('activities', 'put', activity);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('activities', 'get').then((indexedactivities) => {
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
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        activity: { ...currentActivity, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentActivity, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentActivity._id,
    });

    idbPromise('cart', 'delete', { ...currentActivity });
  };

  return (
    <>
      {currentActivity && cart ? (
        <div className="container my-1">
          <Link to="/">← Back to Activities</Link>

          <h2>{currentActivity.name}</h2>

          <p>{currentActivity.description}</p>

          <p>
            <strong>Price:</strong>${currentActivity.price}{' '}
            <button onClick={addToCart}>Add to Cart</button>
            <button
              disabled={!cart.find((p) => p._id === currentActivity._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </p>

          <img
            src={`/images/${currentActivity.image}`}
            alt={currentActivity.name}
          />
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default Detail;
