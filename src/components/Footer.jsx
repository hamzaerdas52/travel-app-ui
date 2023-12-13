import React from 'react'
import icons from '../assets/icons'

const Footer = () => {
    return (
        <div className='w-full mt-2 py-2 bg-gray-800 text-gray-300'>
            <div className='max-w-[1200px] m-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-b-gray-500 py-6 px-4'>
                <div>
                    <h6 className='footer-list-header'>Solutions</h6>
                    <ul>
                        <li className='footer-list-item'>Travel</li>
                        <li className='footer-list-item'>Booking</li>
                        <li className='footer-list-item'>Flights</li>
                        <li className='footer-list-item'>Cruises</li>
                        <li className='footer-list-item'>Ground</li>
                    </ul>
                </div>
                <div>
                    <h6 className='footer-list-header'>Support</h6>
                    <ul>
                        <li className='footer-list-item'>Pricing</li>
                        <li className='footer-list-item'>Documentation</li>
                        <li className='footer-list-item'>Tours</li>
                        <li className='footer-list-item'>Refunds</li>
                    </ul>
                </div>
                <div>
                    <h6 className='footer-list-header'>Company</h6>
                    <ul>
                        <li className='footer-list-item'>About</li>
                        <li className='footer-list-item'>Blog</li>
                        <li className='footer-list-item'>Jobs</li>
                        <li className='footer-list-item'>Press</li>
                        <li className='footer-list-item'>Partners</li>
                    </ul>
                </div>
                <div>
                    <h6 className='footer-list-header'>Legal</h6>
                    <ul>
                        <li className='footer-list-item'>Claims</li>
                        <li className='footer-list-item'>Privacy</li>
                        <li className='footer-list-item'>Terms</li>
                        <li className='footer-list-item'>Policies</li>
                        <li className='footer-list-item'>Conditions</li>
                    </ul>
                </div>
                <div className='grid col-span-2 py-4'>
                    <p className='font-bold uppercase'>Subscribe to our newsletters</p>
                    <p className='py-4'>The Latest deals, articles and resources sent to your inbox weekly.</p>
                    <form className='flex flex-col md:flex-row'>
                        <input className='w-full p-2 mb-4 mr-2 rounded-lg' type="email" placeholder='Enter email...' />
                        <button className='p-2 mb-4 rounded-md'>Subscribe</button>
                    </form>
                </div>
            </div>

            <div className='max-w-[1200px] px-2 py-4 m-auto flex flex-col sm:flex-row justify-between text-center text-gray-500'>
                <p className='py-3'>2023 Experiences, LLC. All rights reserved.</p>
                <div className='flex justify-around sm:w-[200px] text-2xl pt-4'>
                    <icons.facebook />
                    <icons.x />
                    <icons.instagram />
                </div>
            </div>
        </div>
    )
}

export default Footer