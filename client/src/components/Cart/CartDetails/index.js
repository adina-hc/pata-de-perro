import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CartDetailAddItem, CartDetailContainer, CartDetailDate, CartDetailDescription, CartDetailPhoto, CartDetailPrice, CartDetailRemoveItem, CartDetailSectionIMG, CartDetailSectionText, CartDetailTitle } from './CartDetailsElements';

const CartDetailsSection = ({
  title,
  date,
  description,
  img,
  price,
  addToCart,
  removeFromCart,
  cart,
  currentActivity
}) => (
  <CartDetailContainer>
    <CartDetailSectionIMG>
      <CartDetailPhoto src={img}/>
    </CartDetailSectionIMG>    
    <CartDetailSectionText>
      <CartDetailTitle>{title}</CartDetailTitle>
      <CartDetailDate>{date}</CartDetailDate>
      <CartDetailDescription>{description}</CartDetailDescription>
      <CartDetailPrice>{price}</CartDetailPrice>
      <CartDetailAddItem onClick={addToCart}>
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  size="sm"
                  style={{ color: "white" }}
                />{" "}
                Add to Cart
        </CartDetailAddItem>
        <CartDetailRemoveItem
                disabled={!cart.find((p) => p._id === currentActivity._id)}
                onClick={removeFromCart}
              >
                <FontAwesomeIcon
                  icon={faMinusCircle}
                  size="sm"
                  style={{ color: "white" }}
                />{" "}
                Remove from Cart
        </CartDetailRemoveItem>
    </CartDetailSectionText> 
  </CartDetailContainer>
)
export default CartDetailsSection