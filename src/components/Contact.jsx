import React from 'react'
import { MapPin } from 'lucide-react'
import { Phone } from 'lucide-react'
import { Mail } from 'lucide-react'
import map from '../assets/map.jpg'

const Contact = () => {
  return (
    <>
    <div className='min-h-50vh my-12 flex flex-col justify-center items-center'>
        <h2 className='uppercase tracking-wide text-3xl lg:text-4xl'>Contact</h2>
        <p className='my-4 italic text-neutral-500 tracking-tight'>Fan? Drop a note!</p>
        <div className='lg:w-7/12 sm:w-4/6 w-5/6 flex flex-col lg:flex-row justify-between items-center'>
            <div className='space-y-2 float-start mb-4'>
                <div className='flex space-x-2'>
                    <MapPin />
                    <p>Chicago, US</p>
                </div>
                <div className='flex space-x-2'>
                    <Phone />
                    <p>Phone: +00 151515</p>
                </div>
                <div className='flex space-x-2'>
                <Mail />
                    <p>Email: mail@mail.com</p>
                </div>
            </div>
            <form action="#" className='mt-6'>
                <div className='lg:space-x-5 mb-3 space-y-2'>
                    <input type="text" className='border border-neutral-400 px-3 py-2 w-full lg:w-fit' placeholder='Name' required/>
                    <input type="email" className='border border-neutral-400 px-3 py-2 w-full lg:w-fit' placeholder='Email' required/>
                </div>
                <div className=''>
                    <input type="text" className='border w-full border-neutral-400 px-3 py-2' placeholder='Message' required/>
                    <button className='uppercase float-end bg-black mt-4 px-4 py-2 text-white'>send</button>
                </div>
            </form>
        </div>
    </div>
    <img src={map} alt="Map" className='w-full object-cover'/>
    </>
  )
}

export default Contact