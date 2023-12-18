import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectCount } from "../State/Slice/Cartno";
import axios from "axios";
import './Navbar.css'
function Navbar() {
    const count = useSelector((state)=>{
        return state.counter;
    });
   async function CreateAccount(){
    let PhoneNo = prompt('Please enter your phone number:');
   const data = await axios.post('https://purple-journalist-dmoxo.pwskills.app:5000/Meesho/signup',{PhoneNo:PhoneNo},{ headers: {
    'Content-Type': 'application/x-www-form-urlencoded', // Set the content type as needed
    // Add any other headers if necessary
  },})
 
   localStorage.setItem('token',data.data.data)
   alert(data.data.response)
   window.location.reload();
    }

    return (
        <>
            <nav className="navbar">
                <Link to='/'> <div className="logo">meesho</div></Link>

                <div className="searchctn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Try Saree,Kurti or Search by Product Code" className="search" />
                </div>

                <div className="inner-nav">
                    <div className="item">Download App</div>
                    <div className="item-seperate">|</div>
                    <div className="item">Become a Supplier</div>
                    <div className="item-seperate">|</div>
                    <div className="item"><Link to= '/myorder'>MyOrder</Link></div>
                    <div className="item-seperate">|</div>
                </div>
                <div className="profile_cart">
                    <div className="profile" onClick={CreateAccount}><i className="fa-regular fa-user"></i><span className="pcitem">Create Account</span></div>
                    <Link to = '/cart'> <div className="cart">{count}<i className="fa-solid fa-cart-shopping"></i><span className="pcitem">Cart</span></div></Link>
                   
                </div>
            </nav>
            <div className="navcategory">
                <div className="ncategoryitem">Women Ethnic</div>
                <div className="ncategoryitem">Women Western</div>
                <div className="ncategoryitem">Men</div>
                <div className="ncategoryitem">Kids</div>
                <div className="ncategoryitem">Home & Kitchen</div>
                <div className="ncategoryitem">Beauty & Health</div>
                <div className="ncategoryitem">jewellery & Accessories</div>
                <div className="ncategoryitem">Bags & Footwear</div>
                <div className="ncategoryitem">Electronics</div>
            </div>
        </>
    )

}

export default Navbar;