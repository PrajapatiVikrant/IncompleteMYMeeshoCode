import React from 'react'
import '../App.css'
import Filterlist from './Filterlist'
import Main from './Main'
import Navbar from './Navbar'
import Productlist from './Productlist'


function Home() {
  
return (
  <>
  
  <Main/>
  <div className="showproduct">
  <Filterlist/>
  <Productlist/>
  </div>
 
 

 
  </>
)

}

export default Home;
