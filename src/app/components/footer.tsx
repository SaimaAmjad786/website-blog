import Link from 'next/link'
import React from 'react'
import {IoLogoVercel} from 'react-icons/io5'
import {FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center '>
          <h1 className="w-[130px] sm:w-auto font-bold text-xl text-white">Saima blog</h1>

      <p className='text-sm text-white font-medium'>All right reserved . Copyright @blogger</p>
      <div className='flex'> 
        <Link
      target='blank' href={"https://vercel.com/new/saima-amjads-projects"} className=" ml-3 text-white">
      <IoLogoVercel className='text-3xl' />
      </Link>
      
      <Link
      target='blank' href={"https://www.linkedin.com/in/saima-amjad-2263012b6/"} className="ml-3 text-blue-600">
        <FaLinkedin className='text-3xl ' />
      </Link>
      </div>
    </div>
  )
}

export default Footer