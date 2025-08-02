import React from 'react';
import { assets } from '../assets/assets';
import Nav from './Nav';

const Header = () => {
    return (
        <div
            className='min-h-screen mb-4 bg-cover bg-center w-full overflow-hidden'
            style={{ backgroundImage: `url(${assets.header_img})` }}
            id='Header'
        >
            <Nav />
            <div className='container text-center mx-auto px-6 md:px-20 lg:px-32 text-white 
    flex flex-col justify-center items-center min-h-screen '>
                <h2 className='text-5xl sm:text-6xl md:text-[82px] max-w-3xl font-semibold pt-20'>
                    Explore homes that fit your lifestyle
                </h2>
                <div className='flex justify-center items-center space-x-6 mt-16'>
                    <a
                        href="#Projects"
                        className='border border-white rounded px-8 py-3 hover:bg-white hover:text-black transition-all'
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className='bg-blue-500 rounded px-8 py-3 hover:bg-blue-600 transition-all'
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
