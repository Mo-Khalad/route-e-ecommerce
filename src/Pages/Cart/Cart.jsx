import React, { Fragment, useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CartContext } from "../../Store/CartContext";
import { totalPriceProduct } from "../../Logic/Logic";
import { totalPriceProducts } from "../../Logic/Logic";
import { totalCartItems } from "../../Logic/Logic";
import Button from "../../Components/Ui/Button";
import Style from "./Cart.module.css";
import CartItems from "./CartItems";
const Cart = () => {
  const [beforeUnloadEvent, setBeforeUnloadEvent] = useState("");

  const {
    items,
    placeholder ,
    removeSpecificCartItem,
    updateProductInCart,
    clearUserCartProducts,
  } = useContext(CartContext);
  const totalCart = totalCartItems(items);

  useEffect(() => {
    return () => {
      const callUpdateProductInCart = (type, method) => {
        updateProductInCart("", "", type, method);
      };
      callUpdateProductInCart("update", "put");
    };
  }, []);

  useEffect(() => {
    if (
      beforeUnloadEvent === "increment" ||
      beforeUnloadEvent === "decrement"
    ) {
      const unloadCallback = (event) => {
        event.preventDefault();
      };
      window.addEventListener("beforeunload", unloadCallback);
      return () => window.removeEventListener("beforeunload", unloadCallback);
    }
  }, [beforeUnloadEvent]);

  return (
    <div className={`${Style.cartCover}`}>
      <Container>
        <Row>
          <Col md={9} className={`mt-5 mb-5 bg-light ${placeholder}`}>
            <h3 className="h3 mt-2">my cart ({totalCart})</h3>
            <hr className="w-100"/>
            <div
              className={`${Style.cartItems} d-flex flex-wrap justify-content-between align-items-center w-100`}
            >
              {(items.message !== "success") &&( items.length !== 0 )? (
                items?.map((product) => {
                  return (
                    <CartItems
                      product={product}
                      updateProductInCart={updateProductInCart}
                      setBeforeUnloadEvent={setBeforeUnloadEvent}
                      totalPriceProduct={totalPriceProduct}
                      removeSpecificCartItem={removeSpecificCartItem}
                      key={product.id}
                    />
                  );
                })
              ) : (
                ( placeholder!== "placeholder" ) &&
                <h4 className="mt-5 m-auto"> cart is empty </h4>
              )}

            </div>
            {items.length !== 0 && (
                <Button
                  className={`${Style.clearAllBtn} p-1 pe-4 ps-4 mx-3 my-3 border`}
                  onClick={clearUserCartProducts}
                >
                  clear all
                </Button>
              )}
          </Col>
          <Col md={3} className="mt-5 mb-5">
            <div className={`${Style.OrderSummary} bg-light p-2`}>
              <h6>Order summary</h6>
              <hr className="w-100" />
              <ul className="d-flex flex-wrap justify-content-between">
                <li>Subtotal</li>
                <li> ${totalPriceProducts(items)}</li>
              </ul>
              <h6>Estimate Delivery</h6>
              <hr className="w-100" />
              <ul className="d-flex flex-wrap justify-content-between">
                <li>Total</li>
                <li>${totalPriceProducts(items)}</li>
              </ul>
              <Button className={`${Style.checkOutBtn} p-2 w-100 border-0`}>
                checkOut
              </Button>
              <h6 className="text-center mt-2">Secure Checkout</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
