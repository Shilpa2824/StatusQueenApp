import React from 'react'
import './App.css'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import BirthdayWishes from './Pages/BirthdayWishes'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from './HomeComponents/Footer'
function App() {
  return (
<>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/home' element = {<Home/>} />
        <Route path='/birthdayWishes' element = {<BirthdayWishes/>} />
      </Routes>
    </Router>
   
   </>
  )
}

export default App
