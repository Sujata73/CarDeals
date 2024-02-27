import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeatureCard from './FeatureCard';

const Feature = () => {
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
    const settings={
        dots:false,
        infinite:true,
        slidesToShow:3,
        slidesToScroll:1,
        autoplay:true,
        speed:2000,
        autoplaySpeed:2000,
        cssEase:"linear",
        arrows:false,
        responsive:[
            {
                breakpoint:1023,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:3,
                    infinite:true,
                    dots:true,
                }
            },
            {
                breakpoint:768,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:2,
             initialSlide:2
                  
                }
            },
            {
                breakpoint:480,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                   initialSlide:1,
                  
                }
            }
        ]
    }
    
  return (
    <div className='mt-32'>
        <h1 className='font-bold text-4xl text-center'>Featured <span className='text-primary'>Cars</span></h1>
        <p className='text-center mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus neque id doloribus rem error at ipsam hic</p>
        <div className='mt-8'>
            <Slider {...settings}>
              {carData.map((item)=>
        <FeatureCard key={item.id}
        img={item.img}
       name={item.name}
        price={item.price}
        />
              )}
            </Slider>
        </div>
    </div>
  )
}

export default Feature