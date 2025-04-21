import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Brands = () => {
    const [product, setProduct] = useState([]);

    const getProducts = async () => {
      const products = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/brands"
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
                  <div className="col-md-4 mt-3 w-25 text-center">
                    <img src={product.image} width={200} height={200} alt="close" />  
                  </div>
                ))}
            </div>
  </>)
}

export default Brands

