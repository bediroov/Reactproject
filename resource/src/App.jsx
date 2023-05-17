import React, { useContext } from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { ProductProvider } from './context/ProductContext'
import { CartProvider } from 'react-use-cart'
import Basket from './pages/Basket'
import DetailPage from './pages/DetailPage'
import Product from './pages/Product'
import Shop from './pages/Shop'
import { ColorContext, ColorProvider } from './context/ColorContext'
import "./i18n/i18n"

const Mode=()=>{
  const [mode,setMode] =useContext(ColorContext);
return(
<div className={mode}>

<CartProvider>
        <ProductProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/product' element={<Product />}></Route>
            <Route  path='/product/:bir' element={<DetailPage/>}></Route>
            <Route path='/basket' element={<Basket />}></Route>
            <Route path='/shop' element={<Shop />}></Route>
          </Routes>
        </ProductProvider>
      </CartProvider>

      </div>

)

}




const App = () => {
  
  return (

    <BrowserRouter>
<ColorProvider> 
<Mode/>
</ColorProvider>
    </BrowserRouter>
  
  )
}

export default App