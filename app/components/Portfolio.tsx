import React from 'react'
import Image from 'next/image'
import Link  from 'next/link'
import project01 from "../../public/behance-banner.png"
import project02 from "../../public/behance.png"
import project03 from "../../public/Post final detail-03.jpg"
import project04 from "../../public/post-design.jpg"
import project05 from "../../public/Logo-portrfolio.jpg"
import project06 from "../../public/6-sep-final.png"


function Portfolio() {
  return (
    <div id="portfolio" className="lg:w-full sm:w-screen h-full py-24 bg-transparent overflow-hidden">
    <h1 className="lg:text-5xl sm:text-4xl text-yellow-500 font-Poppins font-bold text-center pt-16 ">PROJECTS</h1>
  
  <div className="py-24 px-16 grid lg:grid-cols-3  sm:grid-cols-1  gap-6  ">
    <div>
      <h1 className="text-white font-bold lg:text-lg sm:text-base text-center pb-6 font-Poppins">Gaming Banner Design</h1>
      <div className='hover:scale-105 lg: '>
      <Image src={project01} alt="Project-Thumbnail" width={500} height={500} />
      </div>
    </div>
    <div>
      <h1 className="text-white font-bold lg:text-lg sm:text-base text-center pb-6 font-Poppins">Gaming Post Design</h1>
      <div className='hover:scale-105'>
      <Image src={project02} alt="Project-Thumbnail" width={500} height={500} />
      </div>
    </div>
    <div>
      <h1 className="text-white font-bold lg:text-lg sm:text-base text-center pb-6 font-Poppins">Social Media Post Design</h1>
      <div className='lg:content-none sm:items-start lg:w-[450px] lg:h-[350px] sm:w-[250px] sm:h-[200px] relative hover:scale-105'>
      <Image src={project03} alt="Project-Thumbnail" layout="fill" objectFit="contain" />
      </div>
    </div>
    <div className='lg:pt-10 '>
      <h1 className="text-white font-bold lg:text-lg sm:text-base text-center pb-1 font-Poppins">Social Media Post Design</h1>
      <div className='w-full h-[500px] relative scale-95 hover:scale-100 '>
      <Image src={project04} alt="Project-Thumbnail" layout="fill" objectFit="contain" />
      </div>
    </div>
    <div className='pt-10'>
      <h1 className="text-white font-bold lg:text-lg sm:text-base text-center pb-1 font-Poppins">Logo Design Design</h1>
      <div className='w-full h-[500px] relative scale-95 hover:scale-100'>
      <Image src={project05} alt="Project-Thumbnail" layout="fill" objectFit="contain" />
      </div>
    </div>
    <div className='pt-10'>
      <h1 className="text-white font-bold lg:text-lg sm:text-base text-center pb-1 font-Poppins">Social Media Post Design</h1>
      <div className='w-full h-[500px] relative scale-95 hover:scale-100'>
      <Image src={project06} alt="Project-Thumbnail" layout="fill" objectFit="contain" />
      </div>
    </div>
  </div>
  <div className='flex justify-center'>
    <Link href="https://www.behance.net/technicalgfx">
  <button className="text-main bg-yellow-500 font-Poppins font-semibold text-md rounded-lg shadow-lg py-2 px-6 border-2 border-yellow-500 hover:bg-transparent hover:text-yellow-500">See More</button>
  
    </Link>
  </div>
  
  
  </div>
  )
}

export default Portfolio