import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Store/CartContext";

const Products = () => {
  const [product, setProduct] = useState([]);
const {addProductToCart} = useContext(CartContext)
  const getProducts = async () => {
    const products = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/products"
    );
    setProduct(products.data?.data);
  };
  
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="d-flex flex-wrap justify-content-around p-5 align-items-center">
            {product.length !== 0 &&
              product.map((product) => (
                <div className=" col-md-4 mt-3 p-2 w-25 text-center" key={product.id}>
                  <div className=" style-product">
                  <img src={product.imageCover} className="w-75" alt="close" />
                  <h1>{product.price}</h1>
                  <button className="me-3" onClick={()=>addProductToCart(product.id)}>buy</button>
                  <button><Link to={product.id} className="link">details</Link></button>
                  </div>
                 
                </div>
              ))}
          </div>
      
    </>
  );
};

export default Products;
