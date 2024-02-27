import React from 'react'
import OurCard from './ourCard'
const Cars = () => {
    const carData=[
       
        {
            id:1,
            img:"/assets/car1.png",
            name:"Casillac Escalade",
            price:"22,440",
        },
        {
            id:2,
            img:"/assets/car2.png",
            name:"BMW 3 Series",
            price:"22,440",
        },
        {
            id:3,
            img:"/assets/car3.png",
            name:"Mercedes",
            price:"22,440",
        },
        {
            id:4,
            img:"/assets/car4.png",
            name:"BMW 7 Series",
            price:"22,440",
        },
        {
            id:5,
            img:"/assets/car5.png",
            name:"Mercedes-Benz",
            price:"22,440",
        },
        {
            id:6,
            img:"/assets/car6.png",
            name:"Ranze-Rover",
            price:"22,440",
        },
    ]
  return (
    <div className='py-32 md:mx-32 mx-5 '>
        <h1 className='font-bold text-4xl '>Our<span className='text-primary'>Cars</span></h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 '>
            {carData.map((item)=>
             <OurCard  key={item.id}
             img={item.img}
             name={item.name}
             price={item.price}

             />
            )}
        </div>
    </div>
  )
}

export default Cars