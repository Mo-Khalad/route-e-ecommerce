import React, { useState } from "react";
import { mainFormHandlerTypeRaw } from "../util/http";
import { CartContext } from "./CartContext.jsx";
import axios from "axios";

const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState();
  const URL_CART =`api/v1/cart`
  let headers = {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YThiYjdmZmE3ODk1ZTgxZjM4MDM1OSIsIm5hbWUiOiJBaG1lZCBBYmQgQWwtTXV0aSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzQ1MTU4OTYyLCJleHAiOjE3NTI5MzQ5NjJ9.pTeRyX3ITBqI6qkeEnYJjmT9VN2AuYbbjejFbmMYG-c",
  };

  const addProductToCart = async (id) => {
    return await mainFormHandlerTypeRaw({
      method: "post",
      type: URL_CART,
      fromData: { productId: id },
      token: { headers },
    });
  };

  const removeSpecificCartItem = async (id) => {
    let { data } = await axios.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        headers,
      }
    );
    setItems(data);
    return data;
  };

  const getLoggedUserCart = async () => {
  const itemsLoggedUserCart = await mainFormHandlerTypeRaw({
      method: "get",
      type: URL_CART,
      token:{headers} ,
  })
    
    return itemsLoggedUserCart;
  };

  const getCart = async() => {
    let data   = await getLoggedUserCart();
    console.log(data);
    setItems(data);
  };

  const updateCartProductQuantity = async (id , count) => {
    let data = await mainFormHandlerTypeRaw({
      method: "put",
      type: `${URL_CART}/${id}`,
      count: count,
      token: {headers} ,
    });
    setItems(data);
  };
  
  const clearUserCart = async () => {
    const { data } = await axios.delete(`https://ecommerce.routemisr.com/${URL_CART}`,
      { headers }
    );
    setItems(data);
  };

  return (
    <>
      <CartContext.Provider
        value={{
          addProductToCart,
          items,
          removeSpecificCartItem,
          getCart,
          clearUserCart,
          updateCartProductQuantity,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;










/*

*/