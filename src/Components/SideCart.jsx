import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState } from "react";
import img from "../images/cover-login.jpg";
const SideCart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <span>cart</span> (1 items)
          </Offcanvas.Title>
        </Offcanvas.Header>

        <hr />
        <div className="h-50 w">
          <div>
            <ul className="w-100 d-flex justify-content-between">
              <li>
                <li>
                  <img src={img} alt="product" width={100} />
                </li>
                <li className="w-100 mt-2 text-center">
                  <button className="increment">+</button>
                  <span>1</span>
                  <button className="decrement">-</button>
                </li>
              </li>
              <li>
                <h6>name product</h6>
                <h5>50 $</h5>
                <p>Lorem ipsum dolor </p>
              </li>
              <li>
                <svg
                  className="mb-2 svg-color"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13.5,3 C14.327,3 15,3.673 15,4.5 L15,4.5 L15,5 L19,5 L19,6 L18,6 L18,17.5 C18,18.879 16.878,20 15.5,20 L15.5,20 L7.5,20 C6.122,20 5,18.879 5,17.5 L5,17.5 L5,6 L4,6 L4,5 L8,5 L8,4.5 C8,3.673 8.673,3 9.5,3 L9.5,3 Z M17,6 L6,6 L6,17.5 C6,18.327 6.673,19 7.5,19 L7.5,19 L15.5,19 C16.327,19 17,18.327 17,17.5 L17,17.5 L17,6 Z M10,9 L10,16 L9,16 L9,9 L10,9 Z M14,9 L14,16 L13,16 L13,9 L14,9 Z M13.5,4 L9.5,4 C9.224,4 9,4.225 9,4.5 L9,4.5 L9,5 L14,5 L14,4.5 C14,4.225 13.776,4 13.5,4 L13.5,4 Z"
                  ></path>
                </svg>
                <h5 className="mt-5">48.00$</h5>
              </li>
            </ul>

          </div>

          <hr className="w-100"/>

          <div>
            <ul className="w-100 d-flex justify-content-between">
              <li>
                <li>
                  <img src={img} alt="product" width={100} />
                </li>
                <li className="w-100 mt-2 text-center">
                  <button className="increment">+</button>
                  <span>1</span>
                  <button className="decrement">-</button>
                </li>
              </li>
              <li>
                <h6>name product</h6>
                <h5>50 $</h5>
                <p>Lorem ipsum dolor </p>
              </li>
              <li>
                <svg
                  className="mb-2 svg-color"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13.5,3 C14.327,3 15,3.673 15,4.5 L15,4.5 L15,5 L19,5 L19,6 L18,6 L18,17.5 C18,18.879 16.878,20 15.5,20 L15.5,20 L7.5,20 C6.122,20 5,18.879 5,17.5 L5,17.5 L5,6 L4,6 L4,5 L8,5 L8,4.5 C8,3.673 8.673,3 9.5,3 L9.5,3 Z M17,6 L6,6 L6,17.5 C6,18.327 6.673,19 7.5,19 L7.5,19 L15.5,19 C16.327,19 17,18.327 17,17.5 L17,17.5 L17,6 Z M10,9 L10,16 L9,16 L9,9 L10,9 Z M14,9 L14,16 L13,16 L13,9 L14,9 Z M13.5,4 L9.5,4 C9.224,4 9,4.225 9,4.5 L9,4.5 L9,5 L14,5 L14,4.5 C14,4.225 13.776,4 13.5,4 L13.5,4 Z"
                  ></path>
                </svg>
                <h5 className="mt-5">48.00$</h5>
              </li>
            </ul>

          </div>
          <hr className="w-100"/>


          <div>
            <ul className="w-100 d-flex justify-content-between">
              <li>
                <li>
                  <img src={img} alt="product" width={100} />
                </li>
                <li className="w-100 mt-2 text-center">
                  <button className="increment">+</button>
                  <span>1</span>
                  <button className="decrement">-</button>
                </li>
              </li>
              <li>
                <h6>name product</h6>
                <h5>50 $</h5>
                <p>Lorem ipsum dolor </p>
              </li>
              <li>
                <svg
                  className="mb-2 svg-color"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13.5,3 C14.327,3 15,3.673 15,4.5 L15,4.5 L15,5 L19,5 L19,6 L18,6 L18,17.5 C18,18.879 16.878,20 15.5,20 L15.5,20 L7.5,20 C6.122,20 5,18.879 5,17.5 L5,17.5 L5,6 L4,6 L4,5 L8,5 L8,4.5 C8,3.673 8.673,3 9.5,3 L9.5,3 Z M17,6 L6,6 L6,17.5 C6,18.327 6.673,19 7.5,19 L7.5,19 L15.5,19 C16.327,19 17,18.327 17,17.5 L17,17.5 L17,6 Z M10,9 L10,16 L9,16 L9,9 L10,9 Z M14,9 L14,16 L13,16 L13,9 L14,9 Z M13.5,4 L9.5,4 C9.224,4 9,4.225 9,4.5 L9,4.5 L9,5 L14,5 L14,4.5 C14,4.225 13.776,4 13.5,4 L13.5,4 Z"
                  ></path>
                </svg>
                <h5 className="mt-5">48.00$</h5>
              </li>
            </ul>

          </div>

          <hr className="w-100"/>

      
      
         </div> 
          
         <div>
          <h3>Subtotal</h3>
          <h6>
            Taxes and shipping are calculated at checkout. <span>80$</span>
            <button className="w-100 p-2 bg-info border-0 m-2 text-light">
              checkOut
            </button>
            <button className="w-100 p-2 bg-info border-0 m-2 text-light">
              View Cart
            </button>
            <h6 className="text-center">Secure Checkout</h6>
          </h6>
        </div>

      </Offcanvas>
    </>
  );
 

};

export default SideCart;
/*
          <div>
            <ul className="w-100 d-flex justify-content-between">
              <li>
                <li>
                  <img src={img} alt="product" width={100} />
                </li>
                <li className="w-100 mt-2 text-center">
                  <button className="increment">+</button>
                  <span>1</span>
                  <button className="decrement">-</button>
                </li>
              </li>
              <li>
                <h6>name product</h6>
                <h5>50 $</h5>
                <p>Lorem ipsum dolor </p>
              </li>
              <li>
                <svg
                  className="mb-2 svg-color"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13.5,3 C14.327,3 15,3.673 15,4.5 L15,4.5 L15,5 L19,5 L19,6 L18,6 L18,17.5 C18,18.879 16.878,20 15.5,20 L15.5,20 L7.5,20 C6.122,20 5,18.879 5,17.5 L5,17.5 L5,6 L4,6 L4,5 L8,5 L8,4.5 C8,3.673 8.673,3 9.5,3 L9.5,3 Z M17,6 L6,6 L6,17.5 C6,18.327 6.673,19 7.5,19 L7.5,19 L15.5,19 C16.327,19 17,18.327 17,17.5 L17,17.5 L17,6 Z M10,9 L10,16 L9,16 L9,9 L10,9 Z M14,9 L14,16 L13,16 L13,9 L14,9 Z M13.5,4 L9.5,4 C9.224,4 9,4.225 9,4.5 L9,4.5 L9,5 L14,5 L14,4.5 C14,4.225 13.776,4 13.5,4 L13.5,4 Z"
                  ></path>
                </svg>
                <h5 className="mt-5">48.00$</h5>
              </li>
            </ul>
          </div>
        </div>
        <hr />

     */