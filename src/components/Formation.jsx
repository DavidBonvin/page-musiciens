import React from 'react'
import { WorkItem } from './WorkItem'
const data= [

 {
  year:2022,
  title: 'TP Développeur web et web mobile (Bac + 2)',
  duration: '8 mois',
  details: "Formation professionnelle sur site pour la mise en œuvre backend d'applications web utilisant php avec Symfony et javascript. Introduction de MVC et d'autres modèles de conception, conception et mise en œuvre de la base de données en utilisant mariadb, Doctrine, utilisation de microservices pour l'authentification de l'application, utilisation d'API externes en utilisant AJAX et diagrammes UML. "
 },
 {
  year:2022,
  title: "Techniques de base du développement d'applications",
  duration: '2 mois',
  details: "Maîtriser les bases de l'algoritmique préalable à l'approche programation objet. "
 },
 {
  year:2022,
  title: 'Apple Foundation Program ',
  duration: '1 mois',
  details: "Formation à la conception et au développement d'une application iOS en Swift. Outils : xcode "
 },
 {
  year:2023,
  duration: "4 mois",
  title: 'Nurserie Numérique: ',
  details: "Formation au développement web en utilisant HTML CSS et JavaScript, introduction et pratique de SQL et des méthodologies agiles "
 },
]
export const Formation = () => {
  return (
   <div id='formation' className='max-w-[1040px] m-auto
     md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center mb-4 text-[#001b5e]' >Formation</h1>
     {data.map((item, idx) => (
       <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
     ))}
    </div>
  )
}
