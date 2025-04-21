import   { useEffect, useState } from "react";
import { mainFormHandlerTypeRaw } from "../util/http.jsx";

const Categories = () => {
  const [category , setCategory] = useState([]);

  const getCategory = async () => {
    const cate =   await mainFormHandlerTypeRaw({
      method: "get",
      type: "https://ecommerce.routemisr.com/api/v1/categories",
    })
     setCategory(cate?.data)    
  };

  useEffect(() => {
    getCategory();
  }, []);
 
  return (
    <>
      <div className="d-flex flex-wrap justify-content-around p-5 align-items-center">
        {category?.length !== 0 &&
          category?.map((category) => (
            <div className="col-md-4 mt-3 w-25 text-center">
              <img src={category.image} width={200} height={200} alt="close" />
              <h4>{category.name}</h4>
            </div>
          ))}
      </div>
    </>
  );
};

export default Categories;
