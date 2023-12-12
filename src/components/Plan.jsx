import React from 'react'

const Plan = () => {
    return (
        <div className='max-w-[1200px] m-auto py-12 px-2 grid md:grid-cols-2 gap-6'>
            <div className='grid grid-cols-2 grid-rows-6 h-[600px]'>
                <img
                    className='row-span-3 plan-img'
                    src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80" alt="" />
                <img
                    className='row-span-2 plan-img'
                    src="https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" />
                <img
                    className='row-span-2 plan-img'
                    src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80" alt="" />
                <img
                    className='row-span-3 plan-img'
                    src="https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
                <img
                    className='row-span-2 plan-img'
                    src="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80" alt="" />
            </div>
            <div className='flex flex-col h-full justify-center'>
                <h4 className='font-bold text-4xl md:text-5xl'>Plan Your Next Trip</h4>
                <p className='py-6 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ratione.</p>
                <p className='pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui provident dolores voluptates repellendus illum hic. Hic tempora laboriosam pariatur suscipit.</p>
                <div>
                    <button className='border-black m-4 hover:shadow-xl'>Learn More</button>
                    <button className='bg-black text-white m-4 hover:shadow-2xl'>Book Your Trip</button>
                </div>
            </div>
        </div>
    )
}

export default Plan