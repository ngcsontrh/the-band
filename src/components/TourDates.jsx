import React from 'react'
import newyork from '../assets/newyork.jpg'


const TourDates = () => {
  return (
    <div className='min-h-screen py-12 flex flex-col justify-center items-center bg-black text-white'>
        <div className='lg:mt-8'>
            <h2 className='uppercase tracking-wide text-3xl lg:text-4xl mb-6'>TOUR DATES</h2>
            <i className='text-neutral-500'>Remember to book your tickets!</i>
        </div>
        <div className='lg:w-7/12 sm:w-4/6 w-5/6 m-8'>
            <div className='bg-white text-neutral-600 py-2 border border-neutral-300'>
                <span className='px-6'>September</span>
                <span className='bg-red-500 text-white px-2 py-1'>Sold out</span>
            </div>
            <div className='bg-white text-neutral-600 py-2 border border-neutral-300'>
                <span className='px-6'>October</span>
                <span className='bg-red-500 text-white px-2 py-1'>Sold out</span>
            </div>
            <div className='flex px-6 justify-between bg-white text-neutral-600 py-2 border border-neutral-300'>
                <span className=''>November</span>
                <span className='flex items-center justify-center bg-neutral-900 text-white w-6 h-6 rounded-full'>3</span>
            </div>
        </div>
        <div className='lg:w-7/12 sm:w-4/6 w-5/6 mb-6 flex flex-wrap justify-between'>
            <div className='sm:w-30pt w-full bg-white text-black'>
                <div>
                    <img src={newyork} alt='New York' className='object-cover w-full' />
                    <div className='p-4 space-y-3'>
                        <h6 className='font-semibold'>New York</h6>
                        <p className='text-neutral-500'>Fri 27 Nov 2016</p>
                        <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                        <button className='bg-black text-white px-4 py-2 hover:bg-neutral-400 hover:text-black'>Buy ticket</button>
                    </div>
                </div>
            </div>
            <div className='sm:w-30pt w-full bg-white text-black'>
                <div>
                    <img src={newyork} alt='New York' className='object-cover w-full' />
                    <div className='p-4 space-y-3'>
                        <h6 className='font-semibold'>New York</h6>
                        <p className='text-neutral-500'>Fri 27 Nov 2016</p>
                        <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                        <button className='bg-black text-white px-4 py-2 hover:bg-neutral-400 hover:text-black'>Buy ticket</button>
                    </div>
                </div>
            </div>
            <div className='sm:w-30pt w-full bg-white text-black'>
                <div>
                    <img src={newyork} alt='New York' className='object-cover w-full' />
                    <div className='p-4 space-y-3'>
                        <h6 className='font-semibold'>New York</h6>
                        <p className='text-neutral-500'>Fri 27 Nov 2016</p>
                        <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                        <button className='bg-black text-white px-4 py-2 hover:bg-neutral-400 hover:text-black'>Buy ticket</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TourDates