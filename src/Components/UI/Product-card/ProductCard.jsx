import React from "react";
import "../../../Styles/product-card.css";
import { Link } from "react-router-dom";
import { MDBTypography } from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import {addToCart} from "../../../Features/Cart/CartSlice";
import CartItem from "../../../Pages/cartItem";

const ProductCard = (props) => {
  const {id,title,image01,price,category} = props.item;
  const dispatch = useDispatch();

 /*  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };  */

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <h5>
           <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
          {category}
        </MDBTypography>
        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product__price">FCFA{price}</span>
          <button className="addTOCart__btn" onClick={() => {dispatch(addToCart({id,image01,price,title,category}))}} >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;