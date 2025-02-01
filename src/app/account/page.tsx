import React from 'react'

import ShopSection from '../components/shopsection'
import Offer from '../components/offer'
import Footer from '../components/footer'
import Form from '../components/form'


const Account = () => {
  return (
    <div>
          <ShopSection 
          heading="Account"
     subheading='Home Account'/>

     <Form/>
    
  <Offer/>
  <Footer/>


    
      </div>

  )
}

export default Account