import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between bg-primary rounded-2xl px-8 sm:px-12 md:px-16 lg:px-20 my-20 mx-4 sm:mx-8 md:mx-10'>
      
      {/* Left Side */}
      <div className='flex-1 text-center md:text-left py-12 sm:py-16 md:py-20'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-snug'>
          Book Appointment <br className='hidden sm:block' /> 
          With 100+ Trusted Doctors
        </h2>
        <button className='bg-white text-gray-700 font-medium text-sm sm:text-base px-8 py-3 rounded-full mt-8 hover:scale-105 active:scale-95 transition-transform'>
          Create account
        </button>
      </div>

      {/* Right Side */}
      <div className='md:flex-shrink-0 md:w-[370px] relative'>
        <img 
          src={assets.appointment_img} 
          alt="Doctor" 
          className='w-full max-w-[360px] md:max-w-[380px] lg:max-w-[400px] relative md:bottom-[-8px]'
        />
      </div>

    </div>
  )
}

export default Banner
