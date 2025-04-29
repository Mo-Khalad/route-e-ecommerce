import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import React, { useContext, useEffect, useRef }  from 'react'
import Home from './Pages/Home.jsx'
import Brands from './Pages/Brands.jsx';
import Products from './Pages/Products.jsx';
import Layout from './Components/Layout.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import Categories from './Pages/Categories.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import DetailsProduct from './Pages/DetailsProduct.jsx';
import { CartContext } from './Store/CartContext.jsx';
import { ToastContainer } from 'react-toastify';
import CartContextProvider from './Store/CartContextProvider.jsx';


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

const { fetchCart } = useContext(CartContext)
const callFetchCart =()=>{
    fetchCart()
}

useEffect(() => {
    callFetchCart();
}, []);

  return (
    <>
     <RouterProvider router={router}/>   
     <ToastContainer/>
    </>
  )
  
}


export default App
