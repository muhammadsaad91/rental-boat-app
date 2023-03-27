import React from 'react'
import Main from './components/Home/Main'
import Navbar from './components/header/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SingleProduct from './components/SingleProduct'
import Login from './components/Login'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer'
import Products from "./components/Products/Product";



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/product/:handle' element={<SingleProduct />}/>
        <Route path='/cart' element={<Cart   />}/>
        <Route path='/products' element={<Products />}/>
      </Routes>
      <Footer />
      </BrowserRouter>


    </div>
  )
}

export default App
