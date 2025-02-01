import React from 'react'
import ShopSection from '../components/shopsection'
import Offer from '../components/offer'
import Footer from '../components/footer'
import Product from '../components/product'


const Blog = () => {
  return (
    <div>
    <ShopSection 
    heading="Blog"
    subheading='Home Blog'/>
<Product/>


     <Offer/> 
     <Footer/>


</div>
  
    
  )
}

export default Blog