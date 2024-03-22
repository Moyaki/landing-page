/* eslint-disable no-unused-vars */
import React from 'react'
import {CTAImage} from '../assets/CTAImage.png'


const CTAComponent=() => {
        
  return (
    <div className='w-full bg-[#E9F8F3] py-24' >
    <div className='md:max-w-[1480px] m-auto grid md:grid-colos-2 gap-8 max-w-[600px] items-center px-4 md:px-0'>

        <img src={CTAImage} className="w-[650px] mx-auto" />


        <div>
            <h1 className='py-2 text-3x1 font-semibold'>Join <span className='text-[#20B486]'>Worlds largest</span>learning platform today</h1>
            <p className='py-2 text-lg text-gray-600'>Start learning by registering for free</p>
            <button className='max-[780px] : w-fullmy-4 px-8 py-5 rounded-md bg-[#20B486] text-white font-bold'>Sign Up For Free</button>
        </div>
    </div>
    </div>
  )
}

export default CTAComponent;
