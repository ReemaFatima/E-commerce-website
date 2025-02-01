import React from "react"
import ShopSection from "../components/shopsection"
import Offer from "../components/offer"
import Shoping from "../components/shoping"
import Footer from "../components/footer"


const Cart = () => {
    return (
      <div>
      <ShopSection 
      heading="Cart"
      subheading='Home Cart'/>

  
  <Shoping/>
       <Offer/> 
       <Footer/>
  
  
  </div>
    
      
    )
  }
  
  export default Cart