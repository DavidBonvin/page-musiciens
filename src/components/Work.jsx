import React from 'react'
import { WorkItem } from './WorkItem'

const data= [
 {
  year:2022,
  duration: "4 mois",
  title: 'Encubateur Eurategnologie',
  details: 'Realmente estuvo muy chevere trabajar en este lugar, alli hice una applicacion en microcervicios '
 },
 {
  year:2022,
  title: 'Dévelopeur web et web mobile Bac + 2',
  duration: '8 mois',
  details: 'Realmente estuvo muy chevere trabajar en este lugar, alli hice una applicacion en microcervicios '
 },
 {
  year:2022,
  title: 'Tachneque de base - algoritmos',
  duration: '2 mois',
  details: 'Realmente estuvo muy chevere trabajar en este lugar, alli hice una applicacion en microcervicios '
 },
 {
  year:2022,
  title: 'Apple fundation',
  duration: '1 mois',
  details: 'Realmente estuvo muy chevere trabajar en este lugar, alli hice una applicacion en microcervicios '
 },
 {
  year:2022,
  title: 'Nursurie Numerique',
  duration: '1 mois',
  details: 'Realmente estuvo muy chevere trabajar en este lugar, alli hice una applicacion en microcervicios '
 },
]
export const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto
     md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
     {data.map((item, idx) => (
       <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
     ))}
    </div>
  )
}
