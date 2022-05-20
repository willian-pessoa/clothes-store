import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

function CartDropdown({ cartItems, dispatch }) {
  let navigate = useNavigate()

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

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
