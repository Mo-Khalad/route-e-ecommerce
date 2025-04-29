import { createContext } from "react";

export const CartContext= createContext({
  items:[] ,
  addProductToCart:()=>{} , 
  updateProductInCart:()=>{},
  removeSpecificCartItem:()=>{} ,
  clearUserCartProducts:()=>{},
  fetchCart:()=>{},
}) 