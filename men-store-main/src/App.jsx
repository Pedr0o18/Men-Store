/* React Routes */
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

/* Importação de Hooks */
import { useState, useEffect } from 'react'
import { useAuthenticated } from './hooks/useAuthenticated'

/* Importação de Componentes */
import NavBar from './components/NavBar'
import MarketCart from './components/MarketCart'

/* Importação do Context */
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'

/* Importação das Páginas */
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Products from './pages/Products/Products'
import ProductsDetails from './pages/ProductsDetails/ProductsDetails'
import Register from './pages/Register/Register'
import Perfil from './pages/Perfil/Perfil'
import { PrivateRoute } from './pages/PrivateRoute/PrivateRoute'


function App() {

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthenticated() 

  const loadingUser = user === undefined

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{user}}>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <MarketCart  />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:productType' element={<Products />} />
            <Route path='/productdetails/:id' element={<ProductsDetails />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/perfil' element={<PrivateRoute><Perfil /></PrivateRoute>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
      </AuthProvider>
    </div>
  )
}

export default App
