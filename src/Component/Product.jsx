import React from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import "./Product.css";
import axios from "axios";
import { ChangeProcuctObject } from "../State/Slice/CartProduct";
function Product(props){
    const navigate = useNavigate();
    const dispatch = useDispatch();
  async function Selectedproduct(name){
        console.log(name)
        const Productdata = await axios.get('https://purple-journalist-dmoxo.pwskills.app:5000/Meesho/showallProduct');
        let arr = Productdata.data.filter((elem,ind)=>{
            return elem.Name === name;
        })
        dispatch(ChangeProcuctObject(arr))
        navigate('/Select')
    }
    return(
        <div className="productCard" onClick={()=>Selectedproduct(props.name)}>
            
            <img src={props.url} alt="productImage" width="330px" height="250px" />
            <div className="productname">{props.name.slice(0,24)}...</div><br />
            <div className="productprice">₹{props.price}<span className="ownword">ownword</span></div><br />
            <div className="delivery">Free delivery</div>
           
        </div>
    )
}
export default Product;