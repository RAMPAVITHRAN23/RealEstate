import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const Nav = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showMobileMenu]);

    return (
        <div className='absolute top-0 left-0 right-0 w-full z-10 p-4'>
            <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32'>
                {/* Logo */}
                <img src={assets.logo} alt="Logo" />

                {/* Desktop Nav Links */}
                <ul className='hidden md:flex gap-7 text-white font-semibold'>
                    <li className='cursor-pointer'>
                        <a onClick={() => setShowMobileMenu(false)} href="#Header" className='hover:text-gray-400'>Home</a>
                    </li>
                    <li className='cursor-pointer'>
                        <a onClick={() => setShowMobileMenu(false)} href="#about" className='hover:text-gray-400'>About</a>
                    </li>
                    <li className='cursor-pointer'>
                        <a onClick={() => setShowMobileMenu(false)} href="#Projects" className='hover:text-gray-400'>Projects</a>
                    </li>
                    <li className='cursor-pointer'>
                        <a onClick={() => setShowMobileMenu(false)} href="#Testimonials" className='hover:text-gray-400'>Testimonials</a>
                    </li>
                </ul>

                {/* Desktop Button */}
                <button className='hidden md:block bg-white text-black font-semibold px-8 py-2 rounded-full hover:bg-gray-200 transition-all'>
                    Sign up
                </button>

                {/* Mobile Menu Icon */}
                <img
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    src={assets.menu_icon}
                    className='md:hidden w-7 cursor-pointer'
                    alt="menu-icon"
                />
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${showMobileMenu ? 'fixed top-0 left-0 right-0 bottom-0 w-full h-full z-50 bg-white/90 backdrop-blur-sm' : 'h-0 w-0'} overflow-hidden transition-all duration-300`}>
                <div className='flex justify-end p-6'>
                    <img
                        onClick={() => setShowMobileMenu(false)}
                        src={assets.cross_icon}
                        className="w-6 cursor-pointer"
                        alt="close-menu"
                    />
                </div>
                <ul className='flex flex-col items-center justify-center h-full space-y-6 font-medium text-black text-lg'>
                    <li className='cursor-pointer'>
                        <a onClick={() => setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full hover:bg-gray-200'>Home</a>
                        </li>
                    <li className='cursor-pointer'>
                        <a onClick={() => setShowMobileMenu(false)} href="#about" className='px-4 py-2 rounded-full hover:bg-gray-200'>About</a></li>
                    <li className='cursor-pointer'>
                        <a onClick={() => setShowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full hover:bg-gray-200'>Projects</a></li>
                    <li className='cursor-pointer'>
                        <a onClick={() => setShowMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full hover:bg-gray-200'>Testimonials</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
