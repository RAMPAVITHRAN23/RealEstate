import React, { useState, useEffect } from 'react';
import { assets, projectsData } from '../assets/assets';

const Project = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);

    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth >= 1024) {
                setCardsToShow(projectsData.length); // Show all cards in desktop
            } else {
                setCardsToShow(1); // Show 1 at a time in mobile
            }
        };

        updateCardsToShow();
        window.addEventListener('resize', updateCardsToShow);

        return () => {
            window.removeEventListener('resize', updateCardsToShow);
        };
    }, []);

    const nextProject = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % projectsData.length
        );
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className='container mx-auto py-4 pt-20 md:px-20 lg:px-32 overflow-hidden my-20 w-full' id='Projects'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4'>
                Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span>
            </h1>
            <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>
                Crafting Spaces, Building Legacies – Explore Our Portfolio
            </p>

            {/* Slider Buttons */}
            <div className='flex justify-end mb-8'>
                <button
                    onClick={prevProject}
                    className='p-3 bg-gray-200 rounded mr-2 hover:bg-gray-300'>
                    <img src={assets.left_arrow} alt="Previous" />
                </button>
                <button
                    onClick={nextProject}
                    className='p-3 bg-gray-200 rounded hover:bg-gray-300'>
                    <img src={assets.right_arrow} alt="Next" />
                </button>
            </div>

            {/* Project Slider */}
            <div className='overflow-hidden container mx-auto px-4 py-8'>
                <div
                    className='flex transition-transform duration-500 ease-in-out'
                    style={{
                        transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
                        width: `${projectsData.length * (100 / cardsToShow)}%`
                    }}
                >
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className={`relative flex-shrink-0 w-full ${cardsToShow > 1 ? 'lg:w-1/4' : 'w-full'} p-2`}
                        >
                            <img src={project.image} alt={project.title} className='w-full h-auto object-cover' />
                            <div className='absolute bottom-5 left-0 right-0 flex justify-center'>
                                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                    <h2 className='text-lg font-semibold'>{project.title}</h2>
                                    <p className='text-gray-500 font-bold text-sm'>
                                        {project.price} | <span className='px-1'>{project.location}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
