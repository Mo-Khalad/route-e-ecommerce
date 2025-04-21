import { createContext } from "react";

export const CartContext= createContext({
  items:[] ,
  addProductToCart:()=>{} , 
  updateCartProductQuantity:()=>{},
  removeSpecificCartItem:()=>{} ,
  clearUserCart:()=>{},
  getCart:()=> {},
}) 