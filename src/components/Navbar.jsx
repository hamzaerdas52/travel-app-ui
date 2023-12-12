import React, { useState } from 'react'
import icons from '../assets/icons'

const Navbar = () => {

    const [navState, setNavState] = useState(false);

    const handleNav = () => {
        setNavState(!navState);
        !navState ? document.body.style.overflow = "hidden" : 
        document.body.style.overflow = "scroll"
    }

    return (
        <div className='absolute w-full flex justify-between  p-4 items-center'>
            <h1 className='font-bold text-3xl text-white z-20'>Experiences</h1>
            <div onClick={handleNav} className='z-20 text-white cursor-pointer' >
                {navState ? <icons.close size={25} /> : <icons.menu size={25} />}
            </div>
            <div className={navState ? 'fixed flex-col left-0 top-0 px-6 py-8 text-gray-300 bg-black/90 w-full h-screen z-10 ease-in-out duration-300' : 'fixed top-0 left-[-100%] ease-in-out duration-300 w-full h-screen'}>
                <ul className='flex flex-col w-full h-full items-center justify-center'>
                    <li className='navbar-item'>Home</li>
                    <li className='navbar-item'>Destinations</li>
                    <li className='navbar-item'>Reservations</li>
                    <li className='navbar-item'>Amenities</li>
                    <li className='navbar-item'>Rooms</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar