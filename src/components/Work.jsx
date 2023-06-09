import React from 'react'
import { WorkItem } from './WorkItem'

const data= [
 {
  year:2023,
  duration: "4 mois",
  title: 'Tree-up - INSY2S ',
  details: "Cofondateur du réseau social pour les développeurs et des projets d'incubation, J'étais responsable de la conception, de l'enregistrement, de la connexion des utilisateurs et de l'ajout de partenaires aux projets publiés sur le réseau social, à la fois dans le backend et dans le frontend. "
 },
 {
  year:2022,
  title: 'EKNA - Start-up ',
  duration: '2 mois',
  details: "Ekna est une start-up qui utilise un algorithme propriétaire pour trouver des logements en fonction de la compatibilité des colocataires. J’y étais responsable de l'implémentation de nouvelles fonctionnalités de l'interface comme l'intégration de google maps, la refonte du profil utilisateur, l'utilisation du drag and drop pour attribuer des avis aux autres utilisateurs "
 },
 {
  year:2022,
  title: 'Fil rouge - PROPAR ',
  duration: '3 mois',
  details: "Mise en œuvre complète de l'application pour la gestion du personnel de nettoyage, des clients, des ordres de service et de la facturation. Elle comprend également des graphiques de statistiques sur les commandes et les ventes "
 },
 {
  year:2022,
  title: 'SIRIUS - App  mobile (iOS) ',
  duration: '1 mois',
  details: "Il s'agit d'une application IOS en Swift développée pour promouvoir l'intérêt pour l'espace, intégrée à une API en temps réel pour fournir des informations sur les étoiles, avec des quiz et des podcasts "
 },
 
]
export const Work = () => {
  return (
    <div id='experiences' className='max-w-[1040px] m-auto
     md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center mb-4 text-[#001b5e]' >Expérience</h1>
     {data.map((item, idx) => (
       <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
     ))}
    </div>
  )
}
