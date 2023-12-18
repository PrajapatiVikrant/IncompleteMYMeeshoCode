import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyOrder.css"
function MyOrder(){
    
    useEffect(()=>{
        getResponse();
    })
   async function getResponse(){
    while(1){
        const data = await axios.get(`https://purple-journalist-dmoxo.pwskills.app:5000/Meesho/sendOrderResponse/${localStorage.getItem('token')}`);
      
        if(data.data.Responses.Seen === true){
          document.getElementById('Seen').style.color = 'yellow';
        }
        if(data.data.Responses.Confirmation === true){
            document.getElementById('Confirm').style.color = 'yellow';
        }
        if(data.data.Responses.Ready === true){
            document.getElementById('Ready').style.color = 'yellow';
        }
        if(data.data.Responses.OutForDelivery === true){
            document.getElementById('Out').style.color = 'yellow';
        }
    }
    }
   return (
      <div className="orderStatus">
        <center>
        <div  id="Seen"><i class="fa-regular fa-eye"></i>Order Seen</div>
        <div>|</div>
        <div>|</div>
        <div>V</div>
        <div  id="Confirm"><i class="fa-solid fa-check"></i>Order Confirmation</div>
        <div>|</div>
        <div>|</div>
        <div>V</div>
        <div  id= "Ready" >Order Ready</div>
        <div>|</div>
        <div>|</div>
        <div>V</div>
        <div  id="Out"><i class="fa-solid fa-truck"></i>Order Out for delivery</div>
        </center>
      </div>
   )
}
export default MyOrder