import React from "react";
import { Link, NavLink } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { Fragment } from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';

const Search = ({product , toggle , change}) => {


console.log(toggle);






/*
  return (
  <>
          
    <Dropdown.Menu show>
      { product.map(Item=>{
        return (
            <Dropdown.Item eventKey="1" className="fs-6" key={Item.id}>
              <NavLink to={`/products/${Item.id}`} className="search-text">
                {Item.description}
              </NavLink>
              </Dropdown.Item>
        )
      })}
      
    </Dropdown.Menu>
    
  </>
  
  )
  */  
 

/*
   

      <div
        className="offcanvas offcanvas-top"
      
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasTopLabel">
            Offcanvas top
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">...</div>
      </div>
    </div>
  );*/
};

export default Search;


/*
   <div>
        {product.map((item)=>{
          return (
            <Link to={`/products/${item.id}`}>{item.description}</Link>
          )
        })}
      </div>
*/