import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Home from './views/home.jsx'
import Contacto from './views/contacto'
import NotFound from './views/NotFound'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={ <Home /> }></Route>
          <Route path='/contacto' element={ <Contacto /> }></Route>
          <Route path='*'element={ <NotFound/> } ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>

  )
}

export default App
