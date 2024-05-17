import React from 'react'
import { AiFillPhone , AiOutlineClockCircle , } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";
const TopBar = () => {
  return (
    <div className='flex justify-between drop-shadow-lg items-center py-2 px-4'>
      <div className='flex justify-center items-center gap-1'>
        <BsChatSquareDots size={25} className='text-[var(--btn-bg)]'/>
        <h1 className='text-xl font-bold text-gray-700'>3S*WAYS</h1>
      </div>
      <div className='flex justify-between items-center gap-4'>
        <div className='hidden sm:flex justify-center items-center  px-4' >
          <AiOutlineClockCircle  className='text-[var(--btn-bg)] mr-2'/>
          <p className='text-sm text-gray-900'>9AM - 5PM</p>
        </div>
        <div className='hidden sm:flex justify-center items-center px-4'>
          <AiFillPhone className='text-[var(--btn-bg)] mr-2' />
          <p className='text-sm text-gray-900'>123-456-7890</p>
        </div>
        <button className='button1'>Get a Free Quote</button>
      </div>
    </div>
  )
}

export default TopBar
