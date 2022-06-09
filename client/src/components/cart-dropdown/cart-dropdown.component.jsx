import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

function CartDropdown() {
  const navigate = useNavigate()
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        )) : 
        <span className="empty-message" >Your Cart is Empty</span>
        }
      </div>
      <CustomButton onClick={()=>{navigate("/checkout");
    dispatch(toggleCartHidden())}} >GO TO CHECKOUT</CustomButton>
    </div>
  );
}


export default CartDropdown;
