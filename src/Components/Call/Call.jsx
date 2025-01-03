import React from 'react'
import callSVG from "../Assets/Call.svg"

const Call = () => {
  return (
    <div className='bg-yellowMap h-[450px]  bg-cover bg-center flex flex-col justify-center items-center '>
        <h1 className='font-bold text-5xl text-100 text-center'>We are ready to take your call 24 hours, 7 days! </h1>
        <div className='flex justify-center items-center gap-3'>            
        <img src={callSVG} alt="call svg" className='w-fit h-fit' />
            <h1 className='font-bold text-5xl text-100 text-center '>Call Now: 1134</h1>
        </div>
    </div>
  )
}

export default Call