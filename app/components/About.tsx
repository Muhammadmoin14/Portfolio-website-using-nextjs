import React from 'react'
import profileImagec from "../../public/IMG-20240114-WA0008 (1)-fotor-bg-remover-20241101165042 (1).png"
import Image from 'next/image'

function About() {
  return (
    <div id="about" className='overflow-hidden'>
        <div className="lg:w-full lg:h-lvh flex items-center pt-6 bg-transparent sm:w-screen sm:h-full">
      <div className="w-1/4 py-24 flex justify-end mx-24 sm:hidden lg:block  ">
        <div className="relative">        
        <div className="w-{1440px} h-{720px} rounded-full  overflow-hidden  shadow-lg mix-blend-lighten brightness-95 ">


          <Image
            src={profileImagec}  
            alt="Profile Image"
            layout="intrinsic"    // Intrinsic size for better control over dimensions
            width={640}  // Set width to match the circle size (160px)
            height={640} // Set height to match the circle size (160px)
            objectFit="cover"  // Crops the image to fit the circle
            />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none opacity-90"></div>
        </div>
        </div>
      </div>
      <div className="lg:w-3/4 lg:ps-12 pe-6  items-center sm:w-screen sm:pt-10 sm:ps-4 lg:pt-0 ">
        <h1 className="lg:text-6xl text-yellow-500 font-Poppins font-bold text-center sm:text-4xl">About Me</h1>
        <p className="text-white font-poppins font-medium mt-10 text-left lg:text-base sm:text-sm">Assalamualaikum! I'm Muhammad Moin, a dedicated Graphic Designer, Digital Marketer, and budding enthusiast in the world of Generative AI. At just 16 years old, I have already gained valuable experience by working with emerging startups, helping them elevate their brand presence and business impact through my unique approach to design and marketing strategy. My journey in the design world started early, driven by a passion to blend creativity with business growth.
        Currently, I am pursuing my Intermediate Pre-Engineering studies at DJ Sindh Govt Science College. My academic journey began with a strong foundation, I scored 85% in Matric, demonstrating my dedication and work ethic early on. My technical background complements my creative skills, allowing me to approach design and marketing with a structured, problem-solving mindset.</p>
        <p className="text-white font-poppins text-md font-medium mt-10">As a student of Generative AI, I’m always exploring new ways to incorporate cutting-edge technology into my work. My interest in AI gives me a unique perspective on how technology and creativity intersect, and I’m excited to be part of a future where AI can enhance the creative process.
        If you're looking for a young, passionate Graphic Designer who combines fresh ideas with proven strategies, you're in the right place. Whether it’s creating visually stunning designs or executing impactful digital marketing campaigns, I’m here to bring value to your brand. Let’s work together to create something memorable!</p>    
      </div>
    </div>
    </div>
  )
}

export default About