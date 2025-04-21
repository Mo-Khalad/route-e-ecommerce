import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CartContext } from "../Store/CartContext";
const Cart = () => {
  const {removeSpecificCartItem , items , getCart , updateCartProductQuantity , clearUserCart} = useContext(CartContext)
 
  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md={9} className="mt-5">
            <h3>my cart</h3>
            <hr className="w-100" />
            <div className="content-cart d-flex flex-wrap justify-content-between w-100 align-items-center">
              {items?.message!=="success" ? items?.data.products.map((product) => {

                return (
                  <>
                    <div className="w-75">
                      <ul className="d-flex ">
                        <li>
                          <img
                            src={`${product.product.imageCover}`}
                            alt={product.product.title}
                            width={80}
                          />
                        </li>
                        <li className="p-2">
                          <p>{product.product.title}</p>
                          <p>{product.price}$</p>
                        </li>
                      </ul>
                    </div>

                    <div className="w-25">
                      <ul className=" d-flex justify-content-between align-items-center h-100">
                        <li>
                          <button className="increment" onClick={()=>updateCartProductQuantity(product.product.id , product.count+1 )}>+</button>
                          <span>{product.count}</span>
                          <button className="decrement"  onClick={()=>updateCartProductQuantity(product.product.id , product.count-1 )}>-</button>
                        </li>
                        <li>{product.price * product.count}$</li>
                        <li>
                          <svg
                            className="mb-2 svg-color"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width="24"
                            height="24"
                            onClick={() =>
                              removeSpecificCartItem(product.product.id)
                            }
                          >
                            <path
                              fill-rule="evenodd"
                              d="M13.5,3 C14.327,3 15,3.673 15,4.5 L15,4.5 L15,5 L19,5 L19,6 L18,6 L18,17.5 C18,18.879 16.878,20 15.5,20 L15.5,20 L7.5,20 C6.122,20 5,18.879 5,17.5 L5,17.5 L5,6 L4,6 L4,5 L8,5 L8,4.5 C8,3.673 8.673,3 9.5,3 L9.5,3 Z M17,6 L6,6 L6,17.5 C6,18.327 6.673,19 7.5,19 L7.5,19 L15.5,19 C16.327,19 17,18.327 17,17.5 L17,17.5 L17,6 Z M10,9 L10,16 L9,16 L9,9 L10,9 Z M14,9 L14,16 L13,16 L13,9 L14,9 Z M13.5,4 L9.5,4 C9.224,4 9,4.225 9,4.5 L9,4.5 L9,5 L14,5 L14,4.5 C14,4.225 13.776,4 13.5,4 L13.5,4 Z"
                            ></path>
                          </svg>
                        </li>
                      </ul>
                    </div>
                    <hr className="w-100" />
                  </>
                );
              })
            :"cart is empty"}
            </div>
          </Col>
          <Col md={3}>
            <div className="p-2">
              <h6>Order summary</h6>
              <hr className="w-100" />
              <ul className="d-flex flex-wrap justify-content-between">
                <li>Subtotal</li>
                <li> $1,150.00</li>
              </ul>
              <h6>Estimate Delivery</h6>
              <hr className="w-100" />
              <ul className="d-flex flex-wrap justify-content-between">
                <li>Total</li>
                <li>200$</li>
              </ul>
              <button className="border-0 border-info bg-info p-2 w-100">
                checkOut
              </button>
              <h6 className="text-center mt-2">Secure Checkout</h6>
            </div>
          </Col>
        </Row>
      </Container>
      <button onClick={clearUserCart}>clear all cart</button>

    </>
  );
};

export default Cart;

