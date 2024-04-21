import React from 'react'
import { Facebook } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <div className='flex justify-center flex-col items-center min-h-40vh space-y-4'>
        <div className='flex space-x-1'>
            <Facebook />
            <Instagram />
            <Twitter />
        </div>
        <p className='text-neutral-600'>Proton-NS</p>
    </div>
  )
}

export default Footer