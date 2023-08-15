import React from 'react'
import Product from './Component/Product/Product'
import Cart from './Component/Cart/Cart'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App