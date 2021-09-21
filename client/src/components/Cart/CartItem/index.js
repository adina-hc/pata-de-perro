import React from 'react';
import { useStoreContext } from "./../../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../../utils/actions";
import { idbPromise } from "../../../utils/helpers";
import { faMinusSquare} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CarItemContainer, CarItemDescriptionName, CarItemDescriptionQTY, CarItemDescriptionSpan, CarItemIMG, CarItemInput, CarItemWrapperDescription, CarItemWrapperIMG } from './CartItemElements';

const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    
    <CarItemContainer>
      <CarItemWrapperIMG>
        <CarItemIMG
          src={`/images/${item.image}`}
          alt={`${item.image}`}
        />
      </CarItemWrapperIMG>
      <CarItemWrapperDescription>
        <CarItemDescriptionName>{item.name}, ${item.price}</CarItemDescriptionName>
        <CarItemDescriptionQTY>
          <CarItemDescriptionSpan>Person(s): </CarItemDescriptionSpan>
          <CarItemInput
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
            style={{ textAlign: "center" }}
          />
            <FontAwesomeIcon icon={faMinusSquare}  size="lg" style={{ color: "red" }}  onClick={() => removeFromCart(item)}/> 
        </CarItemDescriptionQTY>
      </CarItemWrapperDescription>
    </CarItemContainer>
  );
}

export default CartItem;