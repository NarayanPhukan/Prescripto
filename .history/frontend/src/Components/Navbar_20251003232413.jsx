import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()
  const [token, setToken] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      {/* Logo */}
      <img 
        src={assets.logo} 
        alt="Logo" 
        className='w-44 cursor-pointer' 
        onClick={() => navigate('/')}
      />

      {/* Menu */}
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to="/" className="flex flex-col items-center">
          {({ isActive }) => (
            <>
              <li className='py-1 hover:scale-105 transition-all duration-200'>HOME</li>
              <hr className={`border-none outline-none h-0.5 bg-primary m-auto transition-all duration-300 ${isActive ? "w-3/5" : "w-0"}`} />
            </>
          )}
        </NavLink>

        <NavLink to="/doctors" className="flex flex-col items-center">
          {({ isActive }) => (
            <>
              <li className='py-1 hover:-translate-y-[10px] transition-transform duration-200'>ALL DOCTORS</li>
              <hr className={`border-none outline-none h-0.5 bg-primary m-auto transition-all duration-300 ${isActive ? "w-3/5" : "w-0"}`} />
            </>
          )}
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center">
          {({ isActive }) => (
            <>
              <li className='py-1 hover:scale-105 transition-all duration-200'>ABOUT</li>
              <hr className={`border-none outline-none h-0.5 bg-primary m-auto transition-all duration-300 ${isActive ? "w-3/5" : "w-0"}`} />
            </>
          )}
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center">
          {({ isActive }) => (
            <>
              <li className='py-1 hover:scale-105 transition-all duration-200'>CONTACT</li>
              <hr className={`border-none outline-none h-0.5 bg-primary m-auto transition-all duration-300 ${isActive ? "w-3/5" : "w-0"}`} />
            </>
          )}
        </NavLink>
      </ul>

      {/* Right side (Auth / Profile) */}
      <div className='flex items-center gap-4'>
        {token ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src={assets.profile_pic} alt="profile" />
            <img className='w-2.5' src={assets.dropdown_icon} alt="dropdown" />

            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p 
                  onClick={() => navigate('/my-profile')} 
                  className='hover:text-black cursor-pointer transition-all duration-300 hover:scale-105'
                >
                  My Profile
                </p>
                <p 
                  onClick={() => navigate('/my-appointments')} 
                  className='hover:text-black cursor-pointer transition-all duration-300 hover:scale-105'
                >
                  My Appointments
                </p>
                <p 
                  onClick={() => setToken(false)} 
                  className='hover:text-black cursor-pointer transition-all duration-300 hover:scale-105'
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button 
            onClick={() => navigate('/login')} 
            className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar
