import React from 'react'
import ShopSection from '../components/shopsection'
import Billing from '../components/billing'
import Offer from '../components/offer'
import Footer from '../components/footer'

const Checkout = () => {
    return (
      <div>
      <ShopSection 
      heading="Checkout"
      subheading='Home Checkout'/>

  
<Billing/>
       <Offer/> 
       <Footer/>
  
  
  </div>
    
      
    )
  }
  
  export default Checkout