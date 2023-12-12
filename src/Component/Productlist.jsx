import React, { useEffect } from "react";
import Product from "./Product";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import {  selectList, ChangeProductlist } from "../State/Slice/Product";
import { useState } from "react";
import "./Productlist.css"

function Productlist(){
  const dispatch = useDispatch();

  const [product,setproduct] = useState([]);
  
   const data =  useSelector((state)=>{
    return state.productlist;
})
  console.log(data)
   
    
    return (
    <div className="Productlistctn">
        {data.map((elem,ind)=>{
            return <Product url = {elem.url} name = {elem.Name} price = {elem.price}  />
        })}
    </div>
    )
}
export default Productlist;