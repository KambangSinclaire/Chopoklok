import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
// import Products from "../../assets/Data/Products";
import '../../Styles/menu.css';
 import Products from "../../assets/Data/Products";

function Menu() {
     const product2 = Products;

    //  function addToCart(item) {
    //     let basket2 = [...cart]
    //     basket2.push({ ...item })
    //     products.map((i) => {
    //       if (i.id === item.id) {
    //         i.basket = true
    //       }
    //     })
    //     setCart(basket2)
    
    //   }

  return (<>
      <div className="main">
        <div className="filter">
            <h1>Filtering Products</h1>
        </div>
        <div className="p-cards">
        <MDBContainer>
      <h4 className="mt-4 mb-5">
        <strong>MENU</strong>
      </h4>

      <MDBRow>
            
            {Products.map((prods,i)=>(
                      <MDBCol md="10" lg="4" className="mb-4">
                      <MDBCard key={i}>
                        <MDBRipple
                          rippleColor="light"
                          rippleTag="div"
                          className="bg-image rounded hover-zoom"
                        >
                          <MDBCardImage
                            src={prods.image01}
                            fluid
                            className="w-100"
                          />
                          <a href="#!">
                            <div className="mask">
                             
                            </div>
                            <div className="hover-overlay">
                              <div
                                className="mask"
                                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                              ></div>
                            </div>
                          </a>
                        </MDBRipple>
                        <MDBCardBody>
                          <a href="#!" className="text-reset">
                            <h5 className="card-title mb-3">{prods.title}</h5>
                          </a>
                          <a href="#!" className="text-reset">
                            <p>{prods.category}</p>
                          </a>
                          <h6 className="mb-3">{prods.price}</h6>
                          <MDBBtn rounded className='mx-3' color='danger'>Add To Cart</MDBBtn>
                          <MDBBtn>View Cart</MDBBtn>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
            ))
            
            
            }

        


        {/* <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      <span className="badge bg-success ms-2">Eco</span>
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">Product name</h5>
              </a>
              <a href="#!" className="text-reset">
                <p>Category</p>
              </a>
              <h6 className="mb-3">$61.99</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol> */}



        {/* <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).webp"
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      <span className="badge bg-danger ms-2">-10%</span>
                    </h5>
                  </div>
                </div>
                <div class="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">Product name</h5>
              </a>
              <a href="#!" className="text-reset">
                <p>Category</p>
              </a>
              <h6 className="mb-3">
                <s>$61.99</s>
                <strong className="ms-2 text-danger">$50.99</strong>
              </h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol> */}







      </MDBRow>
    </MDBContainer>
        </div>
      </div>
    
  </>
  );
}

export default Menu;