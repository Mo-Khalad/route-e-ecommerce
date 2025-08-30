import React, { Fragment } from "react";
import { useFetch } from "../../Hooks/useFetch";
import { Container, Row, Col } from "react-bootstrap";
import Loading from "../../Components/Loading.jsx";
import Style from './ShowAllOrders.module.css'
const ShowAllOrders= () => {
 const id = JSON.parse(localStorage.getItem("id")) 
 
const method = id === null ?'' : "get" 

  const { data, loading } = useFetch({
    method,
    type: `api/v1/orders/user/${id}`,
  });

 const details = data?.data;
 
   if( loading ) return <Loading/> 
   else {
   if( id !==null ){
    return ( <>
    <div className={`${Style.all_orders} w-100`}>
      <Container>
        <Row>
          <Col md={12}>
            {details?.map((data) => {
              return (
                <Fragment key={data.id}>
                    <div className="d-flex flex-wrap justify-content-center align-items-center w-100 my-5 bg-light p-2">
                      <Col
                        md={6}
                        ls={12}
                        sm={12}
                        className="d-flex flex-wrap align-items-center my-3"
                      >
                        {data.cartItems.map((cartItem) => {
                          return (
                            <Fragment key={cartItem._id}>
                              <Col md={12} className="my-3 d-flex">
                                <img
                                  src={cartItem.product.imageCover}
                                  className="me-3"
                                  alt="images"
                                  width={150}
                                />
                                <div>
                                  <h3 className={Style.h3_content}>
                                    Title : <span className={`${Style.span_content} order-title`}>
                                      {cartItem.product.title}
                                    </span>
                                  </h3>

                                  <h3 className={Style.h3_content}>
                                    Price : <span className={Style.span_content}>${cartItem.price}</span>
                                  </h3>
                                  <h3 className={Style.h3_content}>
                                    Count : <span className={Style.span_content}>{cartItem.count}</span>
                                  </h3>
                                </div>
                              </Col>
                            </Fragment>
                          );
                        })}
                      </Col>

                      <Col
                        lg={5}
                        md={6}
                        ls={12}
                        sm={12}
                        className="p-3 my-3"
                      >
                        <h2 >Order Details</h2>
                        <h3 className={Style.h3_content}>
                          Name : <span className={Style.span_content}>{data.user.name}</span>
                        </h3>
                        <h3 className={Style.h3_content}>
                          Email : <span className={Style.span_content}>{data.user.email}</span>
                        </h3>
                        <h3 className={Style.h3_content}>
                          Id : <span className={Style.span_content}> {data.id} </span>
                        </h3>

                        <h3 className={Style.h3_content}>
                          Time : <span className={Style.span_content}>{data.createdAt}</span>
                        </h3>

                        <h3 className={Style.h3_content}>
                          Total Order Price : <span className={Style.span_content}> ${data.totalOrderPrice}</span>
                        </h3>
                      </Col>
                    </div>
                </Fragment>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
    </>  
  );
   } else return <div className={`w-100 ${Style.No_purchase} d-flex align-items-center justify-content-center`}>
    <h5 className={`${Style.h5_content}bg-light w-100 p-5 text-center`}>No purchase has been made yet.</h5>
   </div> 
  }
  
};

export default ShowAllOrders;
