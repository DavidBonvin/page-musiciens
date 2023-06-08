import { Contact } from './components/Contact'
import { Formation } from './components/Formation'
import { Main } from './components/Main'
import { Projects } from './components/Projects'
import Sidenav from './components/Sidenav'
import { Work } from './components/Work'
import { useState } from 'react'

function App() {


  return (
    <div>
      <Sidenav/>
      <Main/>
      <Work/>
      <Projects/>
      <Formation/>
      <Contact/>
      
    </div>
  )
}

export default App
