import React, { useReducer, useRef, useState } from "react";
import { mainFormHandlerTypeRaw } from "../util/http";
import { CartContext } from "./CartContext.jsx";
import { toast } from "react-toastify";
import { data } from "react-router-dom";

let headers = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YThiYjdmZmE3ODk1ZTgxZjM4MDM1OSIsIm5hbWUiOiJBaG1lZCBBYmQgQWwtTXV0aSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzQ1MTU4OTYyLCJleHAiOjE3NTI5MzQ5NjJ9.pTeRyX3ITBqI6qkeEnYJjmT9VN2AuYbbjejFbmMYG-c",
};
const URL_CART = `api/v1/cart`;

const handleProductReducer = (state, action) => {
  if (action.type === "INIT_CART") {
    return { items: action.item };
  }

  if (action.type === "Add-ITEM") {
    const updateItems = [...state.items];
    const existingCartItemIndex = updateItems.findIndex((item) =>
      item.id === undefined
        ? item.product.id === action.item.id
        : item.id === action.item.id
    );
    if (existingCartItemIndex > -1) {
      toast('The product is in the shopping cart ' , {type:"info" , theme: "dark" ,autoClose:1000});

    } else {
      updateItems.push({ ...action.item, count: 1 });
      toast("dded to cart product" , {type:"info" , theme: "dark" , autoClose:1000});
    }
    return { ...state, items: updateItems };
  }

  if (
    action.type === "increment" ||
    action.type === "decrement" ||
    action.type === "update"
  ) {
    const updateItems = [...state.items];
    const existingCartItemIndex = updateItems.findIndex((item) =>
      item.id === undefined
        ? item.product.id === action.item.id
        : item.id === action.item.id
    );

    if (action.type === "increment") {
        toast("The number of products has been increased" , {type:"info" , theme: "dark" ,autoClose:1000})
      if (existingCartItemIndex > -1) {
        const existingItem = state.items[existingCartItemIndex];
        const updateItem = {
          ...existingItem,
          count: existingItem.count + 1,
        };
        updateItems[existingCartItemIndex] = updateItem;
      }
    }
    if (action.type === "decrement") {
      const existingCartItem = state.items[existingCartItemIndex];
      if (existingCartItem.count === 1) {
        toast("The product has been deleted" , {type:"info" , theme: "dark" ,autoClose:1000})
        updateItems.splice(existingCartItemIndex, 1);
      } else {
        toast("The number of products has been decreased" , {type:"info" , theme: "dark" ,autoClose:1000})
        const existingItem = state.items[existingCartItemIndex];
        const updateItem = {
          ...existingItem,
          count: existingItem.count - 1,
        };
        updateItems[existingCartItemIndex] = updateItem;
      }
    }

    state.items.map((product) =>
      mainFormHandlerTypeRaw({
        method: action.method,
        type: `${URL_CART}/${
          product.product === undefined ? product.id : product.product.id
        } `,
        count: product.count,
        token: { headers },
      })
    );
    return { ...state, items: updateItems };
  }

  if (action.type === "REMOVE-ITEM") {
    toast("The product has been deleted" , {type:"info" , theme: "dark" ,autoClose:1000})
    const updateItems = [...state.items];
    updateItems.splice(action.id, 1);
   
    return { ...state, items: updateItems };
  }

  if (action.type === "REMOVE-ALL") {
    toast("All items in the cart have been removed." , {type:"info" , theme: "dark" ,autoClose:1000})
    mainFormHandlerTypeRaw({
      method: "REMOVE-ALL-CART-ITEM",
      type: `${URL_CART}`,
      token: { headers },
    });
    return { ...state, items: [] };
  }
  return state.items;
};

const CartContextProvider = ({ children }) => {
  const [cart, dispatchCartAction] = useReducer(handleProductReducer, {
    items: [],
  });
  const [placeholder , setPlaceholder]=useState("")


  const addProductToCart = async (item) => {
    let indexProduct = cart.items.findIndex((cartItem) =>
      cartItem.id === undefined
        ? cartItem.product.id === item.id
        : cartItem.id === item.id
    );

    dispatchCartAction({
      type: "Add-ITEM",
      item,
    });

    if (indexProduct === -1) {
      return mainFormHandlerTypeRaw({
        method: "post",
        type: URL_CART,
        fromData: item.id,
        token: { headers },
      });
    }
  };

  const updateProductInCart = (item, count, type, method) => {
    dispatchCartAction({
      item,
      count,
      type,
      method,
    });
  };

  const removeSpecificCartItem =async (id) => {
   
    setPlaceholder("placeholder")
    dispatchCartAction({
      type: "REMOVE-ITEM",
      id,
    });

   const data = await mainFormHandlerTypeRaw({
      method: "delete",
      type: `${URL_CART}/${id}`,
      token: { headers },
    });
    console.log(data.status);
    if(data.status==="success"){      
      setPlaceholder('')
    }
  };

  const fetchCart = async () => {
    const { data } = await mainFormHandlerTypeRaw({
      method: "get",
      type: URL_CART,
      token: { headers },
    });
    dispatchCartAction({
      type: "INIT_CART",
      item: data?.products || [],
    });
  };

  const clearUserCartProducts = () => {    
    setPlaceholder("placeholder")
    setTimeout(() => {
      setPlaceholder('')
    }, 3000);
    dispatchCartAction({
      type: "REMOVE-ALL",
    });
  };

  const cartCrx = {
    items: cart.items,
    addProductToCart,
    updateProductInCart,
    removeSpecificCartItem,
    clearUserCartProducts,
    fetchCart,
    placeholder,
  };

  return (
    <>
      <CartContext value={cartCrx}>{children}</CartContext>
    </>
  );
};

export default CartContextProvider;
