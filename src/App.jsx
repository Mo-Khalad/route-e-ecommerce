import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import React, { useState } from 'react'
import Home from './Pages/Home.jsx'
import Brands from './Pages/Brands.jsx';
import Products from './Pages/Products.jsx';
import Layout from './Components/Layout.jsx';
import Cart from './Pages/Cart.jsx';
import Categories from './Pages/Categories.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import DetailsProduct from './Pages/DetailsProduct.jsx';
import TokenContextProvider from './Store/TokenContextProvider.jsx';

const router = createBrowserRouter(
  [{path:'' , element:<Layout/> , children:[
  {path:'/' , element:<Home/>},
  {path:'/brands', element:<Brands/> },
  {path:'/products', element:<Products/> },
  {path:'/cart', element:<Cart/> },
  {path:'/categories', element:<Categories/> },
  {path:'/login', element: <Login/>},
  {path:'/register', element:<Register/> },
  {path:'/products', element:<Products/> }, 
  {path:'/products/:id' , element:<DetailsProduct/>}
]}])
  
const App = () => {

  //console.log(process.env.REACT_APP_API_KEY)

  return (
    <>
     <TokenContextProvider>
     <RouterProvider router={router}/>      
     </TokenContextProvider>
    </>
  )
     
}

export default App
