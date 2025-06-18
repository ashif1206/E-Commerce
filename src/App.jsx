
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import CardItems from './pages/CardItems';
import SearchProducts from './pages/SearchProducts';

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={ <LandingPage/>} />
    <Route path='/carditem' element={ <CardItems/>} />
    <Route path='/search' element={ <SearchProducts/>} />

    </Routes>

    <Footer/>
    </BrowserRouter>
   
    
    </>
  )
}

export default App