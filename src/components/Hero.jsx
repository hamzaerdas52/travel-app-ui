import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <img className='top-0 left-0 w-full h-screen object-cover' src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg" alt="" />
        <div className='bg-black/40 absolute w-full h-screen top-0 left-0'/>
        <div className='absolute w-full h-full top-0 left-0 text-white flex flex-col justify-center'>
            <div className='md:left-[10%] max-w-[1000px] m-auto absolute p-4'>
                <p>All Inclusive</p>
                <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches & Getaways</h1>
                <p className='max-w-[700px] text-xl py-4 drop-shadow-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero dolorem reprehenderit ut, repudiandae nemo ullam soluta sequi fugit voluptas voluptate.</p>
                <button className='bg-white text-black'>Reserve Now</button>
            </div>
        </div>
    </div>
  )
}

export default Hero