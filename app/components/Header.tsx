"use client";
import React , {useState} from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  return (    
    <div className='bg-gradient-to-tl from-main to-secondmain z-20 mx-auto flex justify-between items-center px-16 py-6 fixed w-full '>
          <Link href='\' >
          <h1 className='text-2xl font-bold text-white hover:text-yellow-500'>Portfolio</h1>    
          </Link>

          <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <FiX className="text-2xl text-white"/> : <FiMenu className="text-2xl text-white"/>}
        </button>
      </div>

        <ul className={`flex space-x-6 sm:space-x-10 text-white items-center ${
          isOpen ? 'flex-col space-y-4 absolute bg-main top-16 left-0 w-full py-4' : 'hidden md:flex'
        }`}>
          <Link href="\" className='hover:text-yellow-500 hover:underline hover:decoration-yellow-500 '><li>Home</li></Link>
          <Link href="#about" className='hover:text-yellow-500 hover:underline hover:decoration-yellow-500 '><li>About</li></Link>
          <Link href="#service" className='hover:text-yellow-500 hover:underline hover:decoration-yellow-500 '><li>Services</li></Link>
          <Link href="#portfolio" className='hover:text-yellow-500 hover:underline hover:decoration-yellow-500 '><li>Projects</li></Link>
          <Link href="#contactus" className='hover:text-yellow-500 hover:underline hover:decoration-yellow-500 '><li>Contact us</li></Link>
        </ul>
    </div>

  )
}

export default Header