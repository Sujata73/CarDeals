import React from 'react'

const OurMission = () => {
  return (
    <div className=' my-10'>
        <div>
        <h1 className='font-bold text-4xl text-center'>Our <span className='text-primary'>Mission</span></h1>
        </div>
        <div className='flex flex-col justify-center md:flex-row items-center gap-5 mt-8  mx-5 lg::mx-32'>
        <div className='w-full md:w-2/4'>
            <img src={require('../../../assets/img/mission.jpg')} className='rounded-lg'/>
        </div>
        <div className='w-full md:w-2/4 space-y-4  text-justify '>
            <h1 className='font-bold text-primary text-lg lg:text-3xl'>To create a Comunity Where every journey is extraordinary</h1>
            <h2 className='font-semibold text-lg lg:text-2xl'>
            Empower individuals to achieve sustainable mobility solutions and
            inspire a positive impact on the environment.
            </h2>
            <p className='text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo officia voluptatem neque incidunt veritatis culpa rem blanditiis debitis unde rerum magni quam vero nesciunt totam, maxime accusantium natus quos nam!</p>
            <p className='text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam doloribus omnis qui placeat neque eveniet expedita eos at. Harum sit ex quas praesentium rem tempore consectetur corporis animi modi quisquam?</p>
        </div>
        </div>
    </div>
  )
}

export default OurMission