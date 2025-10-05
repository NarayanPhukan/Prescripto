import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-4'>
            
            {/* Left Section */}
            <div>

                <img src={assets.logo} alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

             {/* Center Section */}
            <div>
                <p>COMPANY</p>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

             {/* Right Section */}
            <div>
                <p>GET IN TOUCH</p>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>greatstackdev@gmail.com</li>
                </ul>

            </div>
        </div>
        <div>
            {/* CopyRight Text */}
            <hr />
            <p>Copyright © 2024 GreatStack - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer