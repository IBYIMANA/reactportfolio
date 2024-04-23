import React from 'react'

const Project = () => {
  return (
    <div >
   <h1 data-aos='fade-right' className='mb-20 text-3xl font-semibold leading-normal text-center text-fuchsia-500'>PROJECTS</h1>
 <div className='grid justify-around grid-cols-1 gap-10 mt-4 ml-24 lg:grid-cols-4 md:grid-cols-2'>
  <a href="https://vercel.com/fillettes-projects/rock-paper">
  <img src="images/rock.PNG" className='flex items-center justify-center font-semibold transition-opacity duration-500 w-60 rounded-3xl h-42 hover:opacity-50 '/>
    </a>
  <a href="https://vercel.com/fillettes-projects/portfolio1">
  <img src="images/port.PNG" className='flex items-center justify-center p-1 font-semibold rounded-3xl h-42 hover:opacity-50 w-60'/>
    </a>
  <a href="https://contactapp-1jxc.vercel.app/">
  <img src="images/Cont.PNG" className='flex items-center justify-center p-1 font-semibold w-60 rounded-3xl h-42 hover:opacity-50 w'/>
    </a>
  <a href="https://contactapp-1jxc.vercel.app/">
  <img src="images/home.jpeg" className='flex items-center justify-center p-1 font-semibold w-60 rounded-3xl h-42 hover:opacity-50 '/>
    </a>
    </div>
    </div>
  )
}
export default Project