import React from 'react'
import Approach from './Approach'
import Vision from './Vision'
import Footer from '../Footer'
const Aboutpage = () => {
  return (
    <div className='pt-40'>
        <div>
            <h1 className='font-bold text-4xl '>About<span className='text-primary'>Us</span></h1>
        </div>
        <Vision/>
        <Approach/>
        <Footer/>
    </div>
   
  )
}

export default Aboutpage