import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Search } from 'lucide-react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleDropdownMobile = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <nav className='sticky bg-black text-white top-0'>
            <div className='hidden lg:flex justify-between items-center'>
                <div className='uppercase'>
                    <a href="#" className='px-4 py-3 hover:bg-neutral-500 hover:text-white'>Home</a>
                    <a href="#" className='px-4 py-3 hover:bg-neutral-500 hover:text-white'>Band</a>
                    <a href="#" className='px-4 py-3 hover:bg-neutral-500 hover:text-white'>Tour</a>
                    <a href="#" className='px-4 py-3 hover:bg-neutral-500 hover:text-white'>Contact</a>
                    <div className='inline-block'>
                        <button type='button' onClick={toggleDropdown}
                                className='px-4 py-3 uppercase hover:bg-neutral-500 hover:text-white flex items-center'>
                            More <ChevronDown size={20} />
                        </button>
                        {
                            isOpen && (
                                <div className='absolute capitalize bg-white text-black flex flex-col'>
                                    <a href="#" className='px-4 py-3 hover:bg-neutral-500 hover:text-white'>Merchandise</a>
                                    <a href="#" className='px-4 py-3 hover:bg-neutral-500 hover:text-white'>Extras</a>
                                    <a href="#" className='px-4 py-3 hover:bg-neutral-500 hover:text-white'>Media</a>
                                </div>
                            )
                        }
                    </div>
                </div>
                <a className='px-5 hover:bg-red-500 py-4'>
                    <Search size={16} />
                </a>
            </div>

            <div className='lg:hidden'>
                <div className='flex justify-between items-center'>
                    <a href="#" className='px-4 py-3 hover:bg-neutral-500 hover:text-white'>Home</a>
                    <div>
                    <button onClick={toggleDropdownMobile} className='px-4 py-3 hover:bg-neutral-500 hover:text-white'>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button> 
                    </div>
                </div>
                {
                    mobileDrawerOpen && (
                        <div className='absolute capitalize w-screen bg-black text-white flex flex-col'>
                            <a href="#" className='px-4 py-3 hover:bg-neutral-500 hover:text-white'>Band</a>
                            <a href="#" className='px-4 py-3 hover:bg-neutral-500 hover:text-white'>Tour</a>
                            <a href="#" className='px-4 py-3 hover:bg-neutral-500 hover:text-white'>Contact</a>
                            <a href="#" className='px-4 py-3 hover:bg-neutral-500 hover:text-white'>Merch</a>
                        </div>
                    )
                }
            </div>
        </nav>
        </>
    )
}

export default NavBar