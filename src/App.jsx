import './App.css'
import React, { useEffect } from 'react'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import './Styles.css'

function App() {
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/productos" element={<ItemListContainer />} />
        <Route exact path="/detail/:productoId" element={<ItemDetailContainer />} />
        <Route exact path="categorias/:categoriaID" element={<div>electronics</div>} />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
