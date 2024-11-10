import React from 'react'
import Social from '../components/Social'

function Contact() {
  return (
    <div id='contactus'  className='bg-transparent w-full h-lvh py-32 px-32 '>
      <div className='flex flex-col lg:flex-row items-center py-24'>

        <div className='w-1/2 space-y-4 mx-32'>
        <h1 className='text-white/95 font-Poppins font-semibold text-4xl'>Contact me for <br />Collaboration</h1>
        <p className='w-1/2 text-zinc-400 font font-Poppins font-light '>Reach out today to discuss your project needs and start working on amazing work!</p>

        <div className='flex'>
        <div className='mt-8'>
        <Social containerStyles="flex gap-6" iconStyles="w-10 h-10 border border-white/20 rounded-md flex justify-center items-center text-xl text-yellow-500 hover:bg-yellow-500 hover:text-inherit"/>
        </div>
        </div>

        </div>
        <div className='w-1/2 '>
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