
import React from 'react'
import {TopBar , Navbar, Hero, Contact, Deals, Gallery , Settings} from './components'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
   
    <div>
      <TopBar />
      <Navbar />
     
        <Routes>
        <Route path='/' exact element={<Hero />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/deals' exact element={<Deals />} />
        <Route path='/gallery' exact element={<Gallery />} />
        <Route path='/settings' exact element={<Settings />} />
        

        <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
        
    </div>
  
   
  )
}

export default App
