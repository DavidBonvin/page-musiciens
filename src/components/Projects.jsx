import { ProjectItem } from './ProjectItem'
import React from 'react'

export const Projects = () => {
  return (
   <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
   <h1 className='text-4xl font-bold text-center mb-4 text-[#001b5e]'>Projects</h1>
   <p className='text-center py-8'>
    
   </p>
   <div className=' grid sm:grid-cols-2 gap-12'>
   <ProjectItem img='https://i.imgur.com/vk8xO9F.png' title='Web 3D' url='https://porfolio3d-liard.vercel.app/#about'/>
   <ProjectItem img='https://i.imgur.com/UoOxi66.png' title='Ekna' url='https://www.ekna.fr/'/>
    <ProjectItem img='https://i.imgur.com/KNloxEO.png' title='Porfolio #1' url='https://davidbonvin.github.io/David-Bonvin/'/>
    <ProjectItem img='https://i.imgur.com/7utvTGm.png' title='Porfolio #2' url='https://www.davidbovin.com/' />
    
    <ProjectItem img='https://i.imgur.com/q1R78j7.png' title='Tree-up' url='https://github.com/DavidBonvin/personal-project---social-network'/>

   </div>
  </div>
  )
}
