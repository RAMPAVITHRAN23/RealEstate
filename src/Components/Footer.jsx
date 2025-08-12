import React from 'react'
import { assets } from '../assets/assets'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32 w-full overflow-hidden bg-gray-900 text-gray-100'>
            <div className='container mx-auto flex flex-col md:flex-row md:justify-between gap-10'>

                {/* Column 1 - Logo & About */}
                <div className='w-full md:w-1/3'>
                    <img src={assets.logo_dark} alt="Logo" className='w-32' />
                    <p className='text-gray-400 mt-4'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Quisquam magni adipisci harum sequi totam architecto at
                        distinctio, quis, voluptatibus cupiditate animi quas error.
                        Corrupti veritatis reprehenderit eius recusandae suscipit.
                    </p>
                </div>

                {/* Column 2 - Company Links */}
                <div className='w-full md:w-1/5 flex flex-col'>
                    <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        <a href="#Header" className='hover:text-white'>Home</a>
                        <a href="#About" className='hover:text-white'>About us</a>
                        <a href="#Contact" className='hover:text-white'>Contact us</a>
                        <a href="#" className='hover:text-white'>Privacy policy</a>
                    </ul>
                </div>

                {/* Column 3 - Contact & Socials */}
                <div className='w-full md:w-1/3 flex flex-col'>
                    <h3 className='text-white text-lg font-bold mb-2'>Get in Touch with us  <span></span>
                        <a href="https://www.linkedin.com/in/rampavithran-rp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline mb-4">
                        linkedin.com
                    </a>
                    </h3>
                    


                    <p className='text-gray-400 mb-2'>Email: support@example.com</p>
                    <p className='text-gray-400 mb-4'>Phone: +91 9342238517</p>
                    <div className='flex gap-4 text-gray-400 text-lg'>
                        <a href="#" className='hover:text-white'><FaFacebookF /></a>
                        <a href="#" className='hover:text-white'><FaInstagram /></a>
                        <a href="#" className='hover:text-white'><FaTwitter /></a>
                    </div>
                </div>

            </div>

            {/* Bottom bar */}
            <div className='border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm'>
                © {new Date().getFullYear()} Nexora. All rights reserved.
            </div>
        </div>
    )
}

export default Footer
