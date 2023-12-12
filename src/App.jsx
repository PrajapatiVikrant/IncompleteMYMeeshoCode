import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import './App.css'
import Home from './Component/Home'
import Selectproduct from './Component/Selectproduct'
import { ChangeProductlist } from './State/Slice/Product'
import { ChangeProcuctCartArray,getCartData } from './State/Slice/addSlice'
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
   console.log('hello world')
  async function getdata(){
    console.log('app.jsx:-'+localStorage.getItem('token'))
    const cartdata = await axios.get(`https://purple-journalist-dmoxo.pwskills.app:5000/Meesho/showCartItem/${localStorage.getItem('token')}`)
    const data = await axios.get('https://purple-journalist-dmoxo.pwskills.app:5000/Meesho/ShowallProduct');
    console.log(data.data)
    dispatch(ChangeProductlist(data.data)); 
    dispatch(getCartData(cartdata.data));
   
   }
  
 
return (
  <>
 <Navbar/>
<Routes>
  <Route path='/' Component={Home}/>
  <Route path='/Select' Component={Selectproduct}/>
  <Route path='/cart' Component={Cartlist}/>
</Routes>
<Footer/>
  </>
)

}

export default App
