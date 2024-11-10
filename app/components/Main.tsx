import React from 'react'
import Image from 'next/image'
import ProfileImage from "../../public/logo.jpg"


function Home() {
  return (
    <div className="w-full h-lvh bg-transparent pt-16">
        <div className="flex flex-col items-center py-16 md:flex-row">

        <div className="w-3/4 px-32  ">
            <h1 className="text-6xl   text-white font-Poppins font-bold">Muhammad Moin</h1>
            <h1 className="text-3xl font-semibold font-Poppins  text-yellow-500 py-3">Graphic Designer</h1>
            <h1 className="text-sm   text-white px-1 py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Architecto deleniti, odit laborum autem aliquam quam quo obcaecati eum dolorem eligendi? Lorem ipsum dol
            or sit, amet consectetur adipisicing elit. Sit quos blanditiis maxime illo omnis fuga totam accusamus
            laudantium dolorem aliquid.</h1>
            <div className="flex py-4 space-x-8">
            <button className="text-main bg-yellow-500 font-Poppins font-semibold text-md rounded-lg shadow-lg py-2 px-4 border-2 border-yellow-500 hover:bg-transparent hover:text-yellow-500">Download CV</button>
            <button className="text-yellow-500 bg-transparent font-Poppins font-semibold text-md rounded-lg shadow-lg border-2 border-yellow-500 py-2 px-7 hover:bg-yellow-500 hover:text-main">Let's Talk</button>
            
            </div>

        </div>
        <div className="w-1/4 flex justify-end mx-32 ">
            <div className="relative">
            {/* Circle frame for the image */}
            <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-yellow-500 shadow-lg ">
            {/* Profile image */}

            <Image
                src={ProfileImage}  
                alt="Profile Image"
                layout="intrinsic"    // Intrinsic size for better control over dimensions
                width={640}  // Set width to match the circle size (160px)
                height={640} // Set height to match the circle size (160px)
                objectFit="cover"  // Crops the image to fit the circle
                />
            
            </div>
            </div>
        </div>
        </div>
            <div className="px-32 pt-4 grid grid-cols-3">
            <div className="flex space-x-4 items-center">
            <h1 className="text-6xl text-white font-jetbrainsmono font-bold">03</h1>
            <h1 className="text-sm text-white font-jetbrainsmono font-light ">Years Of <br /> Experience</h1>
            </div>
            <div className="flex space-x-4 items-center">
            <h1 className="text-6xl text-white font-jetbrainsmono font-bold">45</h1>
            <h1 className="text-sm text-white font-jetbrainsmono font-light ">Projects <br /> Completed</h1>
            </div>
            <div className="flex space-x-4 items-center">
            <h1 className="text-6xl text-white font-jetbrainsmono font-bold">06</h1>
            <h1 className="text-sm text-white font-jetbrainsmono font-light ">Technologies <br/> Mastered</h1>
            </div>
            </div>  
    </div>
  )
}

export default Home