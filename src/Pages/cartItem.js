import { MDBCardImage, MDBIcon, MDBTypography } from "mdb-react-ui-kit";
import {
  removeItemFromCart,
  increaseItemQty,
  decreaseItemQty,
} from "../Features/Cart/CartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({ id, img, title, category, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <div className="d-flex align-items-center mb-5">
      <div className="flex-shrink-0">
        <MDBCardImage
          src={img}
          fluid
          style={{ width: "150px" }}
          alt="Generic placeholder image"
        />
      </div>

      <div className="flex-grow-1 ms-3">
        <a href="#!" className="float-end text-black">
          <MDBIcon
            fas
            icon="times"
            className="removeBtn"
            onClick={() => dispatch(removeItemFromCart(id))}
          />
        </a>
        <MDBTypography tag="h5" className="text-primary">
          {title}
        </MDBTypography>
        <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
          {category}
        </MDBTypography>

        <div className="d-flex align-items-center">
          <p className="fw-bold mb-0 me-5 pe-3">${price}</p>

          <div className="def-number-input number-input safari_only">
            <button
              className="minus"
              onClick={() => {
                //Automatically remove the item from cart if the amount is less then 1
                if (amount === 1) {
                  dispatch(removeItemFromCart(id));
                  return;
                }
                dispatch(decreaseItemQty(id));
              }}
            ></button>
            <input
              className="quantity fw-bold text-black"
              min={0}
              value={amount}
              type="number"
            />
            <button
              className="plus"
              onClick={() => dispatch(increaseItemQty(id))}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
