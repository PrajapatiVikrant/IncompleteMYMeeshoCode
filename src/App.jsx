import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import './App.css'
import Home from './Component/Home'
import MyOrder from './Component/MyOrder'
import Selectproduct from './Component/Selectproduct'
import { ChangeProductlist } from './State/Slice/Product'
import { ChangeProcuctCartArray,getCartData } from './State/Slice/addSlice'
import { getCartNo } from './State/Slice/Cartno'
import Cartlist from './Component/Cartlist'
import Footer from './Component/Footer'
import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import axios from 'axios'
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    getdata();
   })
 
  async function getdata(){
  
    const cartdata = await axios.get(`https://purple-journalist-dmoxo.pwskills.app:5000/Meesho/showCartItem/${localStorage.getItem('token')}`)
    const data = await axios.get('https://purple-journalist-dmoxo.pwskills.app:5000/Meesho/ShowallProduct');
  
    dispatch(ChangeProductlist(data.data)); 
    dispatch(getCartData(cartdata.data));
    dispatch(getCartNo(cartdata.data.length))
   
   }
  
 
return (
  <>
 <Navbar/>
<Routes>
  <Route path='/' Component={Home}/>
  <Route path='/Select' Component={Selectproduct}/>
  <Route path='/cart' Component={Cartlist}/>
  <Route path='/myorder' Component={MyOrder}/>
</Routes>
<Footer/>
  </>
)

}

export default App
