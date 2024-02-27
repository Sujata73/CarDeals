import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Home/Hero/Hero'
import Feature from '../components/Home/feature/Feature' 
import WhyUs from '../components/Home/WhyUs/WhyUs';
import CarNews from '../components/Home/News/carNews';

import OurMission from '../components/Home/Mission/ourMission';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
  
       <Navbar/>
       <Hero/>
       <Feature/>
     <WhyUs/>
  <OurMission/>
  <CarNews/>
  <Footer/>
 
    </div>
  )
}

export default Home