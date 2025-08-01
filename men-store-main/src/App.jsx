/* React Routes */
import {BrowserRouter, Routes, Route} from 'react-router-dom'

/* Importação de Componentes */
import NavBar from './components/NavBar'

/* Importação das Páginas */
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Products from './pages/Products/Products'
import ProductsDetails from './pages/ProductsDetails/ProductsDetails'
import Register from './pages/Register/Register'


function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:id' element={<Products />} />
          <Route path='/productdetails/:id' element={<ProductsDetails />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
