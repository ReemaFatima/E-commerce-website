import React from 'react'

import Page2 from './components/page2';
import Page3 from './page3';
import Page4 from './page4';
import Card from './components/card';
import Page6 from './components/page6';
import Footer from './components/footer';
import Hero from './components/hero';

const page = () => {
  return (
    <div>
      <Hero/>
      <Page2/>
      
      <Page3/>
      <Page4/>
      <Card/>
    
     <Page6/>
      <Footer/>
      

    </div>
  );
};

export default page;
