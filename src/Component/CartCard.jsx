import axios from "axios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {  UpdateCartarray, getCartData } from "../State/Slice/addSlice";
import { decrement } from "../State/Slice/Cartno";
import './CartCard.css';
function CartCard(props){
  const [editdata,seteditdata] = useState({})
  const [editQty ,seteditQty] = useState('');
  const cartarray = useSelector((state)=>{
    return state.cartarray;
});
  const dispatch = useDispatch();
async function Removeitem(name){
 
  await axios.delete(`https://meesho-backend-psi.vercel.app/Meesho/removeToCart/${localStorage.getItem('token')}/${name}`)
  const updatedCartArray = await axios.get(`https://meesho-backend-psi.vercel.app/Meesho/showCartItem/${localStorage.getItem('token')}`)
  dispatch(getCartData(updatedCartArray));
  dispatch(decrement(1))
  window.location.reload();
 
 
}
function edit(url,name,price,myid){
  seteditQty(props.Qty)
  document.getElementById(myid).style.display = 'flex'
  document.getElementById(`cartctn${myid}`).style.display = 'none'
  seteditdata({url:url,name:name,price:price});
}
async function editsave(myid){
const data =  await axios.put(`https://meesho-backend-psi.vercel.app/Meesho/updateToCart/${localStorage.getItem('token')}?ProductName=${editdata.name}&Qty=${editQty}`);
  alert(data.data)
  window.location.reload()
  document.getElementById(`cartctn${myid}`).style.display = 'flex'
  document.getElementById(myid).style.display = 'none';
}
    return(
        <div className="allcart">
          <div className="editform" id={props.myid}>
             <div>
              <img className="editimage" src={editdata.url} alt="image" />
             </div>
             <div>
             <div>Name:{editdata.name}</div>
              <div>Price:{editdata.price}</div>
              <div>Qty: <input type="text" value={editQty} onChange={(e)=>seteditQty(e.target.value)}  /></div>
              <button className="editsave" onClick={()=>editsave(props.myid)}>Save</button>
             </div>
            
          </div>
        <div className="cartctn" id={`cartctn${props.myid}`}>
          <div className="cartsection">
        <img src={props.url} alt="" className="cartimage"/>
        <div className="carttext">
          <div className="cartitem">{props.name}</div>
          <div className="cartitem">₹{props.price}&nbsp; &nbsp;Qty:{props.Qty}</div>
         
          <div className="cartitem">All issue easy returns allowed</div>
          
          <div className="removebtn" onClick={()=>Removeitem(props.name)}><i className="fa-solid fa-xmark"></i>Remove</div>
        </div>
        </div>
        <div className="edit" onClick={()=>edit(props.url,props.name,props.price,props.myid)}>Edit</div>
      </div>
     
      </div>
    )
}
export default CartCard;