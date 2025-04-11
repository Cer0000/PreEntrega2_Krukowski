import './App.css'
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
        <Route exact path="/category/:categoryID" element={<ItemListContainer />} />
        <Route exact path="/item/:productId" element={<ItemDetailContainer />} />
        <Route exact path="/cart" element={<div>Mi carrito</div>} />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
