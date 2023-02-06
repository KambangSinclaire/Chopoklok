import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MDBBtn from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { ClearChopoklokCart } from "../../Features/Cart/CartSlice";

function ClearCartModal() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Clear Cart{" "}
      </Button>{" "}
      Call on clear
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Remove All Items From Your Shopping Cart?</Modal.Title>
        </Modal.Header>
        {/*   <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(ClearChopoklokCart());
              handleClose();
            }}
          >
            CONFIRM
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ClearCartModal;
