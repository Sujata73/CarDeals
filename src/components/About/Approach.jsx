import React from 'react'

const Approach = () => {
  return (
    <div className='flex flex-col justify-center md:flex-row items-center gap-20 my-16 mx-5 lg:mx-32'>
     <div className='w-full md:w-2/4  space-y-5'><h1 className='text-4xl font-bold'>Our Approach</h1>
       <h2 className='font-semibold text-lg lg:text-2xl text-left' >
       Empower individuals to achieve sustainable mobility solutions and
          inspire a positive impact on the environment.
       </h2>
       <p className='text-sm lg:text-base text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi sequi ea eligendi qui non, consequatur rem laboriosam similique ratione unde quos id sit quas veniam molestias, aspernatur dolorum tempore quis.</p>
       <p className='text-sm lg:text-base text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia itaque quod maxime suscipit voluptatibus, consequuntur, amet pariatur provident accusantium animi repudiandae aut doloribus doloremque velit consequatur facere recusandae odio quia?</p>
       </div>   
       <div className='w-full md:w-2/4'>
        <img src={require('../../assets/img/approch.jpg')} className='rounded-lg'/>
       </div>
    </div>
  )
}

export default Approach