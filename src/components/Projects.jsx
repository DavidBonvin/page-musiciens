import React from 'react'
import { ProjectItem } from './ProjectItem'

export const Projects = () => {
  return (
   <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
   <h1 className='text-4xl font-bold text-center mb-4 text-[#001b5e]'>Projects</h1>
   <p className='text-center py-8'>
    Este projecto se trata de una app en microservicios, es un red social, se llama Tree-up, todavia no esta en la web, pero espero que pronto lo este. 
   </p>
   <div className=' grid sm:grid-cols-2 gap-12'>
    <ProjectItem img='https://i.imgur.com/KNloxEO.png' title='Porfolio #1'/>
    <ProjectItem img='https://i.imgur.com/FNdFy1A.png' title='Porfolio #1'/>
    <ProjectItem img='https://i.imgur.com/UoOxi66.png' title='Porfolio #1'/>
    <ProjectItem img='https://i.imgur.com/q1R78j7.png' title='Porfolio #1'/>

   </div>
  </div>
  )
}
