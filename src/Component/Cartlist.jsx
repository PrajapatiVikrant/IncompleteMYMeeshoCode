import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";

function Cartlist() {
    const [totalorder,settotalorder] = useState(0);
    const cartarray = useSelector((state)=>{
        return state.cartarray;
   });
   console.log(cartarray)
   useEffect(()=>{
    let total = 0;
       for(let i = 0;i<cartarray.length;i++){
          total += cartarray[i].Price;
       }
       settotalorder(total);
   })
   
    return (
        <>
       
       <div className="allcart">
       
        <div>
        {cartarray.map((elem,ind)=>{
            return <CartCard url = {elem.Url} name = {elem.ProductName} price = {elem.Price}/>
        })}
        </div>
        <div>
        <div className="totalpricectn">
        <div className="priceheading">Price Details</div>
        <div className="pricetext">
            <div className="decoprice">Total Product Price</div>
            <div>+{totalorder}</div>
        </div>
        <hr />
        <div className="priceheading">
            <div>Order Total</div>
            <div>+{totalorder}</div>
        </div>
        <br />
        <div className="continuebtnctn">
        <div className="btntext">Clicking on ‘Continue’ will not deduct any money</div>
        <div className="continuebtn">Continue</div>
        </div>
        <img src="https://images.meesho.com/images/marketing/1588578650850.webp" alt="image" width='350px' />
        
      </div>
        </div>
       
        </div>
      
       
        </>
     )
}
export default Cartlist;