import React from 'react'
import Social from '../components/Social'

function Contact() {
  return (
    <div id='contactus'  className='bg-transparent lg:w-full lg:h-lvh sm:h-full sm:w-screen py-32 lg:px-32 md:px-16 sm:px-8 overflow-hidden'>
      <div className='flex sm:flex-col lg:flex-row items-center py-24'>

        <div className='lg:w-1/2 sm:w-full space-y-4 mx-32'>
        <h1 className='text-white/95 font-Poppins font-semibold text-4xl md:text-4xl sm:text-3xl'>Contact me for <br />Collaboration</h1>
        <p className='lg:w-1/2 sm:w-full text-zinc-400 font font-Poppins font-light '>Reach out today to discuss your project needs and start working on amazing work!</p>

        <div className='flex'>
        <div className='lg:mt-8 lg:mb-0 sm:mt-4 sm:mb-8'>
        <Social containerStyles="flex gap-6" iconStyles="w-10 h-10 border border-white/20 rounded-md flex justify-center items-center text-xl text-yellow-500 hover:bg-yellow-500 hover:text-inherit"/>
        </div>
        </div>

        </div>
        <div className='lg:w-1/2 sm:w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <input className='h-[48px] px-4 py-5 rounded-md border border-white/10 focus:border-yellow-500 bg-secondmain font-light text-base text-white placeholder:text-white/60 outline-none' type="firstname" placeholder='First Name' />
          <input className='h-[48px] px-4 py-5 rounded-md border border-white/10 focus:border-yellow-500 bg-secondmain font-light text-base text-white placeholder:text-white/60 outline-none' type="lastname" placeholder='Last Name' />
          <input className='h-[48px] w-full  px-4 py-5 rounded-md border border-white/10 focus:border-yellow-500 bg-secondmain font-light text-base text-white placeholder:text-white/60 outline-none' type="email" placeholder='Email Address' />
          <input className='h-[48px] px-4 py-5 rounded-md border border-white/10 focus:border-yellow-500 bg-secondmain caret-white/60 font-light text-base text-white placeholder:text-white/60 outline-none' type="phone" placeholder='Phone Number' />
        </div>
        <div className='pt-6 space-y-6 '>
      
          <input className='min-h-44 w-full px-4 pb-28 rounded-md border border-white/10 focus:border-yellow-500 bg-secondmain caret-white/60 font-light text-base text-white resize-y placeholder:text-white/60 placeholder:text-start outline-none' type="text" placeholder='Message' />
          <button className="w-full text-main bg-yellow-500 font-Poppins font-semibold text-md rounded-lg shadow-lg py-2 border-2 border-yellow-500 hover:bg-transparent hover:text-yellow-500">Submit</button>
        </div>
        </div>


      </div>
    </div>
  )
}

export default Contact