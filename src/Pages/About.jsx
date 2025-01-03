import React from 'react'
import About1 from '../Components/About1/About1'
import About2 from '../Components/About2/About2'
import Download from '../Components/Download/Download'
import Call from '../Components/Call/Call'

const About = () => {
  return (
    <div className='lg:pt-[212px] pt-0 font-poppins'>
        <About1/>
          
        <About2/>
        
        <Download/>
        <Call/>

    </div>
  )
}

export default About