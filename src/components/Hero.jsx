import React from 'react'
import heroImg from '../assets/bg-1.jpg'
const Hero = () => {
  return (
    <div className="w-full h-[100%] bg-gray-300  ">
     
      <div className='flex justify-center items-center'>
        <div className='h-full flex flex-col justify-center px-4 py-20 '>
            <h1 className='font-bold text-xl sm:text-2xl md:text-4xl drop-shadow-lg '>Find Your Special Solutions</h1>
            <h2 className='font-bold italic py-4 text-4xl drop-shadow-lg'>With 3s*Ways</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptate sit animi earum amet quasi adipisci porro, dolor nihil dolorem odit suscipit laudantium harum cum deleniti beatae laborum iure, provident qui libero expedita deserunt sunt eos commodi. Veniam quas, quo nobis debitis in officia commodi aut obcaecati, tempora perspiciatis adipisci.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
