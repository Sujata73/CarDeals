import React from 'react'

const Hero = () => {
  return (
    <div className='bg-black text-white'>
        <div  className=' flex  flex-col  justify-center   h-screen  lg:flex-row  lg:items-center md:mx-32 mx-5 '>
            {/* content section here */}
            <div className='   text-justify  space-y-5'>
                <h1 className='font-bold text-4xl '>
                    Find Your Perfect Ride Today
                </h1>

                <p className='text-lg md:text-2xl'>0ver 100+ New Cars Available</p>
                <p className='lg:w-3/4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur quidem dolores nemo mollitia natus sunt suscipit adipisci unde, tempora doloribus soluta aliquid iste, perspiciatis quia omnis animi? Corporis, obcaecati sed?</p>
                <div className='flex  gap-5 '>
                    <button className='bg-primary p-2 rounded-md hover:bg-secondary transition duration-300 ease-in-out'>Explore More</button>
                    <button className='bg-primary p-2 rounded-md hover:bg-secondary'>See Cars</button>
                </div>
            </div>
            {/* img section here */}
           <div className='w-full lg:w-2/4'>
            <img src={require('../../../assets/img/hero.jpg')} />
            </div>

        </div>
    </div>
  )
}

export default Hero