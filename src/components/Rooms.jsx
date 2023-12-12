import React from 'react'

const Rooms = () => {
    return (
        <div className='max-w-[1000px] h-[450px] mx-auto my-10 pt-12 px-4 bg-blue-200 lg:mb-[15%] md:mb-[35%] grid md:grid-cols-3 gap-2'>
            <div className='relative col-span-2 md:col-span-1 md:pt-12'>
                <p className='font-bold text-2xl'>Fine Interior Rooms</p>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, assumenda?</p>
            </div>
            <div className='grid grid-rows-2 grid-cols-2 col-span-2 gap-2'>
                <img
                    className='row-span-2 plan-img'
                    src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" />
                <img
                    className='plan-img'
                    src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="" />
                <img
                    className='plan-img'
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="" />
            </div>

        </div>
    )
}

export default Rooms