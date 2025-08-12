import React from 'react';
import { assets, testimonialsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Testimonials = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='container mx-auto py-4 pt-20
        md:px-10 lg:px-10 overflow-hidden  w-full '
            id='Testimonials'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2
            text-center'>
                Customer <span className='underline underline-offset-4
                decoration-1 under font-light'>Testimonials</span>
            </h1>
            <p className='text-center text-gray-500 mb-12
            max-w-90 mx-auto'>
                Real Stories from those who Found Home with Us
            </p>
            <div className='flex flex-wrap justify-center gap-8 '>
                {testimonialsData.map((testimonialsData, index) => (
                    <div
                        key={index}
                        className="max-w-[340px] 
                    shadow-2xl rounded px-6 py-12 text-center"
                    >
                        <img className='w-20 h-20 rounded-full mx-auto mb-4'
                            src={testimonialsData.image}
                            alt={testimonialsData.alt} />
                        <h2 className='text-xl font-semibold mb-2'>
                            {testimonialsData.name}
                        </h2>
                        <p className='text-gray-500 mb-4 text-sm'>
                            {testimonialsData.title}
                        </p>
                        <div className='flex justify-center items-center mt-4 text-red-500'>
                            {Array.from({ length: testimonialsData.rating },
                                (item, index) => (
                                    <img key={index} src={assets.star_icon} alt="" />
                                ))}
                        </div>
                        <p className='text-gray-500 mt-4'>
                            {testimonialsData.text}
                        </p>

                    </div>
                ))}
            </div>

        </motion.div>
    )
}

export default Testimonials