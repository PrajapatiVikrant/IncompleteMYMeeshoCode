import axios from "axios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {  UpdateCartarray, getCartData } from "../State/Slice/addSlice";
import { decrement } from "../State/Slice/Cartno";
import './CartCard.css';
function CartCard(props){
  console.log(props)
  const cartarray = useSelector((state)=>{
    return state.cartarray;
});
  const dispatch = useDispatch();
async function Removeitem(name){
 
  await axios.delete(`https://purple-journalist-dmoxo.pwskills.app:5000/Meesho/removeToCart/${localStorage.getItem('token')}/${name}`)
  const updatedCartArray = await axios.get(`https://purple-journalist-dmoxo.pwskills.app:5000/Meesho/showCartItem/${localStorage.getItem('token')}`)
  dispatch(getCartData(updatedCartArray));
  dispatch(decrement(1))
 
 
}
    return(
        <div className="allcart">
        <div className="cartctn">
          <div className="cartsection">
        <img src={props.url} alt="" className="cartimage"/>
        <div className="carttext">
          <div className="cartitem">{props.name}</div>
          <div className="cartitem">₹{props.price}</div>
          <div className="cartitem">All issue easy returns allowed</div>
          
          <div className="removebtn" onClick={()=>Removeitem(props.name)}><i className="fa-solid fa-xmark"></i>Remove</div>
        </div>
        </div>
        <div className="edit">Edit</div>
      </div>
     
      </div>
    )
}
export default CartCard;