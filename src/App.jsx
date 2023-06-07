import { Main } from './components/Main'
import Sidenav from './components/Sidenav'
import { Work } from './components/Work'
import { useState } from 'react'

function App() {


  return (
    <div>
      <Sidenav/>
      <Main/>
      <Work/>
      
    </div>
  )
}

export default App
