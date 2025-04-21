import React, { useEffect, useState } from "react";
import { mainFormHandlerTypeRaw } from "../util/http";
import { useParams } from "react-router-dom";
const DetailsProduct = () => {
  const [product, setProduct] = useState([]);
  const id = useParams().id;

  const getProducts = async (id) => {
    const products =await mainFormHandlerTypeRaw({
      method: "get",
      type: `https://ecommerce.routemisr.com/api/v1/products/${id}`,
    });    
    setProduct(products?.data);
  };

  useEffect(() => {
    getProducts(id);
  }, [id]);
  
    return (
      <>
        <div className="d-flex flex-wrap justify-content-around p-5 align-items-center">
            
                  <div className="col-md-4 mt-3 w-25 text-center">
                    <img src={product.imageCover} width={200} height={200} alt={product.title} />  
                    <h4>{product.title}</h4>
                    <h4>{product.description}</h4>
                    <h5>{product.price}</h5>
                    <h6>{product.ratingsAverage}</h6>
                  </div>
                
            </div>
  </>)
};

export default DetailsProduct;
