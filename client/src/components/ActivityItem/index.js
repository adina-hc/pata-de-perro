import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import styled from "styled-components";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFooter,
  CardFieldset,
  CardOptionsItem,
  CardOptions,
  CardOptionsNote,
  CardButton,
  CardOptionsNoteHeader
} from "./Card";  

function ActivityItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    quantity,
    description
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        activity: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }
 
  return (
<CardWrapper>
        <CardHeader>
          <CardHeading>    
          <Link to={`/activity/${_id}`}>
            <img
              alt={name}
              src={`/images/${image}`}
            />
            </Link>
        </CardHeading>
        </CardHeader>
        <CardBody>

          <CardFieldset>
            <CardOptions>
              <CardOptionsItem>
                <CardOptionsNoteHeader>{name}</CardOptionsNoteHeader>
              </CardOptionsItem>
              <CardOptionsItem>
                <CardOptionsNote>{description}</CardOptionsNote>
              </CardOptionsItem>
              <CardOptionsItem>
                <CardOptionsNote>{quantity} {pluralize("reservation", quantity)} left</CardOptionsNote>
              </CardOptionsItem>
            </CardOptions>
          </CardFieldset>
        </CardBody>
        <CardFooter>
          <CardButton type="button"  onClick={addToCart}>Add to Cart</CardButton>
        </CardFooter>
      </CardWrapper>
    // <div className="card px-1 py-1">
    //   <Link to={`/activity/${_id}`}>
    //     <img
    //       alt={name}
    //       src={`/images/${image}`}
    //     />
    //     <p>{name}</p>
    //   </Link>
    //   <div>
    //     <div>{quantity} {pluralize("item", quantity)} in stock</div>
    //     <span>${price}</span>
    //   </div>
    //   <button>Add to cart</button>
    // </div>
  );
}

export default ActivityItem;

