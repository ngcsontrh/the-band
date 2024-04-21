import React, { useEffect, useState } from 'react'
import la from '../assets/la.jpg'
import chicago from '../assets/chicago.jpg'
import ny from '../assets/ny.jpg'
import bandmemder from '../assets/bandmember.jpg'

const HeroSection = () => {
    const [currentImg, setCurrentImg] = useState(0);

    const images = [
        {src: la, alt: 'Los Angeles'},
        {src: chicago, alt: 'Chicago'},
        {src: ny, alt: 'New York'}
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImg(currentImg === (images.length - 1) ? 0 : (currentImg + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, [currentImg, images.length]);

    return (
    <>
        <div>
            <img src={images[currentImg].src} className='w-full object-cover' alt={images[currentImg].alt} />
        </div>
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <h2 className='uppercase tracking-wider mt-11 text-3xl lg:text-4xl'>the band</h2>
            <i className='text-neutral-600 mt-5'>We love music</i>
            <p className='lg:w-7/12 sm:w-4/6 w-5/6 mt-4 text-sm text-justify'>
            We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='flex flex-wrap justify-between mt-16'>
                <div className='w-full lg:w-1/3 lg:px-10 space-y-4 flex flex-col justify-center items-center'>
                    <p>Name</p>
                    <img className='lg:w-36 w-56' 
                        src={bandmemder} alt="Band Member" />
                </div>
                <div className='w-full lg:w-1/3 lg:px-10 space-y-4 flex flex-col justify-center items-center'>
                    <p>Name</p>
                    <img className='lg:w-36 w-56'  
                        src={bandmemder} alt="Band Member" />
                </div>
                <div className='w-full lg:w-1/3 lg:px-10 space-y-4 flex flex-col justify-center items-center'>
                    <p>Name</p>
                    <img className='lg:w-36 w-56'  
                        src={bandmemder} alt="Band Member" />
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroSection